"use client"

import Image from "next/image"
import {
  Check,
  Clock,
  Shield,
  TrendingUp,
  X,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const valueIcons = {
  trust: Shield,
  conversion: TrendingUp,
  "always-on": Clock,
} as const

function ComparisonCard() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-stone-700/60 bg-gradient-to-br from-stone-800/80 via-stone-900 to-stone-950 p-5 shadow-xl shadow-stone-950/40 transition-all duration-500 hover:border-stone-600/80 hover:shadow-stone-950/60 md:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -end-16 -top-16 size-48 rounded-full bg-stone-700/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -start-12 size-56 rounded-full bg-stone-600/10 blur-3xl"
      />

      <div className="relative flex min-h-0 flex-1 flex-col gap-3">
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-red-900/25 p-5 transition-colors duration-300 group-hover:border-red-800/35">
          <Image
            src="/images/about/social-media-bg.png"
            alt=""
            fill
            aria-hidden
            className="object-cover object-top opacity-80"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-red-950/75 via-stone-950/65 to-stone-950/20"
          />
          <div className="relative flex flex-1 flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-red-900/35 bg-stone-900/70 backdrop-blur-sm">
                <X className="size-4 text-red-400/80" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-base font-bold tracking-tight text-stone-100">
                {about.socialTitle}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {about.socialDrawbacks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-snug text-stone-300"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded border border-red-900/35 bg-stone-900/70 backdrop-blur-sm">
                    <X className="size-3 text-red-400/80" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center">
          <span className="rounded-full border border-stone-700/60 bg-stone-800/80 px-3.5 py-1 text-xs font-medium tracking-wide text-stone-500">
            {about.versus}
          </span>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-stone-500/30 p-5 transition-all duration-300 group-hover:border-stone-400/50">
          <Image
            src="/images/about/modern-website-bg.png"
            alt=""
            fill
            aria-hidden
            className="object-cover object-top opacity-80"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-stone-950/85 via-stone-950/60 to-stone-950/25"
          />
          <div className="relative flex flex-1 flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-stone-500/40 bg-stone-900/70 backdrop-blur-sm">
                <Zap className="size-4 text-stone-100" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-base font-bold tracking-tight text-stone-50">
                {about.websiteTitle}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {about.websiteBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-snug text-stone-200"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded border border-stone-500/40 bg-stone-900/70 backdrop-blur-sm">
                    <Check className="size-3 text-stone-100" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-t border-stone-700/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="flex flex-col text-start">
            <h2 className="text-balance font-heading text-3xl font-black tracking-tight text-stone-50 md:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-8 text-pretty text-lg leading-loose text-stone-400">
              {t.about.intro}
            </p>

            <ul className="mt-10 space-y-8">
              {t.about.valuePoints.map(({ key, title, description }) => {
                const Icon = valueIcons[key]
                return (
                  <li key={key} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-stone-700/60 bg-stone-800/60 transition-colors duration-300 hover:border-stone-600 hover:bg-stone-800">
                      <Icon className="size-5 text-stone-200" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-stone-100">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-loose text-stone-400 md:text-base">
                        {description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex h-full lg:sticky lg:top-28 lg:self-stretch">
            <ComparisonCard />
          </div>
        </div>
      </div>
    </section>
  )
}
