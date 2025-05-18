import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import CoffeePreferenceSelect from "../components/CoffeePreferenceSelect"

const HeroContainer = styled.section`
  background: ${({ theme }) => theme.colors.gradient.peach};
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
  color: black;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    pointer-events: none;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 3.5rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};

  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CTAButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundText};
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`

const HeroBannerSection = () => {
  const { t } = useTranslation("example")

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>{t("hero.title")}</Title>
        <Subtitle>{t("hero.subtitle")}</Subtitle>
        <Description>{t("hero.description")}</Description>
        <CoffeePreferenceSelect />
        <CTAButton>{t("hero.cta")}</CTAButton>
      </ContentWrapper>
    </HeroContainer>
  )
}

export default HeroBannerSection
