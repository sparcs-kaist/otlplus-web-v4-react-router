import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { media } from "@/styles/themes/media"
import { useDetectOS } from "@/utils/useDetectOS"

const FooterWrapper = styled(FlexWrapper)`
  width: 100%;
`

const StyledLink = styled.a`
  text-decoration: none;
`

const StyledReactLink = styled(Link)`
  text-decoration: none;
`

const StyledImg = styled.img<{ src: string }>`
  height: 45px;
  background: transparent;

  ${media.tablet} {
    display: none;
  }
`

const MobileDisabledWrapper = styled.div`
  ${media.mobile} {
    display: none;
  }
`

function Footer() {
  const { t } = useTranslation()

  function taxiLink() {
    switch (useDetectOS()) {
      case "ios":
        return "https://apps.apple.com/fi/app/taxi-for-kaist/id6447231158"
      case "android":
        return "https://play.google.com/store/apps/details?id=org.sparcs.taxi_app&pcampaignid=web_share "
      default:
        return "https://taxi.sparcs.org"
    }
  }

  return (
    <FooterWrapper direction="column" justify="center" align="stretch" gap={0}>
      <FlexWrapper
        direction="column"
        justify="center"
        align="stretch"
        gap={0}
        padding="0px 0px 100px 0px"
      >
        <FlexWrapper direction="row" justify="center" align="flex-start" gap={100}>
          <StyledImg src="/headerIcon.png" />
          <FlexWrapper
            direction="row"
            justify="flex-start"
            align="flex-start"
            gap={100}
            padding="12.5px 0"
          >
            <FlexWrapper
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap={30}
            >
              <Typography type="BigBold" color="Highlight.default">
                SPARCS
              </Typography>
              <FlexWrapper direction="column" gap={10}>
                <StyledLink href="https://www.sparcs.org/" target="_blank">
                  <Typography type="SmallBold" color="Text.default">
                    About SPARCS
                  </Typography>
                </StyledLink>
                <StyledLink href="https://www.instagram.com/sparcs.kaist" target="_blank">
                  <Typography type="SmallBold" color="Text.default">
                    Instagram
                  </Typography>
                </StyledLink>
              </FlexWrapper>
            </FlexWrapper>
            <MobileDisabledWrapper>
              <FlexWrapper
                direction="column"
                justify="flex-start"
                align="flex-start"
                gap={30}
              >
                <Typography type="BigBold" color="Highlight.default">
                  Services
                </Typography>
                <FlexWrapper direction="column" gap={10}>
                  <StyledLink href="https://newara.sparcs.org/" target="_blank">
                    <Typography type="SmallBold" color="Text.default">
                      ARA
                    </Typography>
                  </StyledLink>
                  <StyledLink href="https://clubs.sparcs.org/" target="_blank">
                    <Typography type="SmallBold" color="Text.default">
                      Clubs
                    </Typography>
                  </StyledLink>
                  <Typography type="SmallBold" color="Text.default">
                    Students
                  </Typography>
                </FlexWrapper>
              </FlexWrapper>
            </MobileDisabledWrapper>
            <MobileDisabledWrapper>
              <FlexWrapper
                direction="column"
                justify="flex-start"
                align="flex-start"
                gap={30}
              >
                <Typography type="BigBold" color="Highlight.default">
                  Apps
                </Typography>
                <FlexWrapper direction="column" gap={10}>
                  <StyledLink href={taxiLink()} target="_blank">
                    <Typography type="SmallBold" color="Text.default">
                      Taxi
                    </Typography>
                  </StyledLink>
                  {useDetectOS() == "ios" && (
                    <StyledLink href="">
                      <Typography type="SmallBold" color="Text.default">
                        Sparcs One
                      </Typography>
                    </StyledLink>
                  )}
                </FlexWrapper>
              </FlexWrapper>
            </MobileDisabledWrapper>
            <FlexWrapper
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap={30}
            >
              <Typography type="BigBold" color="Highlight.default">
                Resources
              </Typography>
              <FlexWrapper direction="column" gap={10}>
                <StyledReactLink to="">
                  <Typography type="SmallBold" color="Text.default">
                    {t("credits.privacyPolicy")}
                  </Typography>
                </StyledReactLink>
                <StyledReactLink to="">
                  <Typography type="SmallBold" color="Text.default">
                    {t("credits.license")}
                  </Typography>
                </StyledReactLink>
                <StyledReactLink to="/makers">
                  <Typography type="SmallBold" color="Text.default">
                    {t("credits.credits")}
                  </Typography>
                </StyledReactLink>
                <StyledReactLink to="">
                  <Typography type="SmallBold" color="Text.default">
                    {t("credits.contact")}
                  </Typography>
                </StyledReactLink>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      <Line height={5} color="Highlight.default" />
    </FooterWrapper>
  )
}

export default Footer
