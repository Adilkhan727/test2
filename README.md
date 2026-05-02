# UPgrade School Landing Page

Современный лендинг школы английского языка с фокусом на IELTS и партнерством British Council.

## Локальная разработка

1. Склонируйте репозиторий:
   ```bash
   git clone <repo-url> upgrade-school-landing
   cd upgrade-school-landing
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите локальный сервер:
   ```bash
   npm run dev
   ```
4. Откройте страницу:
   ```text
   http://localhost:4173
   ```

## Подготовка к деплою

1. Убедитесь, что репозиторий на GitHub уже создан.
2. Если проект ещё не инициализирован как git-репозиторий, выполните:
   ```bash
   git init
   git add .
   git commit -m "Initial landing page for UPgrade school"
   ```
3. Если репозиторий уже создан, подключите его как remote (один раз):
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   ```
4. Если репозиторий уже подключён, просто закоммитьте и пушьте изменения:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push origin main
   ```

> Если при деплое Vercel пишет, что `package.json` не найден, это значит, что проектные файлы не были запушены в текущую ветку.

## Деплой на Vercel

1. Перейдите на https://vercel.com и авторизуйтесь через GitHub.
2. Нажмите "New Project" и выберите репозиторий.
3. Убедитесь, что настройки билд-команды и папки совпадают:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: оставьте пустым или `.` если требуется
4. Разверните проект.

> В проекте уже настроен `vercel.json` для Vercel v2. Если появится ошибка `version should be <= 2`, это значит, что нужно обновить конфиг на `version: 2`.
> 
> Vercel автоматически соберет статический фронтенд и поддерживает серверную функцию `api/crm-form.ts`.

## Как работает лид-форма

- Локально Vite проксирует запросы на CRM API через `/api/crm-form`.
- В продакшене Vercel использует серверную функцию `api/crm-form.ts`.
- Это позволяет обойти CORS и безопасно работать с `https://crm.tennet.kz`.

## CI / GitHub Actions

В репозитории настроен workflow, который проверяет сборку на каждом пуше. Это гарантирует, что сайт корректно собирается до деплоя.
"# test2" 
