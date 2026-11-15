import { en } from "./en.js";

const dictionaries = { en };
const currentLocale = "en";

export function t(path) {
  const parts = path.split(".");
  let value = dictionaries[currentLocale];
  for (const part of parts) {
    value = value?.[part];
  }
  return typeof value === "string" ? value : path;
}

export function getLocale() {
  return currentLocale;
}
