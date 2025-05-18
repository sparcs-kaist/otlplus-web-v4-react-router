import { commonI18nBase } from "@/common/i18n/_base"
import { exampleI18nBase } from "@/features/example/i18n/_base"

export const i18nBase = {
  common: commonI18nBase,
  example: exampleI18nBase,
}

export const i18nBaseNamespaces = Object.keys(i18nBase)

export type I18nBase = typeof i18nBase
