"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"

type Project = {
  title: string
  description: string
  url: string
  image: string
}

const projects: Project[] = [
  {
    title: "BE PILATES studio",
    description:
      "דף נחיתה בוטיק ויוקרתי לסטודיו פילאטיס, עם גלילה חלקה, ביקורות מתוך Google Maps והמרה דרך טופס.",
    url: "https://pilates1.vercel.app/",
    image: "/images/portfolio/pilates.png",
  },
  {
    title: "Luxury Japan Tour",
    description:
      "טיול צילום אקסקלוסיבי ויוקרתי ביפן, עם טיפוגרפיה פרימיום, גריד נקי ותחושת מותג בינלאומית.",
    url: "https://japanjourney-woad.vercel.app/",
    image: "/images/portfolio/japan.png",
  },
  {
    title: "Burger Demo Shop",
    description:
      "דף מסעדת המבורגרים מקומית מהיר וממוקד המרה, עם תפריטים דינמיים והוכחה חברתית מהלקוחות.",
    url: "https://burger-demo-black.vercel.app/#proof",
    image: "/images/portfolio/burger.png",
  },
]

const INTERVAL_MS = 4000

function ProjectSlide({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <article
      aria-hidden={!isActive}
      className={`w-full transition-all duration-700 ease-in-out ${
        isActive
          ? "relative z-10 opacity-100"
          : "pointer-events-none absolute inset-0 z-0 opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5 lg:gap-12">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isActive ? 0 : -1}
          className="group relative overflow-hidden bg-stone-800 lg:col-span-3"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={`תצוגה מקדימה של ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-top transition-transform duration-700 ${isActive ? "scale-100" : "scale-105"} group-hover:scale-105`}
              priority={isActive}
            />
          </div>
        </a>

        <div className="flex flex-col justify-center lg:col-span-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-stone-50 md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-pretty text-base leading-loose text-stone-400 md:text-lg">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isActive ? 0 : -1}
            className="link-underline mt-8 inline-flex items-center gap-2 pb-1 text-sm font-semibold text-stone-50 transition-all duration-300"
          >
            צפייה באתר החי
            <ArrowLeft className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function PortfolioSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setActive(index)
  }, [])

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [paused])

  return (
    <section id="portfolio" className="border-t border-stone-700/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-black tracking-tight text-stone-50 md:text-5xl">
            פרויקטים נבחרים מהסטודיו
          </h2>
          <p className="mt-6 text-pretty text-lg leading-loose text-stone-400">
            תערובת של דפי נחיתה ואתרים שבנינו — כל אחד מעוצב להמרה, למהירות ולחוויית מובייל מושלמת.
          </p>
        </div>

        <div
          className="relative min-h-[420px] md:min-h-[360px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {projects.map((project, index) => (
            <ProjectSlide key={project.title} project={project} isActive={index === active} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`מעבר לפרויקט ${project.title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-10 bg-stone-100" : "w-1.5 bg-stone-600 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
