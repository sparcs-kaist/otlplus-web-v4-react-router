import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Modal from "@/common/components/Modal"
import type NewUser from "@/common/interface/NewUser"
import Typography from "@/common/primitives/Typography"
import AccountInfoSection from "@/features/account/sections/AccountInfoSection"
import AccountInterestedMajorSection from "@/features/account/sections/AccountInterestedMajorSection"

const LogoutButton = styled(Typography)`
  cursor: pointer;
`

interface AccountPageModalProps {
  userInfo: NewUser | null
  setUserInfo: React.Dispatch<React.SetStateAction<NewUser | null>>
  accountPageOpen: boolean
  setAccountPageOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountPageModal: React.FC<AccountPageModalProps> = ({
  userInfo,
  setUserInfo,
  accountPageOpen,
  setAccountPageOpen,
}) => {
  const { t } = useTranslation()

  return (
    <Modal
      isOpen={accountPageOpen}
      onClose={() => setAccountPageOpen(false)}
      title={t("account.title")}
    >
      <AccountInfoSection userInfo={userInfo} />
      <AccountInterestedMajorSection userInfo={userInfo} setUserInfo={setUserInfo} />
      <LogoutButton type="Normal" color="Highlight.default">
        {t("account.logout")}
      </LogoutButton>
    </Modal>
  )
}

export default AccountPageModal
