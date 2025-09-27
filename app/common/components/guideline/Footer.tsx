import React from "react"

import styled from "@emotion/styled"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const FooterWrapper = styled(FlexWrapper)`
  width: 100%;
`

const HeaderInner = styled.header`
  height: 50px;
  padding-inline: 24px;
  display: flex;
  justify-content: space-between;
  aling-items: center;
`

const ContentLeft = styled(FlexWrapper)``

const StyledImg = styled.img<{ src: string }>`
  height: 45px;
  background: transparent;
`

function Footer() {
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
                <Typography type="SmallBold" color="Text.default">
                  About SPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  People
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  Instagram
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
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
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
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
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  SPARCSSPARCSSPARCS
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
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
                <Typography type="SmallBold" color="Text.default">
                  개인정보취급방침
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  이용약관
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  도움말
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap={30}
            >
              <Typography type="BigBold" color="Highlight.default">
                More
              </Typography>
              <FlexWrapper direction="column" gap={10}>
                <Typography type="SmallBold" color="Text.default">
                  문의하기
                </Typography>
                <Typography type="SmallBold" color="Text.default">
                  광고
                </Typography>
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
