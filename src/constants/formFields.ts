import type { FieldType } from "../types/fieldType";

export const formFields: FieldType [] = [
  {
    label: "Введіть своє повне ім’я",
    type: "text",
    placeholder: "Ірина Петрищук",
    name: "fullname",
  },
  {
    label: "Введіть свою дату народження",
    type: "date",
    name: "birthdate",
  },
  {
    label: "Введіть свою електронну пошту",
    type: "email",
    placeholder: "irinapetrishuk@gmail.com",
    name: "email",
  },
  {
    label: "Введіть свій пароль",
    type: "password",
    name: "password",
  }
];
