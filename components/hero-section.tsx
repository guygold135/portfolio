import { ArrowLeft } from "lucide-react"

type HeroStat = {
  value: string
  label?: string
}

const heroStats: HeroStat[] = [
  { value: "100/100", label: "ציון מהירות PageSpeed" },
  { value: "100%", label: "מותאם מובייל" },
  { value: "Value for Money", label: "אתר ברמה הכי גבוהה שיש במחיר הגיוני" },
  { value: "30 ימי ליווי", label: "אחריות מלאה לבאגים ושינויי תוכן" },
  { value: "עד 10 ימי עבודה", label: "בדרך כלל גם פחות" },
  {
    value: "קבלת סקיצה בחינם",
    label: "קבלו כיוון של איך יראה האתר שנייצר לכם בחינם\u200F!",
  },
]

function StatItem({ stat }: { stat: HeroStat }) {
  const isLongValue = stat.value.length > 12
  const isLongLabel = (stat.label?.length ?? 0) > 28
  const widthClass = isLongLabel ? "w-80" : isLongValue ? "w-72" : "w-56"
  const isHebrewValue = /[\u0590-\u05FF]/.test(stat.value)

  return (
    <div className={`shrink-0 px-6 text-center ${widthClass}`} dir="rtl">
      <p
        dir={isHebrewValue ? "rtl" : "ltr"}
        className={`font-heading font-black tracking-tight text-stone-50 ${
          isLongValue ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
        }`}
      >
        {stat.value}
      </p>
      {stat.label && (
        <p className="mt-2 text-xs leading-relaxed text-stone-500 md:text-sm" dir="rtl">
          {stat.label}
        </p>
      )}
    </div>
  )
}

export function HeroSection() {
  const marqueeStats = [...heroStats, ...heroStats]

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(68,64,60,0.5),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-5xl text-balance font-heading text-5xl font-black leading-[1.08] tracking-tight text-stone-50 md:text-6xl lg:text-7xl">
            פיתוח אתרים ודפי נחיתה שמביאים לקוחות לעסקים
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-loose text-stone-400 md:text-xl">
            אנחנו בונים אתרים בהזמנה אישית במהירות שיא על גבי Next.js, מעוצבים בקפידה וממוקדים בהמרה
            במובייל — כדי שכל מבקר יהפוך ללקוח.
          </p>

          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            <a href="#contact" className="btn-premium group inline-flex items-center gap-2">
              בואו נבנה סקיצה לעסק שלך
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="link-underline pb-1 text-sm font-semibold tracking-wide text-stone-400 transition-all duration-300 hover:text-stone-50"
            >
              צפו בעבודות שלנו
            </a>
          </div>

          <div className="relative mt-20 w-full border-t border-stone-700/60 pt-12">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-stone-900 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-stone-900 to-transparent"
              aria-hidden="true"
            />

            <div className="overflow-hidden" dir="ltr">
              <div className="hero-marquee-track flex w-max items-start">
                {marqueeStats.map((stat, index) => (
                  <StatItem key={`${stat.value}-${index}`} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
