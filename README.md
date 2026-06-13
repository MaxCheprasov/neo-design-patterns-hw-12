# Домашнє завдання — Тема 12. Генератор резюме з JSON-опису

Браузерний застосунок на TypeScript + Vite, який генерує HTML-резюме з файлу `resume.json`.  
Завдання демонструє поєднання п'яти патернів проєктування в одному проєкті.

## Патерни проєктування

| Патерн | Клас | Роль |
|---|---|---|
| **Facade** | `ResumePage` | Єдина точка входу: завантажує JSON і запускає імпортер |
| **Template Method** | `AbstractImporter` / `ResumeImporter` | Визначає скелет алгоритму `validate → map → render` |
| **Factory Method** | `BlockFactory` | Створює відповідний блок за типом (`header`, `summary` тощо) |
| **Composite** | `ExperienceBlock` + `ProjectBlock` | Досвід роботи як контейнер із вкладеними блоками проєктів |
| **Decorator** | `HighlightDecorator` | Додає клас `highlight` (червоний колір) до нещодавніх проєктів |

## Структура проєкту

```
neo-design-patterns-hw-12/
├── index.html
├── resume.json              # Єдине джерело даних резюме
├── vite.config.js
├── package.json
└── src/
    ├── main.ts              # Точка входу — викликає ResumePage.init()
    ├── styles.css
    ├── facade/
    │   └── ResumePage.ts    # Facade
    ├── importer/
    │   ├── AbstractImporter.ts  # Template Method — базовий клас
    │   └── ResumeImporter.ts    # Template Method — конкретна реалізація
    ├── models/
    │   └── ResumeModel.ts   # TypeScript-інтерфейси
    ├── blocks/
    │   ├── BlockFactory.ts  # Factory Method
    │   ├── HeaderBlock.ts
    │   ├── SummaryBlock.ts
    │   ├── ExperienceBlock.ts  # Composite (гілка)
    │   ├── ProjectBlock.ts     # Composite (листок)
    │   ├── EducationBlock.ts
    │   └── SkillsBlock.ts
    └── decorators/
        └── HighlightDecorator.ts  # Decorator
```

## Запуск

```bash
npm install
npm run dev
```

Відкриється браузер на `http://localhost:3000` з повним резюме.

### Збірка для продакшну

```bash
npm run build
npm run preview
```

## Ключові правила

- Усі дані резюме знаходяться виключно в `resume.json`
- Проєкти з `"isRecent": true` виділяються **червоним кольором** (клас `.highlight`)
- Жодних зовнішніх бібліотек — чистий TypeScript + CSS
- Після `npm run build` → відкрити `dist/index.html` — повне резюме без помилок
