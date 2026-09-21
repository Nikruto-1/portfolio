import type { ExperienceItem, LanguageCode, Profile, Project, SkillGroup } from "@/types";

interface LocalizedPortfolio {
  profile: Profile;
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
}

const commonProfile = {
  name: "Mykola Kosmachevskyi",
  email: "kkosmacevskij@gmail.com",
  phone: "+380 63 737 6245",
  telegram: "https://t.me/mykola_kosmachevskyi",
  github: "https://github.com/Nikruto-1",
  linkedin: "https://www.linkedin.com/in/nickolas-kosmachevsky-665a1840a/",
  resumeUrl: "/resume/Mykola_Kosmachevskyi_CV.pdf",
};

const backendStack = [
  ".NET 6-10",
  ".NET 10 LTS",
  ".NET 9",
  ".NET 8 LTS",
  ".NET 7",
  ".NET 6 LTS",
  "C#",
  "ASP.NET Core",
  "ASP.NET MVC",
  "Web API",
  "RESTful API",
  "Entity Framework Core",
  "EF Core 6-10",
  "LINQ",
  "JWT auth",
  "Dependency Injection",
  "Clean Architecture basics",
];

const databaseStack = [
  "PostgreSQL",
  "Microsoft SQL Server",
  "SQL",
  "Query optimization",
  "Migrations",
  "Indexes",
  "Relational database design",
];

const frontendStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vite",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive layout",
  "API integration",
];

const toolsStack = [
  "Git",
  "GitHub",
  "Visual Studio",
  "VS Code",
  "Postman",
  "Swagger / OpenAPI",
  "Docker basics",
  "npm",
  "Vite",
  "Chrome DevTools",
];

const complianceStack = [
  "GDPR basics",
  "Personal data handling",
  "Privacy-aware API design",
  "Role-based access control",
  "Data validation",
  "Secure configuration basics",
];

