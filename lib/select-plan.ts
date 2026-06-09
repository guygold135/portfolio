export const PLAN_SELECTED_EVENT = "plan-selected"

import { scrollToContact } from "@/lib/scroll-to-contact"

export function selectPlanAndScrollToContact(planId: string) {
  const url = new URL(window.location.href)
  url.searchParams.set("plan", planId)
  url.hash = "contact"
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`)
  requestAnimationFrame(() => {
    window.dispatchEvent(new CustomEvent(PLAN_SELECTED_EVENT, { detail: planId }))
    scrollToContact()
  })
}
