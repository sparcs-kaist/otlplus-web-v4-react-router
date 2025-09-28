import styled from "@emotion/styled"
import CircleIcon from "@mui/icons-material/Circle"
import { useTranslation } from "react-i18next"

import type { GETCoursesResponse } from "@/api/courses"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import themes from "@/styles/themes"

interface CourseBlockProps {
  course: GETCoursesResponse[number]
  isSelected: boolean
  selectCourseId: React.Dispatch<React.SetStateAction<number | null>>
}

const CourseBlockInner = styled.div<{ selected: boolean }>`
  width: 100%;
  border-radius: 7px;
  padding: 8px 10px;
  border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ selected, theme }) =>
    selected
      ? theme.colors.Background.Block.dark
      : theme.colors.Background.Block.default};
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.Line.default};
  margin: 6px 0;
`

const DetailHeader = styled(Typography)`
  white-space: nowrap;
`

const CourseBlock: React.FC<CourseBlockProps> = ({
  course,
  isSelected,
  selectCourseId,
}) => {
  const { t } = useTranslation()

  return (
    <CourseBlockInner
      onClick={() => {
        if (isSelected) {
          selectCourseId(null)
        } else {
          selectCourseId(course.id)
        }
      }}
      selected={isSelected}
    >
      <FlexWrapper direction="row" gap={6} align={"center"}>
        <Icon
          size={12}
          color={
            course.open
              ? themes.light.colors.Highlight.default
              : themes.light.colors.Text.disable
          }
        >
          <CircleIcon />
        </Icon>
        <Typography type={"NormalBold"} color={"Text.default"}>
          {course.title}
        </Typography>
        <Typography type={"Normal"} color={"Text.placeholder"}>
          {course.code}
        </Typography>
      </FlexWrapper>
      <Divider />
      <FlexWrapper direction="column" gap={4}>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>
            {t("common.class")}
          </DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>
            {course.department.name}, {course.type}
          </Typography>
        </FlexWrapper>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>
            {t("common.professor")}
          </DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>
            {course.professors.map((professor) => professor.name).join(", ")}
          </Typography>
        </FlexWrapper>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>
            {t("common.description")}
          </DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>
            {course.summary}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CourseBlockInner>
  )
}

export default CourseBlock
