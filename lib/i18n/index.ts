import { enDictionary } from "./en";
import { urDictionary } from "./ur";
import { Dictionary, Locale } from "./types";

export * from "./types";

export const LOCALES: Locale[] = ["eng", "ur"];

export function getDictionary(locale?: string): Dictionary {
  if (locale === "ur") {
    return urDictionary;
  }
  return enDictionary;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  // If path starts with /eng or /ur, replace it
  if (currentPath.startsWith("/eng")) {
    return currentPath.replace(/^\/eng/, `/${targetLocale}`);
  }
  if (currentPath.startsWith("/ur")) {
    return currentPath.replace(/^\/ur/, `/${targetLocale}`);
  }
  // Otherwise prepend
  return `/${targetLocale}${currentPath === "/" ? "" : currentPath}`;
}
