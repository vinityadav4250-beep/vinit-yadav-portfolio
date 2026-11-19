import type { Project } from '@/data/portfolio'

/**
 * Abstract, code-drawn product previews. These are illustrative only —
 * the real systems are confidential, so no screenshots or data are shown.
 */

const accents: Record<Project['accent'], { from: string; to: string; dot: string }> = {
  violet: { from: 'rgba(139,92,246,0.35)', to: 'rgba(59,130,246,0.10)', dot: '#a78bfa' },
  cyan: { from: 'rgba(34,211,238,0.28)', to: 'rgba(139,92,246,0.10)', dot: '#67e8f9' },
  blue: { from: 'rgba(59,130,246,0.32)', to: 'rgba(34,211,238,0.08)', dot: '#60a5fa' },
  emerald: { from: 'rgba(52,211,153,0.25)', to: 'rgba(139,92,246,0.12)', dot: '#6ee7b7' },
}

const Bar = ({ w, o = 0.12 }: { w: string; o?: number }) => (
  <span className="block h-1.5 rounded-full" style={{ width: w, background: `rgba(255,255,255,${o})` }} />
)

function CrmMock({ dot }: { dot: string }) {
  const cols = [
    { name: 'New', n: 3 },
    { name: 'Qualified', n: 2 },
    { name: 'Won', n: 2 },
  ]
  return (
    <div className="grid h-full grid-cols-[3.2rem_1fr]">
      <div className="space-y-3 border-r border-white/[0.06] p-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="block h-5 w-5 rounded-md" style={{ background: i === 1 ? dot : 'rgba(255,255,255,0.06)', opacity: i === 1 ? 0.8 : 1 }} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Bar w="30%" o={0.25} />
          <span className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[9px] text-zinc-500">tenant: acme</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {cols.map((c) => (
            <div key={c.name} className="rounded-lg bg-white/[0.03] p-2">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-zinc-500">{c.name}</p>
              <div className="space-y-1.5">
                {Array.from({ length: c.n }).map((_, i) => (
                  <div key={i} className="space-y-1.5 rounded-md border border-white/[0.06] bg-ink-900/80 p-2">
                    <Bar w="80%" o={0.2} />
                    <Bar w="50%" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LifeMock({ dot }: { dot: string }) {
  const steps = ['Proposal', 'Underwriting', 'Insurer API', 'Issued']
  return (
    <div className="flex h-full flex-col justify-center gap-5 p-6">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px]"
                style={{ borderColor: i < 3 ? dot : 'rgba(255,255,255,0.15)', color: i < 3 ? dot : '#71717a', background: i < 3 ? 'rgba(255,255,255,0.03)' : 'transparent' }}
              >
                {i + 1}
              </span>
              <span className="whitespace-nowrap font-mono text-[9px] text-zinc-500">{s}</span>
            </div>
            {i < steps.length - 1 && <span className="mx-1 mb-4 h-px flex-1" style={{ background: i < 2 ? dot : 'rgba(255,255,255,0.1)', opacity: 0.6 }} />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2 rounded-xl border border-white/[0.06] bg-ink-900/70 p-3.5">
          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Policy</p>
          <Bar w="70%" o={0.25} />
          <Bar w="45%" />
          <Bar w="60%" />
        </div>
        <div className="space-y-2 rounded-xl border border-white/[0.06] bg-ink-900/70 p-3.5">
          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Premium</p>
          <div className="flex h-10 items-end gap-1">
            {[40, 65, 50, 80, 60, 90].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: dot, opacity: 0.25 + i * 0.1 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function VehicleMock({ dot }: { dot: string }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      <div className="mb-1 flex items-center gap-2">
        {['4W', '2W'].map((t, i) => (
          <span key={t} className="rounded-full px-2.5 py-0.5 font-mono text-[10px]" style={{ background: i === 0 ? dot : 'rgba(255,255,255,0.05)', color: i === 0 ? '#0a0a0f' : '#a1a1aa' }}>
            {t}
          </span>
        ))}
        <span className="ml-auto font-mono text-[9px] text-zinc-600">quotes · comparison</span>
      </div>
      {[0.9, 0.7, 0.55].map((w, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-900/70 px-3.5 py-3">
          <span className="h-7 w-7 shrink-0 rounded-lg bg-white/[0.06]" />
          <div className="flex-1 space-y-1.5">
            <Bar w={`${w * 60}%`} o={0.22} />
            <Bar w="35%" />
          </div>
          <span className="rounded-md px-2 py-1 font-mono text-[9px]" style={{ border: `1px solid ${i === 0 ? dot : 'rgba(255,255,255,0.1)'}`, color: i === 0 ? dot : '#71717a' }}>
            {i === 0 ? 'Best' : 'Buy'}
          </span>
        </div>
      ))}
    </div>
  )
}

function DriveMock({ dot }: { dot: string }) {
  const r = 38
  const c = 2 * Math.PI * r
  return (
    <div className="flex h-full items-center justify-center gap-6 p-6">
      <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={dot} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${c * 0.68} ${c}`} opacity="0.8" />
      </svg>
      <div className="w-36 space-y-3">
        {['Finance', 'Insurance', 'Risk'].map((k, i) => (
          <div key={k}>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">{k}</p>
            <div className="h-1.5 rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full" style={{ width: `${[72, 55, 38][i]}%`, background: dot, opacity: 0.7 }} />
            </div>
          </div>
        ))}
        <span className="inline-block rounded-md border border-white/10 px-2 py-0.5 font-mono text-[9px] text-zinc-400">AI · concept</span>
      </div>
    </div>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  const a = accents[project.accent]
  const Mock = { 'crm-revamp': CrmMock, 'life-insurance': LifeMock, 'vehicle-insurance': VehicleMock, driveiq: DriveMock }[project.id] ?? CrmMock

  return (
    <div
      className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-ink-900"
      style={{ backgroundImage: `radial-gradient(120% 90% at 0% 0%, ${a.from}, transparent 60%), radial-gradient(100% 80% at 100% 100%, ${a.to}, transparent 60%)` }}
      aria-hidden
    >
      <div className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/[0.08] bg-ink-950/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015] sm:inset-8">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="ml-2 font-mono text-[9px] text-zinc-600">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="h-[calc(100%-29px)]">
          <Mock dot={a.dot} />
        </div>
      </div>
    </div>
  )
}
