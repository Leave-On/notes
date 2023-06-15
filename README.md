## Запуск проекта

```
npm install - устанавливаем зависимости

npm run start - запуск проекта в dev режиме

```

----

## Скрипты

- `npm run build:prod` - сборка в прод режиме
- `npm run build:dev` - сборка в дев режиме
- `npm run prettier` - преттир

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Запросы на сервер отправляются с помощью [RTK query](/src/app/api/notesApi.ts)

----

## Компоненты

- [Note](/src/components/NoteList/ui/Note/Note.tsx)
- [NoteList](/src/components/NoteList/ui/NoteList/NoteList.tsx)
- [NoteEditForm](/src/components/NoteList/ui/NoteEditForm/NoteEditForm.tsx)

- [Attribute](/src/components/ToggleAttributes/ui/Attribute/Attribute.tsx)
- [ToggleAttributes](/src/components/ToggleAttributes/ui/ToggleAttributes/ToggleAttributes.tsx)
