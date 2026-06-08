import Image from "next/image"
import { MapPin, Code2, Rocket } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Next.js & Tailwind" },
  { icon: Rocket, label: "ביצועים ומהירות" },
  { icon: MapPin, label: "עובד מכל מקום" },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-stone-700/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-24">
        <div className="relative order-1 mx-auto w-full max-w-sm md:order-none md:max-w-none">
          <div
            className="pointer-events-none absolute -inset-6 rounded-full bg-stone-700/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-800/50">
            <Image
              src="/images/about-portrait.png"
              alt="תמונת פורטרט של מפתח האתרים"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div>
          <h2 className="text-balance font-heading text-3xl font-black tracking-tight text-stone-50 md:text-5xl">
            קצת עליי ועל הדרך שלי
          </h2>
          <div className="mt-8 space-y-6 text-pretty text-lg leading-loose text-stone-400">
            <p>
              אני מפתח אתרים עצמאי שמתמחה בבניית דפי נחיתה ואתרים מהירים, מעוצבים וממוקדי המרה. אני מאמין
              שאתר טוב הוא לא רק יפה — הוא כלי עסקי שמביא לקוחות אמיתיים.
            </p>
            <p>
              לאורך השנים בניתי עשרות אתרים לעסקים קטנים ובינוניים, מסטודיואים בוטיק ועד מסעדות וחנויות.
              כל פרויקט נבנה בקוד נקי על גבי Next.js, עם דגש על חוויית מובייל מושלמת ומהירות טעינה.
            </p>
          </div>

          <ul className="mt-12 space-y-4 border-t border-stone-700/60 pt-10">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 text-sm font-medium text-stone-400 transition-all duration-300 hover:text-stone-50"
              >
                <item.icon className="size-4 shrink-0 text-stone-500" strokeWidth={1.5} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
