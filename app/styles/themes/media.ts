import { breakpoints } from "@/styles/themes/_base/variables/breakpoints"

type Breakpoint = "mobile" | "tablet" | "laptop"

export const media = Object.keys(breakpoints as Record<Breakpoint, number>).reduce(
  (acc, label) => {
    const breakpoint = label as Breakpoint
    acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`
    return acc
  },
  {} as Record<Breakpoint, string>,
)
