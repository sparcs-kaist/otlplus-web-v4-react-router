import { commonI18nBase } from "@/common/i18n/_base"

export const i18nBase = {
  common: commonI18nBase,
}

export const i18nBaseNamespaces = Object.keys(i18nBase)

export type I18nBase = typeof i18nBase
