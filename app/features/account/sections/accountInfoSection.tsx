import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import type NewUser from "@/common/components/interface/NewUser"

const Captions = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 4px;
`

const LinkText = styled(Typography)`
  cursor: pointer;
`

interface AccountInfoSectionProps {
  userInfo: NewUser | null
}

const AccountInfoSection: React.FC<AccountInfoSectionProps> = ({ userInfo }) => {
  const { t } = useTranslation()

  return (
    <FlexWrapper direction={"column"} gap={12}>
      {[
        [t("account.name"), userInfo?.name],
        [t("account.email"), userInfo?.mail],
      ].map(([label, value], index) => (
        <FlexWrapper key={index} direction={"row"} gap={8} align={"center"}>
          <Typography type={"NormalBold"} color={"Text.default"}>
            {label}
          </Typography>
          <Typography type={"Normal"} color={"Text.default"}>
            {value}
          </Typography>
        </FlexWrapper>
      ))}
      <Captions type={"Smaller"} color={"Text.disable"}>
        <Trans
          i18nKey="account.sparcsssoCaption"
          components={{
            bold: (
              <LinkText
                type={"Smaller"}
                color={"Highlight.default"}
                onClick={() => {
                  window.open("https://sparcssso.kaist.ac.kr/account/profile/")
                }}
                children={undefined}
              />
            ),
          }}
        />
      </Captions>
      {[
        [t("account.schoolId"), userInfo?.studentNumber],
        [t("account.course"), userInfo?.courses],
        [t("account.major"), userInfo?.majorDepartment],
      ].map(([label, value], index) => (
        <FlexWrapper key={index} direction={"row"} gap={8} align={"center"}>
          <Typography type={"NormalBold"} color={"Text.default"}>
            {label}
          </Typography>
          <Typography type={"Normal"} color={"Text.default"}>
            {value}
          </Typography>
        </FlexWrapper>
      ))}
      <Captions type={"Smaller"} color={"Text.disable"}>
        <Trans
          i18nKey="account.kaistPortalCaption"
          components={{
            bold: (
              <LinkText
                type={"Smaller"}
                color={"Highlight.default"}
                onClick={() => {
                  window.location.href = "mailto:otlplus@sparcs.org"
                }}
                children={undefined}
              />
            ),
          }}
        />
      </Captions>
    </FlexWrapper>
  )
}

export default AccountInfoSection
