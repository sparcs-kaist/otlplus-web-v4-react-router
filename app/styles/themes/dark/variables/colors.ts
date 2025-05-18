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
}
