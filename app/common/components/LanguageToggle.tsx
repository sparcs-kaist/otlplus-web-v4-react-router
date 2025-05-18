import React from "react"

import { useTranslation } from "react-i18next"

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value
    i18n.changeLanguage(newLang)
  }

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  )
}

export default LanguageToggle
