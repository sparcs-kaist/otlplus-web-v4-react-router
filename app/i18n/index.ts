import { type I18nBase as _I18nBase, i18nBaseNamespaces } from "./resources/_base"
import { i18nEn } from "./resources/en"
import { i18nKo } from "./resources/ko"

export const namespaces = i18nBaseNamespaces

export const resources = {
  ko: i18nKo,
  en: i18nEn,
}

export type I18nBase = _I18nBase
