import { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import DepartmentList from "@/api/dummy/departments.json"
import Button from "@/common/components/Button"
import type NewUser from "@/common/interface/NewUser"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import DepartmentSearchArea from "@/features/account/components/DepartmentSearchArea"

const AccountInterestedMajorSectionWrapper = styled(FlexWrapper)`
  margin: 10px 0;
`

const EditButton = styled.button`
  height: 32px;
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Background.Block.dark};
  }
`

interface AccountInterestedMajorSectionProps {
  userInfo: NewUser | null
  setUserInfo?: React.Dispatch<React.SetStateAction<NewUser | null>>
}

const Index: React.FC<AccountInterestedMajorSectionProps> = ({
  userInfo,
  setUserInfo,
}) => {
  const { t, i18n } = useTranslation()

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [temporaryMajor, setTemporaryMajor] = useState<number[]>([])

  const startEditing = () => {
    setTemporaryMajor(userInfo ? [...userInfo.interestedMajorDepartments] : [])
    setIsEditing(true)
  }

  function findDepartmentNameById(id: number): string | undefined {
    const department = DepartmentList.find((dept) => dept.id === id)
    return department
      ? i18n.language === "en"
        ? department.code
        : department.name
      : undefined
  }

  function saveInterestedMajors() {
    if (setUserInfo) {
      setUserInfo((prev) =>
        prev ? { ...prev, interestedMajorDepartments: [...temporaryMajor] } : prev,
      )
    }
    setIsEditing(false)
  }

  return (
    <AccountInterestedMajorSectionWrapper direction="column" gap={12}>
      <FlexWrapper
        direction={"row"}
        gap={0}
        align="center"
        justify="space-between"
        style={{ width: "100%" }}
      >
        <Typography type="NormalBold" color="Text.default">
          {t("account.interestedDepartments")}
        </Typography>
        {!isEditing && (
          <FlexWrapper direction={"row"} gap={8} align="center">
            <Typography type="Normal" color="Text.default">
              {userInfo?.interestedMajorDepartments
                .map((id) => {
                  return findDepartmentNameById(id)
                })
                .join(", ")}
            </Typography>
            <EditButton onClick={startEditing}>{t("common.edit")}</EditButton>
          </FlexWrapper>
        )}
      </FlexWrapper>
      {isEditing && (
        <>
          <DepartmentSearchArea
            currentDepartment={temporaryMajor}
            setCurrentDepartment={setTemporaryMajor}
          />
          <Button
            type="selected"
            style={{ width: "100%", height: "48px" }}
            onClick={saveInterestedMajors}
          >
            {t("common.save")}
          </Button>
        </>
      )}
    </AccountInterestedMajorSectionWrapper>
  )
}

export default Index
