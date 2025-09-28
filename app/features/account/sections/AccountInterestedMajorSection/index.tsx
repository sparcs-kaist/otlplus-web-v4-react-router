import { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { Departments } from "@/api/example/Departments"
import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import Button from "@/common/components/Button"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Department } from "@/common/schemas/department"
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
  userInfo: GETUserInfoResponse | null
  setUserInfo?: React.Dispatch<React.SetStateAction<GETUserInfoResponse | null>>
}

const Index: React.FC<AccountInterestedMajorSectionProps> = ({
  userInfo,
  setUserInfo,
}) => {
  const { t, i18n } = useTranslation()

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [temporaryMajor, setTemporaryMajor] = useState<Department[]>([])

  const startEditing = () => {
    setTemporaryMajor(userInfo ? [...userInfo.interestedDepartments] : [])
    setIsEditing(true)
  }

  function findDepartmentNameById(id: number): string | undefined {
    const department = Departments.find((dept) => dept.id === id)
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
              {userInfo?.interestedDepartments
                .map((department) => {
                  return findDepartmentNameById(department.id) || ""
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
