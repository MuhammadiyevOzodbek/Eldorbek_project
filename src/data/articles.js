export const ARTICLE_CATEGORIES = [
  "All",
  "Education",
  "Language",
  "Motivation",
  "Tech",
]

export const articles = [
  {
    id: 1,
    title: "Til o'rganish sirlari",
    excerpt:
      "Til o'rganishda eng samarali usullar, kundalik odatlar va amaliy maslahatlar haqida chuqur tahlil.",
    date: "2026-01-15",
    category: "Education",
    readTime: "5 min",
    slug: "til-organish-sirlari",
    popular: true,
    metaDescription:
      "Til o'rganishning eng samarali usullari — Eldorbek Yulchiyev tomonidan yozilgan maqola.",
    content: [
      {
        type: "paragraph",
        text: "Til o'rganish — bu faqat grammatika yodlash emas, balki yangi dunyoqarashni qabul qilish jarayonidir. O'n yillik tajribam shuni ko'rsatdiki, muvaffaqiyat sababi — doimiy amaliyot va to'g'ri strategiya.",
      },
      {
        type: "heading",
        text: "Kundalik odatlar",
      },
      {
        type: "paragraph",
        text: "Har kuni kamida 30 daqiqa til bilan shug'ullanish katta farq qiladi. Podcast tinglash, qisqa videolar ko'rish va kundalik yozish — eng samarali uchlik.",
      },
      {
        type: "list",
        items: [
          "Ertalab 10 ta yangi so'z o'rganish",
          "Kechqurun o'qilgan matnni qisqacha yozib chiqish",
          "Haftada bir marta suhbat mashqi (tandem partner bilan)",
        ],
      },
      {
        type: "heading",
        text: "Xulosa",
      },
      {
        type: "paragraph",
        text: "Til — ko'prik. U orqali siz nafaqat muloqot qilasiz, balki yangi imkoniyatlar eshigini ochasiz. Sabr va izchillik — muvaffaqiyat kaliti.",
      },
    ],
  },
  {
    id: 2,
    title: "Tarjimonlik san'ati",
    excerpt:
      "So'zma-so'z tarjima va ma'noni yetkazish o'rtasidagi farq. Professional tarjimon uchun asosiy tamoyillar.",
    date: "2025-11-20",
    category: "Language",
    readTime: "7 min",
    slug: "tarjimonlik-sanati",
    popular: true,
    metaDescription:
      "Tarjimonlik san'ati va professional yondashuv — Eldorbek Yulchiyev maqolasi.",
    content: [
      {
        type: "paragraph",
        text: "Yaxshi tarjima — ko'rinmas ko'prikdir. O'quvchi asl matnni o'qiyotgandek his qilishi kerak, lekin til tabiati saqlanishi shart.",
      },
      {
        type: "heading",
        text: "Kontekst — hamma narsa",
      },
      {
        type: "paragraph",
        text: "Har bir so'z o'z kontekstida yashaydi. Diniy, ilmiy yoki adabiy matnlar uchun alohida yondashuv talab etiladi. Tarjimon avvalo tadqiqotchi bo'lishi kerak.",
      },
      {
        type: "quote",
        text: "Tarjima — ikki madaniyat o'rtasidagi suhbatdir.",
      },
      {
        type: "paragraph",
        text: "Uchinchi til orqali tarjima qilishdan qoching. Manba va maqsad tillarida bevosita ishlash sifatni sezilarli oshiradi.",
      },
    ],
  },
  {
    id: 3,
    title: "Yoshlarga ilhom",
    excerpt:
      "Ta'lim orqali jamiyatni o'zgartirish mumkinligi haqida shaxsiy fikrlar va hayotiy tajribalar.",
    date: "2025-09-10",
    category: "Motivation",
    readTime: "4 min",
    slug: "yoshlarga-ilhom",
    popular: false,
    metaDescription:
      "Yoshlarga ilhom berish va ta'lim orqali ta'sir ko'rsatish — motivatsion maqola.",
    content: [
      {
        type: "paragraph",
        text: "Chinozdan Chicagoga qadar bo'lgan yo'lim menga bir narsani o'rgatdi: cheklovlar — faqat boshlanish nuqtasi.",
      },
      {
        type: "paragraph",
        text: "Har bir yosh inson ichida kuch bor. O'qituvchi vazifasi — o'sha kuchni aniqlash va yo'naltirish.",
      },
      {
        type: "list",
        items: [
          "Kichik g'alabalarni nishonlash",
          "Xatolarni o'rganish imkoniyati sifatida qabul qilish",
          "Orzu qilishdan qo'rqmaslik",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Zamonaviy ta'lim texnologiyalari",
    excerpt:
      "Raqamli vositalar, onlayn platformalar va sun'iy intellekt ta'lim jarayoniga qanday ta'sir qilmoqda.",
    date: "2025-07-05",
    category: "Tech",
    readTime: "6 min",
    slug: "zamonaviy-talim-texnologiyalari",
    popular: true,
    metaDescription:
      "Zamonaviy ta'lim texnologiyalari va raqamli transformatsiya haqida maqola.",
    content: [
      {
        type: "paragraph",
        text: "Texnologiya ta'limni demokratlashtirmoqda. Bugun har bir o'quvchi dunyoning istalgan nuqtasidagi bilimga ega bo'lishi mumkin.",
      },
      {
        type: "heading",
        text: "AI va ta'lim",
      },
      {
        type: "paragraph",
        text: "Sun'iy intellekt o'qituvchini almashtirmaydi — u qurol sifatida xizmat qiladi. Shaxsiylashtirilgan o'quv rejalar va tezkor fikr-mulohaza — kelajak standarti.",
      },
      {
        type: "paragraph",
        text: "Ammo texnologiya insonga xizmat qilishi kerak, aksincha emas. Raqamli savodxonlik har bir pedagog uchun majburiy bo'lib bormoqda.",
      },
    ],
  },
  {
    id: 5,
    title: "Ko'p tillilik va madaniyat",
    excerpt:
      "Bir nechta til bilish madaniyarohaniyatni kengaytiradi. Ko'p tillilikning ijtimoiy ahamiyati.",
    date: "2025-05-18",
    category: "Language",
    readTime: "5 min",
    slug: "kop-tillilik-va-madaniyat",
    popular: false,
    metaDescription:
      "Ko'p tillilik va madaniyatlar o'rtasidagi bog'liqlik haqida maqola.",
    content: [
      {
        type: "paragraph",
        text: "Har bir til — butun bir madaniyat kodidir. Ingliz, arab, rus va turk tillarini o'rganish mening dunyoqarashimni tubdan o'zgartirdi.",
      },
      {
        type: "heading",
        text: "Madaniyarohaniyat",
      },
      {
        type: "paragraph",
        text: "Til orqali biz boshqalarining tarixini, qadriyatlarini va fikrlash usulini tushunamiz. Bu — zo'ravonlikka qarshi eng kuchli qurol.",
      },
      {
        type: "quote",
        text: "Til bilish — boshqa odamning qalbidagi eshikni ochishdir.",
      },
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug) ?? null
}

export function getLatestArticles(count = 3) {
  return [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}

export function getPopularArticles(count = 3) {
  return articles.filter((a) => a.popular).slice(0, count)
}

export function formatArticleDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("uz-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
