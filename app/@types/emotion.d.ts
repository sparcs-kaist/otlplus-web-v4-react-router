import "@emotion/react"

import type { ThemeType } from "@/styles/themes"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends ThemeType {}
}
