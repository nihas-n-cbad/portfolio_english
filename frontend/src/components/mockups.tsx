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
              <span className="size-1 animate-pulse-soft rounded-full bg-accent-sage" />
              Live
            </div>
          </div>

          <div className="mt-3 grid grid-cols-[1.55fr_1fr] gap-2">
            <div className="rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
              <div className="flex items-center justify-between text-[5px] text-white/35">
                <span>Cash flow</span>
                <span className="text-accent-sage">+12.4%</span>
              </div>
              <div className="mt-2 flex h-14 items-end gap-[3px]">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={cn(
                      'flex-1 origin-bottom animate-eq rounded-[1px]',
                      index === bars.length - 3 ? 'bg-accent-sage' : 'bg-white/15',
                    )}
                    style={{ height: `${height}%`, animationDelay: `${index * 0.09}s` }}
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
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-accent-sky)_0_46%,#8a8a8a_46%_68%,#3a3a3a_68%_100%)]" />
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
        <span className="text-[0.62rem] font-medium tracking-[0.3em] text-accent-violet uppercase">
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

/** Camera-and-risk interface for the medical waste segregation concept. */
export function WasteMockup({ className }: { className?: string }) {
  const streams = [
    { label: 'Yellow', note: 'Infectious', value: 86, tone: 'bg-[#c8b071]' },
    { label: 'Red', note: 'Anatomical', value: 9, tone: 'bg-[#b56a68]' },
    { label: 'White', note: 'Sharps', value: 4, tone: 'bg-[#d8d5cd]' },
    { label: 'Blue', note: 'Glassware', value: 1, tone: 'bg-[#6f8ea3]' },
  ]

  return (
    <div className={cn('absolute', className)} aria-hidden>
      <div className="w-[214px] rotate-[-5deg] rounded-xl border border-white/[0.09] bg-[#0c0c0c] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2.5">
          <span className="text-[6px] font-medium tracking-[0.12em] text-cream/85 uppercase">
            Medi-Waste AI
          </span>
          <span className="flex items-center gap-1 text-[5px] text-white/45">
            <span className="size-1 animate-pulse-soft rounded-full bg-accent-sage" />
            Scanning
          </span>
        </div>

        <div className="p-3">
          <div className="relative grid h-24 place-items-center overflow-hidden rounded-md border border-dashed border-white/15 bg-[linear-gradient(140deg,#171717,#0d0d0d)]">
            <div className="absolute inset-x-6 top-0 h-px animate-sweep bg-accent-amber/70" />
            <div className="text-center">
              <p className="text-[5px] tracking-[0.16em] text-white/35 uppercase">Bag detected</p>
              <p className="mt-1 text-[10px] font-light tracking-[0.02em] text-cream">TX-04 · 12:40</p>
              <p className="text-[4.5px] tracking-[0.1em] text-white/30 uppercase">Ward 6 · 2.4 kg</p>
            </div>
            <span className="absolute inset-x-8 bottom-3 h-px bg-cream/15" />
          </div>

          <div className="mt-2 flex items-center justify-between rounded-md border border-[#6b5a2e]/50 bg-[#231d10] px-2 py-1.5">
            <span className="text-[4.5px] tracking-[0.14em] text-[#e0c98a] uppercase">AMR risk</span>
            <span className="text-[5px] font-medium tracking-[0.1em] text-[#e0c98a] uppercase">
              High · incinerate
            </span>
          </div>

          <div className="mt-2 space-y-[5px]">
            {streams.map((stream, index) => (
              <div key={stream.label} className="flex items-center gap-2">
                <span className={cn('size-1.5 rounded-[1px]', stream.tone)} />
                <span className="w-9 text-[5px] text-white/55">{stream.label}</span>
                <span className="flex-1">
                  <span className="block h-[2px] rounded-full bg-white/10">
                    <span
                      className="block h-full animate-grow origin-left rounded-full bg-accent-amber/80"
                      style={{ width: `${stream.value}%`, animationDelay: `${index * 0.08}s` }}
                    />
                  </span>
                </span>
                <span className="w-5 text-right text-[4.5px] text-white/35">{stream.value}%</span>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded-md bg-cream px-2 py-1.5 text-center">
            <span className="text-[5px] font-medium tracking-[0.1em] text-[#0b0b0b] uppercase">
              Log disposal
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Month-at-a-glance spending list for the expense tracker concept. */
export function ExpenseMockup({ className }: { className?: string }) {
  const rows = [
    { label: 'Rent', amount: '₹7,800', value: 42 },
    { label: 'Food', amount: '₹4,260', value: 23 },
    { label: 'Travel', amount: '₹2,580', value: 14 },
    { label: 'Other', amount: '₹3,900', value: 21 },
  ]

  return (
    <div className={cn('absolute', className)} aria-hidden>
      <div className="w-[206px] rotate-[4deg] rounded-xl border border-white/[0.09] bg-[#0c0c0c] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2.5">
          <span className="text-[6px] font-medium tracking-[0.12em] text-cream/85 uppercase">
            Spend
          </span>
          <span className="text-[5px] tracking-[0.1em] text-white/35 uppercase">August</span>
        </div>

        <div className="p-3">
          <p className="text-[5px] tracking-[0.14em] text-white/35 uppercase">Spent this month</p>
          <div className="mt-1 flex items-end justify-between">
            <p className="text-[16px] leading-none font-light tracking-[-0.02em] text-cream">
              ₹18,540
            </p>
            <span className="text-[5px] text-accent-sage">+6.2%</span>
          </div>

          <div className="mt-3 space-y-2">
            {rows.map((row, index) => (
              <div key={row.label}>
                <div className="flex items-center justify-between text-[5px]">
                  <span className="text-white/55">{row.label}</span>
                  <span className="text-white/40">{row.amount}</span>
                </div>
                <span className="mt-1 block h-[3px] rounded-full bg-white/[0.08]">
                  <span
                    className="block h-full origin-left animate-grow rounded-full bg-accent-sky/80"
                    style={{ width: `${row.value * 2}%`, animationDelay: `${index * 0.1}s` }}
                  />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1.5">
            <span className="text-[4.5px] tracking-[0.12em] text-white/35 uppercase">
              Budget left
            </span>
            <span className="text-[6px] text-cream/90">₹6,460</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Payment confirmation with a payee-risk reading for the UPI concept. */
export function UpiMockup({ className }: { className?: string }) {
  const signals = [
    ['New payee', 'no history'],
    ['Velocity', '3 in 10 min'],
    ['Device', 'known'],
  ]

  return (
    <div className={cn('absolute', className)} aria-hidden>
      <div className="relative w-[150px] rotate-[6deg] rounded-[24px] border border-white/20 bg-[#0b0b0b] p-[5px] shadow-[0_30px_70px_-18px_rgba(0,0,0,0.95)]">
        <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#121212]">
          <div className="flex justify-center pt-1.5">
            <span className="h-1 w-9 rounded-full bg-white/15" />
          </div>

          <div className="px-3 pt-4 pb-4">
            <p className="text-[4.5px] tracking-[0.14em] text-white/30 uppercase">Paying</p>
            <p className="mt-1 text-[7px] leading-tight text-cream">
              Sharma Stores
              <br />
              <span className="text-white/40">@okhdfc</span>
            </p>
            <p className="mt-2 text-[15px] leading-none font-light text-cream">₹2,400</p>

            <div className="mt-3 rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
              <div className="flex items-center justify-between text-[4.5px] tracking-[0.1em] text-white/35 uppercase">
                <span>Risk</span>
                <span className="animate-pulse-soft text-accent-amber">62%</span>
              </div>
              <div className="mt-1.5 flex gap-[2px]">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className={cn(
                      'h-1 flex-1 rounded-[1px]',
                      index < 4
                        ? 'bg-accent-sage/70'
                        : index < 8
                          ? 'bg-accent-amber/80'
                          : 'bg-white/10',
                    )}
                  />
                ))}
              </div>
              <p className="mt-2 text-[4.5px] leading-[1.5] text-white/45">
                First payment to this payee. Confirm the name before you approve.
              </p>
            </div>

            <div className="mt-2 space-y-1">
              {signals.map(([label, note]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-[4.5px] text-white/45">{label}</span>
                  <span className="text-[4px] text-white/25">{note}</span>
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-1">
              <div className="rounded-md border border-white/15 py-1.5 text-center">
                <span className="text-[4.5px] tracking-[0.1em] text-white/50 uppercase">
                  Cancel
                </span>
              </div>
              <div className="rounded-md bg-cream py-1.5 text-center">
                <span className="text-[4.5px] font-medium tracking-[0.1em] text-[#0b0b0b] uppercase">
                  Verify
                </span>
              </div>
            </div>
          </div>
        </div>
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
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-accent-teal)_0_72%,rgba(255,255,255,0.1)_72%_100%)]" />
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
