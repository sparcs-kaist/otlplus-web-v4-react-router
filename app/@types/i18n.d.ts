import "react-i18next"

import type { I18nBase } from "@/i18n"

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: I18nBase
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: I18nBase
  }
}
