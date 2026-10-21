import { cn } from '@/lib/utils'

const bars = [38, 54, 42, 66, 49, 78, 61, 88, 72, 96, 68, 84]

/** Small, hand-built finance dashboard used as the first project's artwork. */
export function FinanceMockup({ className }: { className?: string }) {
  return (
    <div className={cn('absolute', className)} aria-hidden>
      <div className="w-[106%] rotate-[-5deg] overflow-hidden rounded-xl border border-white/[0.09] bg-[#0c0c0c] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="grid size-3 place-items-center rounded-full bg-cream/90 text-[5px] font-semibold text-black">
              F
            </span>
            <span className="text-[6px] font-medium tracking-[0.1em] text-cream/80 uppercase">
              Finova
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[5px] tracking-[0.08em] text-white/35 uppercase">
            <span className="text-cream/70">Overview</span>
            <span>Analytics</span>
            <span>Cards</span>
            <span className="size-3 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[5px] tracking-[0.14em] text-white/35 uppercase">
                Total balance
              </p>
              <p className="mt-1 text-[15px] font-light tracking-[-0.02em] text-cream">
                $24,850.50
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-white/10 px-1.5 py-0.5 text-[5px] text-white/50">
              <span className="size-1 rounded-full bg-emerald-400" />
              Live
            </div>
          </div>

          <div className="mt-3 grid grid-cols-[1.55fr_1fr] gap-2">
            <div className="rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
              <div className="flex items-center justify-between text-[5px] text-white/35">
                <span>Cash flow</span>
                <span className="text-emerald-300/80">+12.4%</span>
              </div>
              <div className="mt-2 flex h-14 items-end gap-[3px]">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={cn(
                      'flex-1 rounded-[1px]',
                      index === bars.length - 3 ? 'bg-cream' : 'bg-white/15',
                    )}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[4px] tracking-wide text-white/25 uppercase">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
              </div>
            </div>

            <div className="rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
              <p className="text-[5px] text-white/35">Spending</p>
              <div className="relative mx-auto mt-2 grid size-14 place-items-center">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ece9e2_0_46%,#8a8a8a_46%_68%,#3a3a3a_68%_100%)]" />
                <div className="absolute inset-[6px] rounded-full bg-[#0d0d0d]" />
                <div className="relative text-center">
                  <p className="text-[8px] font-light text-cream">68%</p>
                  <p className="text-[4px] text-white/30">of budget</p>
                </div>
              </div>
              <div className="mt-2 space-y-[3px]">
                <div className="h-[2px] w-full rounded-full bg-white/10" />
                <div className="h-[2px] w-2/3 rounded-full bg-white/[0.07]" />
              </div>
            </div>
          </div>

          <div className="mt-2 rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
            <div className="flex items-center justify-between text-[5px] text-white/35">
              <span>Recent activity</span>
              <span className="text-white/25">View all</span>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[
                ['Figma annual plan', '-$144.00', '74%'],
                ['Acme Studio — invoice', '+$3,200.00', '56%'],
                ['Cloud compute', '-$86.40', '38%'],
              ].map(([label, value, width]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="size-2.5 rounded-[3px] bg-white/[0.08]" />
                  <span className="flex-1 truncate text-[5px] text-white/60">{label}</span>
                  <span className="text-[5px] text-cream/80">{value}</span>
                  <span className="h-[2px] w-4 rounded-full bg-white/10">
                    <span className="block h-full rounded-full bg-cream/50" style={{ width }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Chrome ribbon + studio wordmark for the branding project. */
export function BrandMockup({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0', className)} aria-hidden>
      <img
        src="/images/chrome.jpg"
        alt=""
        loading="lazy"
        className="h-full w-full scale-[1.24] object-cover object-[74%_44%] grayscale contrast-[1.05] brightness-[0.5]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_16%_6%,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.9)_58%,#0a0a0a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a0a0a]/85 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-6">
        <span className="text-[0.62rem] font-medium tracking-[0.3em] text-cream/90 uppercase">
          Nexora
        </span>
        <span className="flex gap-3 text-[0.42rem] tracking-[0.16em] text-cream/40 uppercase">
          <span>Docs</span>
          <span>API</span>
          <span>Pricing</span>
        </span>
      </div>
    </div>
  )
}

/** Phone screen for the wellness companion concept. */
export function WellnessMockup({ className }: { className?: string }) {
  return (
    <div className={cn('absolute', className)} aria-hidden>
      <div className="relative w-[166px] rotate-[-7deg] rounded-[26px] border border-white/20 bg-[#0b0b0b] p-[5px] shadow-[0_30px_70px_-18px_rgba(0,0,0,0.95)]">
        <div className="overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#121212]">
          {/* notch */}
          <div className="flex justify-center pt-1.5">
            <span className="h-1 w-10 rounded-full bg-white/15" />
          </div>

          <div className="px-3 pt-4 pb-4">
            <p className="text-[6px] text-white/35">Hello, Alex</p>
            <p className="mt-1 text-[8px] leading-tight text-cream">
              Your Total Steps
              <br />
              Today
            </p>

            <div className="relative mx-auto mt-3 grid size-[92px] place-items-center">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ece9e2_0_72%,rgba(255,255,255,0.1)_72%_100%)]" />
              <div className="absolute inset-[7px] rounded-full bg-[#121212]" />
              <div className="relative text-center">
                <p className="text-[20px] leading-none font-light tracking-[-0.03em] text-cream">
                  72%
                </p>
                <p className="mt-1 text-[4.5px] tracking-[0.12em] text-white/35 uppercase">
                  of daily goal
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-between text-center">
              {[
                ['1,240', 'Steps'],
                ['18', 'Active'],
                ['76', 'BPM'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-[7px] text-cream/85">{value}</p>
                  <p className="text-[4px] tracking-[0.1em] text-white/30 uppercase">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-1.5">
              {[
                ['Morning run', '32 min'],
                ['Stretch', '8 min'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="size-3 rounded-full bg-white/10" />
                    <span className="text-[5px] text-white/60">{label}</span>
                  </span>
                  <span className="text-[4px] text-white/30">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-md bg-cream px-2 py-1.5 text-center">
              <span className="text-[5px] font-medium tracking-[0.08em] text-[#0b0b0b] uppercase">
                Start workout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
