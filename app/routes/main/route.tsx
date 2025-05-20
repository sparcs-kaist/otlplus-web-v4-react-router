import React from "react"

import Button from "@/common/components/Button"
import SearchSection from "@/features/main/components/searchSection"

import type { Route } from "./+types/route"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Main" }, { name: "description", content: "Welcome to React Router!" }]
}

export default function Page() {
  return (
    <>
      <Button>안녕</Button>
      <Button type="disabled">안녕</Button>
      <SearchSection />
    </>
  )
}
