import { css } from "@emotion/react"

type Breakpoint = "mobile" | "tablet" | "desktop"

const breakpoints: Record<Breakpoint, string> = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1280px",
}

export const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label as Breakpoint] = (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (max-width: ${breakpoints[label as Breakpoint]}) {
        ${css(literals, ...args)};
      }
    `
    return acc
  },
  {} as Record<
    Breakpoint,
    (l: TemplateStringsArray, ...a: any[]) => ReturnType<typeof css>
  >,
)
