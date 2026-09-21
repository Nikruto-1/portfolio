# Portfolio Frontend (React + TypeScript + Tailwind + Vite)

Фронтенд для сайту-портфоліо, розрахований на роботу в парі з ASP.NET Core Web API бекендом.

## Запуск

```bash
npm install
npm run dev
```

Відкриється на `http://localhost:5173`.

## Структура

- `src/components/` — по одному компоненту на секцію сторінки (Header, Hero, About, Skills, Projects, Experience, Contact, Footer)
- `src/types/` — TypeScript-типи, що відповідають формі даних з майбутнього ASP.NET Core API
- `src/api/api.ts` — функції для запитів до `/api/...`. Якщо бекенд ще не запущений або запит падає, автоматично використовуються дані-заглушки з `src/data/placeholder.ts`, тож фронтенд працює самостійно
- `src/data/placeholder.ts` — заглушкові дані для розробки без бекенду; онови їх під себе (ім'я, проєкти, навички)

## Інтеграція з ASP.NET Core

`vite.config.ts` уже налаштований:

1. **Dev-проксі** — запити на `/api/*` під час розробки перенаправляються на `https://localhost:5001` (заміни на порт свого backend-проєкту в `Properties/launchSettings.json`).
2. **Build output** — `npm run build` кладе готові файли напряму в `../backend/wwwroot`, якщо тримаєш backend і frontend в одному репозиторії поряд (`backend/` та `frontend/`). Якщо деплоїш окремо — прибери `build.outDir`/`emptyOutDir` з конфігу.

Очікувані ендпоінти бекенду (щоб `api.ts` запрацював без змін):

- `GET /api/profile` → `Profile`
- `GET /api/skills` → `SkillGroup[]`
- `GET /api/projects` → `Project[]`
- `GET /api/experience` → `ExperienceItem[]`
- `POST /api/contact` → приймає `ContactPayload`, повертає `ContactResponse`

Форми відповідей описані в `src/types/index.ts`.

## Стиль

Кольори, шрифти та відступи винесені в `tailwind.config.js` (`colors`, `fontFamily`). Шрифти (`Fraunces`, `IBM Plex Sans`, `IBM Plex Mono`) підключені через Google Fonts в `index.html`.
