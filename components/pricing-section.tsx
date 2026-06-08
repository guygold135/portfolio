"use client"

import { Check } from "lucide-react"
import { getPlans, type PlanTranslation } from "@/lib/plans"
import { useLanguage } from "@/lib/i18n/language-context"
import { selectPlanAndScrollToContact } from "@/lib/select-plan"

function PlanCard({ plan }: { plan: PlanTranslation }) {
  const { t } = useLanguage()
  const isFeatured = plan.featured

  return (
    <article
      className={`group relative flex h-full flex-col p-8 transition-all duration-300 md:p-10 ${
        isFeatured
          ? "border border-stone-900/10 bg-stone-100 shadow-lg shadow-stone-950/20"
          : "border border-stone-700/40 border-t-stone-700/60 hover:border-stone-500"
      }`}
    >
      <div className="mb-6 min-h-[1.125rem]">
        {isFeatured && (
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
            {t.pricing.bestSeller}
          </span>
        )}
      </div>

      <h3
        className={`font-heading text-xl font-bold tracking-tight ${isFeatured ? "text-stone-900" : "text-stone-50"}`}
      >
        {plan.name}
      </h3>
      {plan.tagline && (
        <p className={`mt-2 text-sm leading-relaxed ${isFeatured ? "text-stone-600" : "text-stone-400"}`}>
          {plan.tagline}
        </p>
      )}

      <div className="mt-8 flex items-baseline gap-2">
        <span
          className={`font-heading text-4xl font-black tracking-tight ${isFeatured ? "text-stone-900" : "text-stone-50"}`}
        >
          {plan.price}
        </span>
        <span className={`text-sm ${isFeatured ? "text-stone-500" : "text-stone-500"}`}>
          {t.pricing.startingFrom}
        </span>
      </div>

      {plan.note && (
        <div
          className={`mt-8 rounded-lg border px-4 py-3.5 ${
            isFeatured
              ? "border border-green-600/80 bg-stone-900/5 text-stone-800"
              : "border-green-400/40 bg-stone-800/50 text-stone-100"
          }`}
        >
          <p className="text-sm font-semibold leading-relaxed">{plan.note}</p>
        </div>
      )}

      <ul className={`flex-1 space-y-4 ${plan.note ? "mt-6" : "mt-10"}`}>
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm leading-loose ${isFeatured ? "text-stone-600" : "text-stone-400"}`}
          >
            <Check
              className={`mt-1 size-3.5 shrink-0 ${isFeatured ? "text-stone-700" : "text-stone-500"}`}
              strokeWidth={1.5}
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            selectPlanAndScrollToContact(plan.id)
          }}
          className={`inline-flex w-full items-center justify-center border px-8 py-3.5 text-sm font-semibold transition-all duration-300 sm:w-auto ${
            isFeatured
              ? "border-stone-900 bg-stone-900 text-stone-50 hover:bg-stone-800"
              : "border-stone-100 bg-transparent text-stone-50 hover:bg-stone-100 hover:text-stone-900"
          }`}
        >
          {t.pricing.selectPlan}
        </a>
      </div>
    </article>
  )
}

export function PricingSection() {
  const { locale, t } = useLanguage()
  const plans = getPlans(locale)

  return (
    <section id="pricing" className="border-t border-stone-700/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-black tracking-tight text-stone-50 md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-loose text-stone-400">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-16 md:grid-cols-3 md:gap-10">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
