"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Check, Mail, MessageCircle } from "lucide-react"

const CONTACT_EMAIL = "guygold1355@gmail.com"
const CONTACT_WHATSAPP = "0526199901"
const WHATSAPP_LINK = "https://wa.me/972526199901"
import { getPlanById, plans } from "@/lib/plans"
import { PLAN_SELECTED_EVENT } from "@/lib/select-plan"

const inputClassName =
  "w-full border-b border-stone-600 bg-transparent px-0 py-3 text-base text-stone-50 placeholder:text-stone-600 outline-none transition-all duration-300 focus:border-stone-100 rounded-none"

export function ContactSection() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")

  useEffect(() => {
    const planId = searchParams.get("plan")
    if (planId && getPlanById(planId)) {
      setSelectedPlan(planId)
    }
  }, [searchParams])

  useEffect(() => {
    function onPlanSelected(event: Event) {
      const planId = (event as CustomEvent<string>).detail
      if (getPlanById(planId)) {
        setSelectedPlan(planId)
      }
    }

    window.addEventListener(PLAN_SELECTED_EVENT, onPlanSelected)
    return () => window.removeEventListener(PLAN_SELECTED_EVENT, onPlanSelected)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !selectedPlan) return
    setSubmitted(true)
  }

  const chosenPlan = getPlanById(selectedPlan)

  return (
    <section id="contact" className="border-t border-stone-700/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-black leading-tight tracking-tight text-stone-50 md:text-5xl">
              רוצה שנבנה סקיצה בחינם לעסק שלך?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-loose text-stone-400">
              השאירו פרטים ונחזור אליכם בוואטסאפ עם הצעה לסקיצה ראשונית — ללא עלות וללא התחייבות.
            </p>
          </div>

          {submitted ? (
            <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-4 border-t border-stone-700/60 pt-16 text-center">
              <span className="flex size-10 items-center justify-center border border-stone-100 text-stone-100">
                <Check className="size-5" strokeWidth={1.5} />
              </span>
              <p className="font-heading text-xl font-bold text-stone-50">תודה, {name}!</p>
              {chosenPlan && (
                <p className="text-sm text-stone-500">
                  חבילה שנבחרה: {chosenPlan.name} ({chosenPlan.price})
                </p>
              )}
              <p className="text-pretty leading-loose text-stone-400">
                קיבלנו את הפרטים ונחזור אליך בוואטסאפ בהקדם עם הסקיצה לעסק שלך.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-lg space-y-10">
              <div>
                <label
                  htmlFor="plan"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-stone-500"
                >
                  בחירת חבילה
                </label>
                <select
                  id="plan"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  required
                  className={`${inputClassName} cursor-pointer`}
                >
                  <option value="" disabled className="bg-stone-900 text-stone-400">
                    בחרו חבילה
                  </option>
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id} className="bg-stone-900 text-stone-50">
                      {plan.name} — {plan.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-stone-500"
                >
                  שם / שם העסק
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-stone-500"
                >
                  מספר וואטסאפ
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className={`${inputClassName} text-right`}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-premium group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  אני רוצה סקיצה בחינם לעסק שלי
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </div>

              <p className="text-center text-xs leading-relaxed text-stone-500">
                ללא ספאם. הפרטים שלך נשמרים בדיסקרטיות מלאה.
              </p>
            </form>
          )}

          <div className="mx-auto mt-20 max-w-lg border-t border-stone-700/60 pt-16">
            <h3 className="text-center font-heading text-xl font-bold tracking-tight text-stone-50">
              צור קשר
            </h3>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline group inline-flex items-center gap-3 pb-1 text-stone-400 transition-all duration-300 hover:text-stone-50"
              >
                <Mail className="size-4 shrink-0 text-stone-500 transition-colors duration-300 group-hover:text-stone-50" strokeWidth={1.5} />
                <span dir="ltr">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline group inline-flex items-center gap-3 pb-1 text-stone-400 transition-all duration-300 hover:text-stone-50"
              >
                <MessageCircle className="size-4 shrink-0 text-stone-500 transition-colors duration-300 group-hover:text-stone-50" strokeWidth={1.5} />
                <span dir="ltr">{CONTACT_WHATSAPP}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
