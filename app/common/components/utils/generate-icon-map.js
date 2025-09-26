import fs from "fs"
import path from "path"

const iconsDir = path.resolve("node_modules/@mui/icons-material/esm")
const outFile = path.resolve("./app/common/components/utils/IconMap.tsx")

const files = fs
  .readdirSync(iconsDir)
  .filter((f) => f.endsWith(".js"))
  .filter((f) => /^[A-Z]/.test(f)) // PascalCase 아이콘만
  .map((f) => f.replace(/\.js$/, ""))

const entries = files
  .map((icon) => `"${icon}": lazy(() => import("@mui/icons-material/${icon}"))`)
  .join(",\n")

const content = `import { lazy } from "react";

export const IconMap = {
${entries}
};`

fs.writeFileSync(outFile, content, "utf8")
console.log(`✅ Generated iconMap.ts with ${files.length} icons`)