export const localizedContent: Record<LanguageCode, LocalizedPortfolio> = {
  uk: {
    profile: {
      ...commonProfile,
      role: ".NET Developer",
      location: "Sweden",
      tagline: "Створюю швидкі бекенди на .NET та зручні інтерфейси на React.",
      bio: ".NET Developer з 3+ роками досвіду розробки комерційних вебзастосунків, backend API та інтеграцій. Працюю з ASP.NET Core, PostgreSQL, JWT authentication, email flows, Cloudinary та GDPR-aware обробкою персональних даних. Люблю нові технології, швидко адаптуюсь і фокусуюсь на чистому, підтримуваному коді та рішеннях, які реально закривають бізнес-потреби.",
    },
    skillGroups: [
      { category: "Backend", items: backendStack },
      { category: "Databases", items: databaseStack },
      { category: "Frontend", items: frontendStack },
      { category: "Tools", items: toolsStack },
      { category: "Security & compliance", items: complianceStack },
      { category: "Languages", items: ["Ukrainian — native", "English — CEFR C1", "Swedish — beginner"] },
      { category: "Soft skills", items: ["Problem-solving", "Комунікація", "Адаптивність", "Командна робота", "Тайм-менеджмент", "Увага до деталей"] },
    ],
    projects: [
      {
        id: "autoalexde-api",
        title: "AutoAlexDE",
        description:
          "Комерційний backend API для автомобільного бізнесу з каталогом авто, заявками клієнтів, адмінським керуванням контентом та авторизацією. Реалізовував REST endpoints, JWT + refresh token authentication через HTTP-only cookies, Google auth, email confirmation, password reset, role-based access для адмін-функцій, Cloudinary upload/delete для фото авто, PostgreSQL + EF Core migrations, мультимовні описи авто та GDPR-aware сценарії на кшталт видалення акаунта й маскування VIN для анонімних користувачів.",
        tech: ["ASP.NET Core", "C#", "PostgreSQL", "EF Core", "JWT", "Google Auth", "Cloudinary", "MailKit", "GDPR"],
      },
      {
        id: "task-management-app",
        title: "Task Management Web App",
        description:
          "Full-stack застосунок для керування задачами: ASP.NET Core на бекенді, React/TypeScript на фронтенді, PostgreSQL для зберігання даних. Користувачі можуть створювати, оновлювати та видаляти задачі.",
        tech: ["ASP.NET Core", "PostgreSQL", "React", "TypeScript", "Git"],
      },
    ],
    experience: [
      {
        id: "autoalexde-api-commercial",
        title: ".NET Backend Developer — Commercial Project",
        organization: "AutoAlexDE",
        period: "2026 — Теперішній час",
        description:
          "Розробляв і підтримував production-ready backend для автомобільного бізнесу на ASP.NET Core. Побудував API для каталогу авто, клієнтських заявок, користувачів та адмінських операцій; налаштовував PostgreSQL через Entity Framework Core, міграції та доменні моделі для Cars, CarRequests, Users, EmailConfirmationTokens і PasswordResetTokens. Реалізував JWT authentication з refresh tokens у HTTP-only cookies, Google login, email confirmation, password reset, role-based authorization, CORS для production-доменів, Cloudinary інтеграцію для завантаження й видалення фото, мультимовні описи авто та GDPR-aware функції: видалення акаунта, обробку персональних даних і маскування VIN у публічних відповідях API.",
      },
      {
        id: "nordic-code-solutions",
        title: ".NET Developer",
        organization: "Nordic Code Solutions",
        period: "Червень 2023 — Липень 2026",
        description:
          "Працював над комерційними вебзастосунками для малого та середнього бізнесу, розробляючи backend-рішення на .NET 6-10 / ASP.NET Core та інтеграції з базами даних. Проєктував REST API, DTO-моделі та сервісний шар, оптимізував SQL-запити, працював з Entity Framework Core, SQL Server і PostgreSQL, впроваджував авторизацію, валідацію даних, Swagger-документацію та UI-інтеграції з React/TypeScript. Брав участь у код-рев'ю, рефакторингу легасі-модулів, міграції на сучаснішу .NET-архітектуру та впровадженні GDPR-aware підходів до обробки персональних даних.",
      },
      {
        id: "cyber-operations",
        title: "Cyber Police Experience",
        organization: "Кіберполіція України",
        period: "2022",
        description:
          "Працював у напрямі протидії кіберзлочинності на початку війни проти агресора росії. Брав участь в аналізі цифрових даних, OSINT-матеріалів, логів та технічних індикаторів, допомагав із виявленням злочинної активності, підтримкою авторизованих задач з перехоплення та аналізу даних, а також документуванням цифрових слідів для протидії злочинцям.",
      },
      {
        id: "education",
        title: "B.S. Computer Science",
        organization: "Odesa National Polytechnic University, Odesa, Ukraine",
        period: "2022 — 2026",
        description:
          "Завершив навчання за напрямом Computer Science. Основний фокус: Software Engineering, Calculus & Geometry, Algorithms & Data Structures, Architectural Patterns, Databases, Web Development та DevOps.",
      },
    ],
  },
  en: {
    profile: {
      ...commonProfile,
      role: ".NET Developer",
      location: "Sweden",
      tagline: "I build fast .NET backends and clean React interfaces.",
      bio: ".NET Developer with 3+ years of experience building commercial web applications, backend APIs, and integrations. I work with ASP.NET Core, PostgreSQL, JWT authentication, email flows, Cloudinary, and GDPR-aware personal data handling. I learn new technologies quickly and focus on clean, maintainable code that solves real business needs.",
    },
    skillGroups: [
      { category: "Backend", items: backendStack },
      { category: "Databases", items: databaseStack },
      { category: "Frontend", items: frontendStack },
      { category: "Tools", items: toolsStack },
      { category: "Security & compliance", items: complianceStack },
      { category: "Languages", items: ["Ukrainian — native", "English — CEFR C1", "Swedish — beginner"] },
      { category: "Soft skills", items: ["Problem-solving", "Communication", "Adaptability", "Teamwork", "Time management", "Attention to detail"] },
    ],
    projects: [
      {
        id: "autoalexde-api",
        title: "AutoAlexDE",
        description:
          "A commercial backend API for an automotive business with a car catalog, customer requests, admin content management, and authentication. Worked on REST endpoints, JWT + refresh token authentication via HTTP-only cookies, Google auth, email confirmation, password reset, role-based access for admin operations, Cloudinary upload/delete for car images, PostgreSQL + EF Core migrations, multilingual car descriptions, and GDPR-aware flows such as account deletion and VIN masking for anonymous users.",
        tech: ["ASP.NET Core", "C#", "PostgreSQL", "EF Core", "JWT", "Google Auth", "Cloudinary", "MailKit", "GDPR"],
      },
      {
        id: "task-management-app",
        title: "Task Management Web App",
        description:
          "A full-stack task management app with ASP.NET Core on the backend, React/TypeScript on the frontend, and PostgreSQL for data storage. Users can create, update, and delete tasks.",
        tech: ["ASP.NET Core", "PostgreSQL", "React", "TypeScript", "Git"],
      },
    ],
    experience: [
      {
        id: "autoalexde-api-commercial",
        title: ".NET Backend Developer — Commercial Project",
        organization: "AutoAlexDE",
        period: "2026 — Present",
        description:
          "Developed and maintained a production-ready backend for an automotive business with ASP.NET Core. Built APIs for the car catalog, customer requests, users, and admin operations; configured PostgreSQL with Entity Framework Core, migrations, and domain models for Cars, CarRequests, Users, EmailConfirmationTokens, and PasswordResetTokens. Implemented JWT authentication with refresh tokens in HTTP-only cookies, Google login, email confirmation, password reset, role-based authorization, production CORS configuration, Cloudinary image upload/delete, multilingual car descriptions, and GDPR-aware features including account deletion, personal data handling, and VIN masking in public API responses.",
      },
      {
        id: "nordic-code-solutions",
        title: ".NET Developer",
        organization: "Nordic Code Solutions",
        period: "June 2023 — July 2026",
        description:
          "Worked on commercial web applications for small and medium-sized businesses, building backend solutions with .NET 6-10 / ASP.NET Core and database integrations. Designed REST APIs, DTO models, and service-layer logic; optimized SQL queries; worked with Entity Framework Core, SQL Server, and PostgreSQL; implemented authentication, data validation, Swagger documentation, and React/TypeScript UI integrations. Participated in code reviews, refactored legacy modules, helped migrate systems toward a more modern .NET architecture, and applied GDPR-aware approaches to personal data handling.",
      },
      {
        id: "cyber-operations",
        title: "Cyber Police Experience",
        organization: "Cyber Police of Ukraine",
        period: "2022",
        description:
          "Worked in cybercrime counteraction at the beginning of the war against the Russian aggressor. Took part in analyzing digital data, OSINT materials, logs, and technical indicators; helped identify criminal activity, supported authorized data interception and analysis tasks, and documented digital traces to assist investigations and counter cybercriminals.",
      },
      {
        id: "education",
        title: "B.S. Computer Science",
        organization: "Odesa National Polytechnic University, Odesa, Ukraine",
        period: "2022 — 2026",
        description:
          "Completed a Computer Science degree with a focus on Software Engineering, Calculus & Geometry, Algorithms & Data Structures, Architectural Patterns, Databases, Web Development, and DevOps.",
      },
    ],
  },
  sv: {
    profile: {
      ...commonProfile,
      role: ".NET-utvecklare",
      location: "Sverige",
      tagline: "Jag bygger snabba .NET-backends och tydliga React-gränssnitt.",
      bio: ".NET-utvecklare med 3+ års erfarenhet av kommersiella webbapplikationer, backend-API:er och integrationer. Jag arbetar med ASP.NET Core, PostgreSQL, JWT-autentisering, e-postflöden, Cloudinary och GDPR-medveten hantering av personuppgifter. Jag lär mig ny teknik snabbt och fokuserar på ren, underhållbar kod som löser verkliga affärsbehov.",
    },
    skillGroups: [
      { category: "Backend", items: backendStack },
      { category: "Databaser", items: databaseStack },
      { category: "Frontend", items: frontendStack },
      { category: "Verktyg", items: toolsStack },
      { category: "Säkerhet & efterlevnad", items: complianceStack },
      { category: "Språk", items: ["Ukrainska — modersmål", "Engelska — CEFR C1", "Svenska — nybörjare"] },
      { category: "Mjuka färdigheter", items: ["Problemlösning", "Kommunikation", "Anpassningsförmåga", "Teamarbete", "Tidshantering", "Noggrannhet"] },
    ],
    projects: [
      {
        id: "autoalexde-api",
        title: "AutoAlexDE",
        description:
          "Ett kommersiellt backend-API för en bilverksamhet med bilkatalog, kundförfrågningar, administrativ innehållshantering och autentisering. Arbetade med REST-endpoints, JWT + refresh tokens via HTTP-only cookies, Google auth, e-postbekräftelse, lösenordsåterställning, rollbaserad åtkomst för adminfunktioner, Cloudinary upload/delete för bilbilder, PostgreSQL + EF Core migrations, flerspråkiga bilbeskrivningar och GDPR-medvetna flöden som kontoborttagning och maskering av VIN för anonyma användare.",
        tech: ["ASP.NET Core", "C#", "PostgreSQL", "EF Core", "JWT", "Google Auth", "Cloudinary", "MailKit", "GDPR"],
      },
      {
        id: "task-management-app",
        title: "Task Management Web App",
        description:
          "En fullstack-applikation för uppgiftshantering med ASP.NET Core i backend, React/TypeScript i frontend och PostgreSQL för datalagring. Användare kan skapa, uppdatera och ta bort uppgifter.",
        tech: ["ASP.NET Core", "PostgreSQL", "React", "TypeScript", "Git"],
      },
    ],
    experience: [
      {
        id: "autoalexde-api-commercial",
        title: ".NET Backend Developer — Kommersiellt projekt",
        organization: "AutoAlexDE",
        period: "2026 — Nu",
        description:
          "Utvecklade och underhöll en production-ready backend för en bilverksamhet med ASP.NET Core. Byggde API:er för bilkatalog, kundförfrågningar, användare och adminfunktioner; konfigurerade PostgreSQL med Entity Framework Core, migrations och domänmodeller för Cars, CarRequests, Users, EmailConfirmationTokens och PasswordResetTokens. Implementerade JWT-autentisering med refresh tokens i HTTP-only cookies, Google login, e-postbekräftelse, lösenordsåterställning, rollbaserad auktorisering, CORS för produktionsdomäner, Cloudinary-integrering för uppladdning/borttagning av bilder, flerspråkiga bilbeskrivningar och GDPR-medvetna funktioner som kontoborttagning, hantering av personuppgifter och maskering av VIN i publika API-svar.",
      },
      {
        id: "nordic-code-solutions",
        title: ".NET-utvecklare",
        organization: "Nordic Code Solutions",
        period: "Juni 2023 — Juli 2026",
        description:
          "Arbetade med kommersiella webbapplikationer för små och medelstora företag och byggde backend-lösningar med .NET 6-10 / ASP.NET Core samt databasintegrationer. Designade REST API:er, DTO-modeller och servicelager; optimerade SQL-frågor; arbetade med Entity Framework Core, SQL Server och PostgreSQL; implementerade autentisering, datavalidering, Swagger-dokumentation och UI-integreringar med React/TypeScript. Deltog i kodgranskningar, refaktorering av legacy-moduler, migrering mot modernare .NET-arkitektur och GDPR-medveten hantering av personuppgifter.",
      },
      {
        id: "cyber-operations",
        title: "Cyber Police Experience",
        organization: "Ukrainas cyberpolis",
        period: "2022",
        description:
          "Arbetade med bekämpning av cyberbrott i början av kriget mot den ryska angriparen. Deltog i analys av digital data, OSINT-material, loggar och tekniska indikatorer; hjälpte till att identifiera brottslig aktivitet, stödde auktoriserade uppgifter kring datainhämtning och analys samt dokumenterade digitala spår för att motverka cyberbrottslingar.",
      },
      {
        id: "education",
        title: "B.S. Computer Science",
        organization: "Odesa National Polytechnic University, Odesa, Ukraine",
        period: "2022 — 2026",
        description:
          "Avslutade en utbildning inom Computer Science med fokus på Software Engineering, Calculus & Geometry, Algorithms & Data Structures, Architectural Patterns, Databases, Web Development och DevOps.",
      },
    ],
  },
};

export const profile = localizedContent.uk.profile;
export const skillGroups = localizedContent.uk.skillGroups;
export const projects = localizedContent.uk.projects;
export const experience = localizedContent.uk.experience;
