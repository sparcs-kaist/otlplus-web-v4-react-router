import type { ThemeType } from "../.."

export const darkThemeColors: ThemeType["colors"] = {
  primary: "#ffffff",
  secondary: "#ffffff",
  tertiary: "#ffffff",
  background: "#000000",
  backgroundText: "#000000",
  gradient: {
    blue: "linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)",
    purple: "linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #7B1FA2 100%)",
    peach: "linear-gradient(135deg, #BF360C 0%, #D84315 50%, #E64A19 100%)",
    mint: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)",
    sunset: "linear-gradient(135deg, #B71C1C 0%, #C62828 50%, #D32F2F 100%)",
  },

  Background: {
    Block: {
      default: "#F5F5F5",
      dark: "#EBEBEB",
      darker: "#E1E1E1",
      highlight: "#FFFFFF",
    },
    Page: {
      default: "#F9F0F0",
    },
    Section: {
      default: "#FFFFFF",
      transparent: "#FFFFFFdd",
    },
    Tab: {
      default: "#FFFFFF",
      dark: "#E0E0E0",
      darker: "#D6D6D6",
    },
    Button: {
      default: "#F5F5F5",
      dark: "#EBEBEB",
      highlight: "#F9F0F0",
      highlightDark: "#FAE6E6",
    },
    Tile: {
      highlight: "#E54C65",
    },
  },
  Highlight: {
    default: "#E54C65",
    dark: "#963246",
  },
  Line: {
    default: "#E8E8E8",
    divider: "#EDD1DC",
    block: "#D6D6D6",
    dark: "#D6D6D6",
  },
  Text: {
    disable: "#AAAAAA",
    placeholder: "#AAAAAA",
    lighter: "#888888",
    light: "#555555",
    default: "#333333",
    dark: "#000000",
  },
  Tile: {
    TimeTable: {
      default: {
        red: {
          1: "#F2CECE",
          2: "#F4B3AE",
        },
        orange: {
          1: "#F2BCA0",
          2: "#F0D3AB",
        },
        yellow: {
          1: "#F1E1A9",
          2: "#F4F2B3",
        },
        green: {
          1: "#DBF4BE",
          2: "#BEEDD7",
          3: "#B7D2DE",
        },
        blue: {
          1: "#C9DAF4",
          2: "#B4D3ED",
        },
        purple: {
          1: "#B9C5ED",
          2: "#D8C1F0",
        },
        pink: {
          1: "#EBCAEF",
          2: "#F4BADB",
        },
      },
      dark: {
        red: {
          1: "#EDA0A0",
          2: "#F5837A",
        },
        orange: {
          1: "#F49A6B",
          2: "#F0BE78",
        },
        yellow: {
          1: "#F1D676",
          2: "#F4F180",
        },
        green: {
          1: "#C3F38C",
          2: "#8FE9BF",
          3: "#8BDBD4",
        },
        blue: {
          1: "#99DDF1",
          2: "#84BCEA",
        },
        purple: {
          1: "#89A0EA",
          2: "#BE92EC",
        },
        pink: {
          1: "#E19DE9",
          2: "#F487C5",
        },
      },
    },
  },
}
