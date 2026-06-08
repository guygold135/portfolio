export type Plan = {
  id: string
  name: string
  tagline?: string
  price: string
  features: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: "landing",
    name: "דף יחיד (One-Page) ממוקד המרה",
    price: "₪1,490",
    features: [
      "עיצוב פרימיום מותאם אישית",
      "0 ש\"ח עלויות אחסון חודשיות (מארחים ב-Vercel)",
      "חיבור טופס לידים ישירות למייל (Formspree)",
      "30 ימי ליווי ואחריות מלאה במתנה",
      "אספקה מהירה: עד 5 ימי עבודה",
    ],
  },
  {
    id: "showcase",
    name: "אתר תדמית",
    tagline: "הבחירה הפופולרית",
    price: "₪3,490",
    featured: true,
    features: [
      "עד 5 עמודים מעוצבים",
      "עיצוב פרימיום עם אנימציות",
      "אופטימיזציה ל-SEO",
      "חיבור לגוגל אנליטיקס",
      "בלוג / גלריית עבודות",
      "אספקה תוך 10 ימי עבודה",
    ],
  },
  {
    id: "advanced",
    name: "חנות / מתקדם",
    tagline: "לעסקים שרוצים הכל",
    price: "₪6,900",
    features: [
      "אתר חנות או מערכת מתקדמת",
      "ניהול תוכן עצמאי (CMS)",
      "סליקה ותשלומים אונליין",
      "אינטגרציות מותאמות אישית",
      "ליווי ותמיכה לחודש",
      "אספקה תוך 21 ימי עבודה",
    ],
  },
]

export function getPlanById(id: string) {
  return plans.find((plan) => plan.id === id)
}
