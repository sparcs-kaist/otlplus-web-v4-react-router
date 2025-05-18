/// <reference types="vite-plugin-svgr/client" />

// not important, as this will be handled by env.ts
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
