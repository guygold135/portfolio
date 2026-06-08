export type Locale = "he" | "en"

export type HeroStat = {
  value: string
  label?: string
}

export type Project = {
  title: string
  description: string
  url: string
  image: string
}

export type PlanTranslation = {
  id: string
  name: string
  tagline?: string
  price: string
  note?: string
  features: string[]
  featured?: boolean
}

export type ValuePoint = {
  key: string
  title: string
  description: string
}

const sharedProjects: Omit<Project, "description">[] = [
  {
    title: "BE PILATES studio",
    url: "https://pilates1.vercel.app/",
    image: "/images/portfolio/pilates.png",
  },
  {
    title: "Luxury Japan Tour",
    url: "https://japanjourney-woad.vercel.app/",
    image: "/images/portfolio/japan.png",
  },
  {
    title: "Burger Demo Shop",
    url: "https://burger-demo-black.vercel.app/#proof",
    image: "/images/portfolio/burger.png",
  },
]

export const translations = {
  he: {
    meta: {
      title: "פיתוח אתרים ודפי נחיתה לעסקים | Web Development & Strategy",
      description:
        "פיתוח אתרים ודפי נחיתה מהירים ומותאמים אישית ב-Next.js, ממוקדי המרה במובייל, שמביאים לקוחות אמיתיים לעסקים קטנים ובינוניים.",
    },
    header: {
      brand: "סטודיו",
      nav: {
        portfolio: "עבודות",
        about: "למה?",
        pricing: "מחירים",
        contact: "צור קשר",
      },
      cta: "בואו נדבר",
      menuOpen: "פתיחת תפריט",
      menuClose: "סגירת תפריט",
      switchToEnglish: "EN",
      switchToHebrew: "עב",
    },
    hero: {
      title: "פיתוח אתרים ודפי נחיתה שמביאים לקוחות לעסקים",
      subtitle:
        "אנחנו בונים אתרים בהזמנה אישית במהירות שיא על גבי Next.js, מעוצבים בקפידה וממוקדים בהמרה במובייל — כדי שכל מבקר יהפוך ללקוח.",
      ctaPrimary: "בואו נבנה סקיצה לעסק שלך",
      ctaSecondary: "צפו בעבודות שלנו",
      stats: [
        { value: "100%", label: "מותאם מובייל" },
        { value: "Value for Money", label: "אתר ברמה הכי גבוהה שיש במחיר הגיוני" },
        { value: "30 ימי ליווי", label: "אחריות מלאה לבאגים ושינויי תוכן" },
        { value: "עד 10 ימי עבודה", label: "בדרך כלל גם פחות" },
        {
          value: "קבלת סקיצה בחינם",
          label: "קבלו כיוון של איך יראה האתר שנייצר לכם בחינם\u200F!",
        },
      ] satisfies HeroStat[],
    },
    portfolio: {
      title: "פרויקטים נבחרים מהסטודיו",
      subtitle:
        "תערובת של דפי נחיתה ואתרים שבנינו — כל אחד מעוצב להמרה, למהירות ולחוויית מובייל מושלמת.",
      viewLive: "צפייה באתר החי",
      previewAlt: (title: string) => `תצוגה מקדימה של ${title}`,
      goToProject: (title: string) => `מעבר לפרויקט ${title}`,
      projects: [
        {
          ...sharedProjects[0],
          description:
            "דף נחיתה בוטיק ויוקרתי לסטודיו פילאטיס, עם גלילה חלקה, ביקורות מתוך Google Maps והמרה דרך טופס.",
        },
        {
          ...sharedProjects[1],
          description:
            "טיול צילום אקסקלוסיבי ויוקרתי ביפן, עם טיפוגרפיה פרימיום, גריד נקי ותחושת מותג בינלאומית.",
        },
        {
          ...sharedProjects[2],
          description:
            "דף מסעדת המבורגרים מקומית מהיר וממוקד המרה, עם תפריטים דינמיים והוכחה חברתית מהלקוחות.",
        },
      ] satisfies Project[],
    },
    about: {
      title: "למה להשקיע באתר?",
      intro:
        "דף אינסטגרם או פייסבוק כבר לא מספיקים היום. הלקוחות שלכם מחפשים אתכם בגוגל, והאתר הוא כרטיס הביקור הרשמי שלכם. אתר נכון הוא מכונת מכירות שעובדת בשבילכם 24/7 ומבדלת אתכם מהמתחרים.",
      socialTitle: "נוכחות ברשתות חברתיות",
      socialDrawbacks: [
        "שליטה מוגבלת בתוכן ובעיצוב",
        "אלגוריתמים משתנים – חשיפה לא יציבה",
        "ללא SEO – לא נמצאים בגוגל",
        "תלות בפלטפורמה חיצונית",
      ],
      versus: "לעומת",
      websiteTitle: "אתר מודרני",
      websiteBenefits: [
        "שליטה מלאה – העיצוב והתוכן שלכם",
        "מהירות בזק עם Next.js",
        "מותאם ל-SEO ולגוגל",
        "זהות מותג עצמאית ומקצועית",
      ],
      valuePoints: [
        {
          key: "trust",
          title: "בניית אמון מיידי",
          description:
            "לקוחות קונים מעסקים שנראים מקצועיים. אתר פרימיום מבדל אתכם מהמתחרים.",
        },
        {
          key: "conversion",
          title: "להפוך גולשים ללקוחות",
          description:
            "מבנה ממוקד המרה – טפסים נגישים, כפתורי וואטסאפ וניווט חלק.",
        },
        {
          key: "always-on",
          title: "העסק שלכם עובד 24/7",
          description:
            "גם כשהעסק סגור, האתר ממשיך לקבל פניות, להציג ביקורות ולמכור.",
        },
      ] satisfies ValuePoint[],
    },
    pricing: {
      title: "חבילות ומחירים",
      subtitle:
        "שלוש חבילות גמישות שמתאימות לכל שלב בעסק — מהשקה ראשונית ועד אתר מתקדם עם חנות. כל המחירים כוללים עיצוב מותאם אישית.",
      bestSeller: "הכי נמכר",
      startingFrom: "החל מ־",
      selectPlan: "בחירת חבילה",
      plans: [
        {
          id: "landing",
          name: "אתר נחיתה",
          tagline: "הבסיס החזק – מושלם להשקה מהירה",
          price: "₪1,490",
          features: [
            "עיצוב פרימיום מותאם אישית",
            '0 ש"ח עלויות אחסון חודשיות',
            "חיבור טופס לידים ישירות למייל",
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
          note: "כל מה שיש בדף הנחיתה, ובנוסף:",
          features: [
            "עד 5 עמודים מעוצבים",
            "מעבר מהיר וחלק בין דפים בטכנולוגיית Next.js",
            "אופטימיזציה מלאה ל-SEO (הכנה לקידום אורגני בגוגל)",
            "חיבור מערכת ניתוח התנהגות גולשים שמראה לכם דפוסי התנהגות של גולשים באתר",
            "אספקה: עד 8 ימי עבודה",
          ],
        },
        {
          id: "advanced",
          name: "חנות / מתקדם",
          tagline: "לעסקים שרוצים הכל",
          price: "₪6,900",
          note: "כל מה שיש באתר התדמית, ובנוסף:",
          features: [
            "חיבור למערכת ניהול מידע",
            "אוטומציות מתקדמות",
            "אנימציות וחווית משתמש מורכבת בהתאמה אישית מלאה",
            "60 ימי תמיכה וליווי צמוד (במקום 30)",
            "אספקה: עד 10 ימי עבודה",
          ],
        },
      ] satisfies PlanTranslation[],
    },
    contact: {
      title: "רוצה שנבנה סקיצה בחינם לעסק שלך?",
      subtitle: "השאירו פרטים",
      or: "או",
      planLabel: "בחירת חבילה",
      planPlaceholder: "בחרו חבילה",
      nameLabel: "שם / שם העסק",
      phoneLabel: "מספר וואטסאפ",
      submit: "אני רוצה סקיצה בחינם לעסק שלי",
      privacy: "ללא ספאם. הפרטים שלך נשמרים בדיסקרטיות מלאה.",
      thanks: (name: string) => `תודה, ${name}!`,
      selectedPlan: (name: string, price: string) => `חבילה שנבחרה: ${name} (${price})`,
      confirmation:
        "קיבלנו את הפרטים ונחזור אליך בוואטסאפ בהקדם עם הסקיצה לעסק שלך.",
    },
    footer: {
      text: (year: number) =>
        `© ${year} סטודיו · פיתוח אתרים ודפי נחיתה לעסקים`,
    },
  },
  en: {
    meta: {
      title: "Websites & Landing Pages for Businesses | Web Development & Strategy",
      description:
        "Fast, custom-built websites and landing pages on Next.js — mobile-first, conversion-focused, and built to bring real clients to small and mid-sized businesses.",
    },
    header: {
      brand: "Studio",
      nav: {
        portfolio: "Work",
        about: "Why?",
        pricing: "Pricing",
        contact: "Contact",
      },
      cta: "Let's Talk",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      switchToEnglish: "EN",
      switchToHebrew: "עב",
    },
    hero: {
      title: "Websites and landing pages that bring clients to your business",
      subtitle:
        "We build bespoke websites at record speed on Next.js — carefully designed and mobile-conversion focused, so every visitor becomes a customer.",
      ctaPrimary: "Let's build a mockup for your business",
      ctaSecondary: "View our work",
      stats: [
        { value: "100%", label: "Mobile-optimized" },
        { value: "Value for Money", label: "Premium-quality sites at a fair price" },
        { value: "30 days support", label: "Full warranty for bugs and content updates" },
        { value: "Up to 10 business days", label: "Usually even faster" },
        {
          value: "Free mockup included",
          label: "Get a clear preview of your future site — on us!",
        },
      ] satisfies HeroStat[],
    },
    portfolio: {
      title: "Selected studio projects",
      subtitle:
        "A mix of landing pages and websites we've built — each designed for conversion, speed, and a flawless mobile experience.",
      viewLive: "View live site",
      previewAlt: (title: string) => `Preview of ${title}`,
      goToProject: (title: string) => `Go to project ${title}`,
      projects: [
        {
          ...sharedProjects[0],
          description:
            "A boutique, premium landing page for a Pilates studio — smooth scrolling, Google Maps reviews, and form-driven conversion.",
        },
        {
          ...sharedProjects[1],
          description:
            "An exclusive luxury photography tour in Japan — premium typography, clean grid, and an international brand feel.",
        },
        {
          ...sharedProjects[2],
          description:
            "A fast, conversion-focused local burger restaurant page with dynamic menus and social proof from customers.",
        },
      ] satisfies Project[],
    },
    about: {
      title: "Why invest in a website?",
      intro:
        "An Instagram or Facebook page alone isn't enough anymore. Your customers search for you on Google, and your website is your official business card. The right site is a sales machine that works for you 24/7 and sets you apart from competitors.",
      socialTitle: "Social media presence",
      socialDrawbacks: [
        "Limited control over content and design",
        "Changing algorithms — unstable reach",
        "No SEO — invisible on Google",
        "Dependence on a third-party platform",
      ],
      versus: "vs.",
      websiteTitle: "Modern website",
      websiteBenefits: [
        "Full control — your design and content",
        "Lightning-fast with Next.js",
        "SEO-optimized for Google",
        "Independent, professional brand identity",
      ],
      valuePoints: [
        {
          key: "trust",
          title: "Instant credibility",
          description:
            "Customers buy from businesses that look professional. A premium website sets you apart from competitors.",
        },
        {
          key: "conversion",
          title: "Turn visitors into customers",
          description:
            "Conversion-focused structure — accessible forms, WhatsApp buttons, and smooth navigation.",
        },
        {
          key: "always-on",
          title: "Your business works 24/7",
          description:
            "Even when you're closed, your site keeps collecting inquiries, showcasing reviews, and selling.",
        },
      ] satisfies ValuePoint[],
    },
    pricing: {
      title: "Packages & pricing",
      subtitle:
        "Three flexible packages for every stage of your business — from a first launch to an advanced site with a store. All prices include custom design.",
      bestSeller: "Best seller",
      startingFrom: "Starting at",
      selectPlan: "Select package",
      plans: [
        {
          id: "landing",
          name: "Landing site",
          tagline: "The strong foundation — perfect for a fast launch",
          price: "₪1,490",
          features: [
            "Custom premium design",
            "₪0 monthly hosting fees",
            "Lead form connected directly to your email",
            "30 days of support and full warranty included",
            "Fast delivery: up to 5 business days",
          ],
        },
        {
          id: "showcase",
          name: "Business website",
          tagline: "The popular choice",
          price: "₪3,490",
          featured: true,
          note: "Everything in the landing site, plus:",
          features: [
            "Up to 5 designed pages",
            "Fast, smooth page transitions with Next.js",
            "Full SEO optimization (ready for organic Google ranking)",
            "Visitor analytics showing how users behave on your site",
            "Delivery: up to 8 business days",
          ],
        },
        {
          id: "advanced",
          name: "Store / advanced",
          tagline: "For businesses that want it all",
          price: "₪6,900",
          note: "Everything in the business website, plus:",
          features: [
            "CMS integration",
            "Advanced automations",
            "Custom animations and rich user experience",
            "60 days of close support (instead of 30)",
            "Delivery: up to 10 business days",
          ],
        },
      ] satisfies PlanTranslation[],
    },
    contact: {
      title: "Want us to build a free mockup for your business?",
      subtitle: "Leave your details",
      or: "or",
      planLabel: "Select package",
      planPlaceholder: "Choose a package",
      nameLabel: "Name / business name",
      phoneLabel: "WhatsApp number",
      submit: "I want a free mockup for my business",
      privacy: "No spam. Your details are kept completely private.",
      thanks: (name: string) => `Thank you, ${name}!`,
      selectedPlan: (name: string, price: string) => `Selected package: ${name} (${price})`,
      confirmation:
        "We've received your details and will get back to you on WhatsApp soon with a mockup for your business.",
    },
    footer: {
      text: (year: number) =>
        `© ${year} Studio · Websites & landing pages for businesses`,
    },
  },
} as const

export function getPlans(locale: Locale): PlanTranslation[] {
  return translations[locale].pricing.plans
}

export function getPlanById(id: string, locale: Locale) {
  return getPlans(locale).find((plan) => plan.id === id)
}
