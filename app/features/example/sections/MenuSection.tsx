import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { HotCoffeeCard } from "../components/cards/HotCoffeeCard"
import { IcedCoffeeCard } from "../components/cards/IcedCoffeeCard"

const MenuContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const MenuTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const MenuCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const MenuSection = () => {
  const { t } = useTranslation("example")

  return (
    <MenuContainer>
      <MenuTitle>{t("menu.title")}</MenuTitle>
      <MenuCardContainer>
        <HotCoffeeCard />
        <IcedCoffeeCard />
      </MenuCardContainer>
    </MenuContainer>
  )
}

export default MenuSection
