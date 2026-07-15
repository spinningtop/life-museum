import { useState, useMemo } from 'react';
import { people, relationships } from '@/jobs/data/people';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';
import type { Person, Relationship } from '@/jobs/data/people';

// SVG 画布尺寸与中心点（900×900，中心 450,450）
const VIEW_SIZE = 900;
const CENTER = { x: 450, y: 450 };

// 三圈平面半径：内圈 140、中圈 240、外圈 330
const RING_RADII: Record<1 | 2 | 3, number> = { 1: 140, 2: 240, 3: 330 };

// 关系强度 → 连线样式（颜色 / 粗细 / 透明度）
// high 银色粗线、medium 苹果蓝中线、low 银灰细线
function getLineStyle(intensity: Relationship['intensity']) {
  switch (intensity) {
    case 'high':
      return { stroke: '#C0C0C0', strokeWidth: 2.5, opacity: 0.7 };
    case 'medium':
      return { stroke: '#60A5FA', strokeWidth: 1.8, opacity: 0.5 };
    case 'low':
    default:
      return { stroke: '#E5E7EB', strokeWidth: 1.2, opacity: 0.3 };
  }
}

// 固定 seed 伪随机数（线性同余），用于生成稳定的星空
function makeRand(seed: number) {
  let s = seed % 233280;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// 生成固定星点（避免每次渲染随机）
const STARS = (() => {
  const rand = makeRand(19550224);
  const arr: { x: number; y: number; r: number; op: number; bright: boolean }[] = [];
  for (let i = 0; i < 42; i++) {
    const bright = rand() > 0.86;
    arr.push({
      x: rand() * VIEW_SIZE,
      y: rand() * VIEW_SIZE,
      r: bright ? rand() * 1.0 + 1.0 : rand() * 1.0 + 0.4,
      op: rand() * 0.4 + 0.2,
      bright,
    });
  }
  return arr;
})();

// 按圈层分组（主角 id=0 单独居中渲染）
const RING1 = people.filter((p) => p.ring === 1 && p.id !== 0);
const RING2 = people.filter((p) => p.ring === 2);
const RING3 = people.filter((p) => p.ring === 3);
const OTHERS = [...RING1, ...RING2, ...RING3];

// 节点平面坐标结果
interface Pos {
  x: number;
  y: number;
}

/**
 * 人物星图（平面关系图版）
 * 主角居中，其余人物分布在三层同心圆上
 * 悬停高亮相关连线、点击连线查看关系详情、点击节点查看人物简介
 */
export default function PeopleMap() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 悬停的人物 id
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);
  // 选中的关系（点击连线时设置）
  const [selectedRelationship, setSelectedRelationship] =
    useState<Relationship | null>(null);
  // 选中的人物（点击节点时设置）
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // 计算 id → 平面坐标，按圈层均匀分布
  const posMap = useMemo<Map<number, Pos>>(() => {
    const map = new Map<number, Pos>();
    // 主角在中心
    map.set(0, { x: CENTER.x, y: CENTER.y });

    // 内圈（ring1）：半径 140，从顶部 -90° 顺时针均匀分布
    RING1.forEach((p, i) => {
      const radius = RING_RADII[1];
      const angle = -Math.PI / 2 + (2 * Math.PI / RING1.length) * i;
      map.set(p.id, {
        x: CENTER.x + radius * Math.cos(angle),
        y: CENTER.y + radius * Math.sin(angle),
      });
    });

    // 中圈（ring2）：半径 240，从顶部 -90° 顺时针均匀分布
    RING2.forEach((p, i) => {
      const radius = RING_RADII[2];
      const angle = -Math.PI / 2 + (2 * Math.PI / RING2.length) * i;
      map.set(p.id, {
        x: CENTER.x + radius * Math.cos(angle),
        y: CENTER.y + radius * Math.sin(angle),
      });
    });

    // 外圈（ring3）：半径 330，从顶部 -90° 顺时针均匀分布
    RING3.forEach((p, i) => {
      const radius = RING_RADII[3];
      const angle = -Math.PI / 2 + (2 * Math.PI / RING3.length) * i;
      map.set(p.id, {
        x: CENTER.x + radius * Math.cos(angle),
        y: CENTER.y + radius * Math.sin(angle),
      });
    });

    return map;
  }, []);

  // 按 id 取人物
  const getPerson = (id: number) => people.find((p) => p.id === id);

  // 悬停时：收集与该人物相关的所有关系 id
  const relatedRelIds = new Set<number>();
  if (hoveredPerson !== null) {
    relationships.forEach((r) => {
      if (r.fromId === hoveredPerson || r.toId === hoveredPerson) {
        relatedRelIds.add(r.id);
      }
    });
  }

  // 主线关系（主角 0 出发）与副线关系（人物之间）
  const mainRels = relationships.filter((r) => r.fromId === 0 || r.toId === 0);
  const sideRels = relationships.filter((r) => r.fromId !== 0 && r.toId !== 0);

  // 判断连线是否处于激活态（悬停相关 / 被选中 时不被淡化）
  const isLineActive = (rel: Relationship) =>
    hoveredPerson === null ||
    relatedRelIds.has(rel.id) ||
    selectedRelationship?.id === rel.id;

  // 是否有详情展示
  const hasDetail = selectedRelationship !== null || selectedPerson !== null;

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#C0C0C0] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            CONSTELLATION
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">
            人物星图
          </h2>
          <p className="mt-3 font-sans text-xs text-[#E5E7EB]/50 sm:mt-4 sm:text-sm">
            乔布斯的人际宇宙 · 三圈十八人
          </p>
        </div>

        {/* 主体：SVG 星图 + 详情卡片 */}
        <div className="glass-card relative overflow-hidden p-3 sm:p-4 md:p-6">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* SVG 星图（小屏可横向滚动） */}
            <div className="w-full min-w-0 flex-1 overflow-x-auto">
              <svg
                viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
                className="h-auto w-full min-w-[300px]"
                style={{ maxHeight: '760px' }}
                role="img"
                aria-label="乔布斯人物星图"
              >
                <defs>
                  {/* 深空背景渐变 */}
                  <radialGradient id="jobsStarfieldBg" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#141414" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
                  </radialGradient>
                  {/* 主角光晕渐变 */}
                  <radialGradient id="jobsHeroGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
                  </radialGradient>
                  {/* 标签内阴影 */}
                  <filter id="jobsLabelShadow">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* 背景层：点击空白关闭详情 */}
                <rect
                  x={0}
                  y={0}
                  width={VIEW_SIZE}
                  height={VIEW_SIZE}
                  fill="#0a0a0a"
                  onClick={() => {
                    setSelectedRelationship(null);
                    setSelectedPerson(null);
                  }}
                />

                {/* 星点：固定 seed，部分亮星带十字光芒 */}
                <g>
                  {STARS.map((s, i) => (
                    <g key={`star-${i}`}>
                      <circle cx={s.x} cy={s.y} r={s.r} fill="#E5E7EB" opacity={s.op} />
                      {s.bright && (
                        <>
                          <line
                            x1={s.x - 3}
                            y1={s.y}
                            x2={s.x + 3}
                            y2={s.y}
                            stroke="#E5E7EB"
                            strokeWidth={0.5}
                            opacity={s.op}
                          />
                          <line
                            x1={s.x}
                            y1={s.y - 3}
                            x2={s.x}
                            y2={s.y + 3}
                            stroke="#E5E7EB"
                            strokeWidth={0.5}
                            opacity={s.op}
                          />
                        </>
                      )}
                    </g>
                  ))}
                </g>

                {/* 圈层辅助线（极淡圆形） */}
                <g stroke="#E5E7EB" strokeOpacity={0.08} strokeWidth={1} fill="none">
                  <circle cx={CENTER.x} cy={CENTER.y} r={RING_RADII[1]} />
                  <circle cx={CENTER.x} cy={CENTER.y} r={RING_RADII[2]} />
                  <circle cx={CENTER.x} cy={CENTER.y} r={RING_RADII[3]} />
                </g>

                {/* 副线关系（人物之间）：直虚线 */}
                {sideRels.map((rel) => {
                  const from = posMap.get(rel.fromId)!;
                  const to = posMap.get(rel.toId)!;
                  const style = getLineStyle(rel.intensity);
                  const active = isLineActive(rel);
                  const isSel = selectedRelationship?.id === rel.id;
                  const midX = (from.x + to.x) / 2;
                  const midY = (from.y + to.y) / 2;
                  const angle = Math.atan2(to.y - from.y, to.x - from.x);
                  const offset = 15;
                  const labelX = midX + Math.cos(angle + Math.PI / 2) * offset;
                  const labelY = midY + Math.sin(angle + Math.PI / 2) * offset;

                  return (
                    <g key={`side-${rel.id}`}>
                      {/* 实际连线 */}
                      <line
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke={style.stroke}
                        strokeWidth={Math.max(style.strokeWidth - 0.6, 0.8) + (isSel ? 1 : 0)}
                        strokeOpacity={isSel ? 0.95 : active ? style.opacity * 0.8 : 0.08}
                        strokeDasharray="4 4"
                        style={{ transition: 'stroke-opacity 0.3s' }}
                      />
                      {/* 关系标签 */}
                      <g transform={`translate(${labelX} ${labelY})`}>
                        <rect
                          x="-22"
                          y="-9"
                          width="44"
                          height="18"
                          rx="4"
                          fill="rgba(229, 231, 235, 0.15)"
                          stroke="rgba(229, 231, 235, 0.4)"
                          strokeWidth="1"
                          filter="url(#jobsLabelShadow)"
                        />
                        <text
                          x={0}
                          y="4"
                          textAnchor="middle"
                          className="font-sans"
                          fontSize={10}
                          fill="#E5E7EB"
                          fillOpacity={active ? 0.9 : 0.4}
                          style={{ pointerEvents: 'none' }}
                        >
                          {rel.type}
                        </text>
                      </g>
                      {/* 隐形加粗命中区域，便于点击 */}
                      <line
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke="transparent"
                        strokeWidth={14}
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRelationship(rel);
                          setSelectedPerson(null);
                        }}
                      >
                        <title>{rel.type}</title>
                      </line>
                    </g>
                  );
                })}

                {/* 主线关系（主角 → 各人物）：直线 */}
                {mainRels.map((rel) => {
                  const otherId = rel.fromId === 0 ? rel.toId : rel.fromId;
                  const from = posMap.get(0)!;
                  const to = posMap.get(otherId)!;
                  const style = getLineStyle(rel.intensity);
                  const active = isLineActive(rel);
                  const isSel = selectedRelationship?.id === rel.id;
                  const midX = (from.x + to.x) / 2;
                  const midY = (from.y + to.y) / 2;
                  const angle = Math.atan2(to.y - from.y, to.x - from.x);
                  const offset = 15;
                  const labelX = midX + Math.cos(angle + Math.PI / 2) * offset;
                  const labelY = midY + Math.sin(angle + Math.PI / 2) * offset;

                  return (
                    <g key={`main-${rel.id}`}>
                      {/* 实际连线 */}
                      <line
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke={style.stroke}
                        strokeWidth={style.strokeWidth + (isSel ? 1.2 : 0)}
                        strokeOpacity={isSel ? 0.95 : active ? style.opacity : 0.08}
                        style={{ transition: 'stroke-opacity 0.3s' }}
                      />
                      {/* 关系标签 */}
                      <g transform={`translate(${labelX} ${labelY})`}>
                        <rect
                          x="-22"
                          y="-9"
                          width="44"
                          height="18"
                          rx="4"
                          fill="rgba(229, 231, 235, 0.15)"
                          stroke="rgba(229, 231, 235, 0.4)"
                          strokeWidth="1"
                          filter="url(#jobsLabelShadow)"
                        />
                        <text
                          x={0}
                          y="4"
                          textAnchor="middle"
                          className="font-sans"
                          fontSize={10}
                          fill="#E5E7EB"
                          fillOpacity={active ? 0.9 : 0.4}
                          style={{ pointerEvents: 'none' }}
                        >
                          {rel.type}
                        </text>
                      </g>
                      {/* 隐形加粗命中区域，便于点击 */}
                      <line
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke="transparent"
                        strokeWidth={14}
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRelationship(rel);
                          setSelectedPerson(null);
                        }}
                      >
                        <title>{rel.type}</title>
                      </line>
                    </g>
                  );
                })}

                {/* 人物节点（主角之外） */}
                {OTHERS.map((person) => {
                  const pos = posMap.get(person.id)!;
                  const isHover = hoveredPerson === person.id;
                  const isSel = selectedPerson?.id === person.id;
                  const dim = hoveredPerson !== null && !isHover;
                  const scale = isHover ? 1.2 : 1;

                  return (
                    <g
                      key={`node-${person.id}`}
                      transform={`translate(${pos.x} ${pos.y}) scale(${scale})`}
                      style={{
                        cursor: 'pointer',
                        transition: 'transform 0.25s ease',
                      }}
                      onMouseEnter={() => setHoveredPerson(person.id)}
                      onMouseLeave={() => setHoveredPerson(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPerson(person);
                        setSelectedRelationship(null);
                      }}
                    >
                      {/* 脉冲光晕 */}
                      <circle cx={0} cy={0} r={18} fill={person.color} opacity={dim ? 0.08 : 0.35}>
                        <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" />
                        <animate
                          attributeName="opacity"
                          values={dim ? '0.08;0.08;0.08' : '0.35;0;0.35'}
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      {/* 节点本体 */}
                      <circle
                        cx={0}
                        cy={0}
                        r={20}
                        fill={person.color}
                        fillOpacity={dim ? 0.4 : 1}
                        stroke="#0a0a0a"
                        strokeWidth={2}
                        style={{ transition: 'fill-opacity 0.25s' }}
                      />
                      {/* 悬停高亮环 */}
                      {isHover && (
                        <circle cx={0} cy={0} r={24} fill="none" stroke={person.color} strokeWidth={2} opacity={0.9} />
                      )}
                      {/* 选中高亮环 */}
                      {isSel && (
                        <circle cx={0} cy={0} r={26} fill="none" stroke="#E5E7EB" strokeWidth={1.5} opacity={0.8} />
                      )}
                      {/* 姓名标签：节点下方 */}
                      <text
                        x={0}
                        y={34}
                        textAnchor="middle"
                        className="font-sans"
                        fontSize={13}
                        fill="#E5E7EB"
                        fillOpacity={dim ? 0.3 : 0.95}
                        style={{ transition: 'fill-opacity 0.25s', pointerEvents: 'none' }}
                      >
                        {person.name}
                      </text>
                      <title>{`${person.name} · ${person.title}`}</title>
                    </g>
                  );
                })}

                {/* 主角节点（居中，最后绘制确保在最上层） */}
                <g transform={`translate(${CENTER.x} ${CENTER.y})`}>
                  {/* 外层光晕 */}
                  <circle cx={0} cy={0} r={60} fill="url(#jobsHeroGlow)" />
                  {/* 脉冲圈 */}
                  <circle cx={0} cy={0} r={28} fill="#E5E7EB" opacity={0.25}>
                    <animate attributeName="r" values="28;40;28" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.25;0;0.25" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  {/* 主体 */}
                  <circle
                    cx={0}
                    cy={0}
                    r={28}
                    fill="#E5E7EB"
                    stroke="#C0C0C0"
                    strokeWidth={2.5}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPerson(people[0]);
                      setSelectedRelationship(null);
                    }}
                  />
                  {/* 中心单字"乔" */}
                  <text
                    x={0}
                    y={5}
                    textAnchor="middle"
                    className="font-serif font-bold"
                    fontSize={14}
                    fill="#0a0a0a"
                    style={{ pointerEvents: 'none' }}
                  >
                    乔
                  </text>
                </g>
              </svg>
            </div>

            {/* 详情卡片：lg 屏在右侧，小屏在下方 */}
            <aside className="w-full lg:w-80 lg:flex-shrink-0">
              <div
                className={`glass-card-strong min-h-[240px] p-5 transition-all duration-300 ${
                  hasDetail
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-60 translate-y-2'
                }`}
              >
                {selectedRelationship ? (
                  <div key={`rel-${selectedRelationship.id}`} className="animate-fade-in">
                    <RelationshipCard
                      rel={selectedRelationship}
                      fromName={getPerson(selectedRelationship.fromId)?.name ?? ''}
                      toName={getPerson(selectedRelationship.toId)?.name ?? ''}
                    />
                  </div>
                ) : selectedPerson ? (
                  <div key={`person-${selectedPerson.id}`} className="animate-fade-in">
                    <PersonCard person={selectedPerson} />
                  </div>
                ) : (
                  <EmptyHint />
                )}
              </div>
            </aside>
          </div>

          {/* 图例 */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs text-[#E5E7EB]/40">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: '#E5E7EB' }}
              />
              内圈·至亲
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: '#60A5FA' }}
              />
              中圈·重要
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: '#9CA3AF' }}
              />
              外圈·次要
            </span>
            <span className="ml-auto">
              点击节点查看简介 · 点击连线查看关系 · 点击空白关闭
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 关系详情卡片 */
function RelationshipCard({
  rel,
  fromName,
  toName,
}: {
  rel: Relationship;
  fromName: string;
  toName: string;
}) {
  const intensityText =
    rel.intensity === 'high' ? '强' : rel.intensity === 'medium' ? '中' : '弱';
  const intensityColor =
    rel.intensity === 'high'
      ? '#C0C0C0'
      : rel.intensity === 'medium'
        ? '#60A5FA'
        : '#9CA3AF';
  return (
    <div>
      <p className="mb-2 font-sans text-xs tracking-[0.2em] text-[#C0C0C0]">关系详情</p>
      <h3 className="mb-3 font-serif text-2xl font-bold text-[#E5E7EB]">{rel.type}</h3>
      <div className="mb-3 flex items-center gap-2 font-sans text-sm text-[#60A5FA]">
        <span className="font-medium">{fromName}</span>
        <span className="text-[#E5E7EB]/40">↔</span>
        <span className="font-medium">{toName}</span>
        <span
          className="ml-auto rounded px-1.5 py-0.5 text-[10px]"
          style={{ color: intensityColor, background: `${intensityColor}22` }}
        >
          {intensityText}
        </span>
      </div>
      <p className="font-sans text-sm leading-relaxed text-[#E5E7EB]/75">
        {rel.description}
      </p>
    </div>
  );
}

/** 人物简介卡片 */
function PersonCard({ person }: { person: Person }) {
  return (
    <div>
      <p className="mb-2 font-sans text-xs tracking-[0.2em] text-[#C0C0C0]">人物简介</p>
      <div className="mb-3 flex items-center gap-3">
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ background: person.color }}
        />
        <h3 className="font-serif text-2xl font-bold text-[#E5E7EB]">{person.name}</h3>
      </div>
      <p className="mb-3 font-sans text-sm font-medium text-[#60A5FA]">{person.title}</p>
      <p className="font-sans text-sm leading-relaxed text-[#E5E7EB]/75">{person.intro}</p>
    </div>
  );
}

/** 空状态提示 */
function EmptyHint() {
  return (
    <div className="flex h-full min-h-[180px] flex-col items-center justify-center text-center">
      <p className="font-sans text-sm text-[#E5E7EB]/40">点击星图中的人物或连线</p>
      <p className="mt-1 font-sans text-xs text-[#E5E7EB]/25">
        查看人物简介与关系详情
      </p>
    </div>
  );
}
