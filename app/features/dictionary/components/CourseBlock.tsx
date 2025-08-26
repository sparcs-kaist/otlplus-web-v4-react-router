import type { CourseSearchResult } from "@/common/components/interface/CourseSearchResult"
import styled from "@emotion/styled"
import Icon from "@/common/components/Icon"
import themes from "@/styles/themes"
import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import { useTranslation } from "react-i18next"

interface CourseBlockProps {
  course: CourseSearchResult
  isSelected: boolean
  selectCourseId: React.Dispatch<React.SetStateAction<number | null>>
}

const CourseBlockInner = styled.div<{ selected: boolean }>`
  width: 100%;
  border-radius: 7px;
  padding: 8px 10px;
  border: 1px ${({theme} ) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ selected, theme }) => selected ? theme.colors.Background.Block.dark : theme.colors.Background.Block.default};
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

const CourseBlock: React.FC<CourseBlockProps> = ({ course, isSelected, selectCourseId }) => {
  const { t } = useTranslation()

  return (
    <CourseBlockInner onClick={() => {
      if (isSelected) {
        selectCourseId(null);
      } else {
        selectCourseId(course.id);
      }
    }} selected={isSelected}>
      <FlexWrapper direction="row" gap={6} align={"center"}>
        <Icon type={"Circle"} size={12} color={course.open ? themes.light.colors.Highlight.default : "#CCCCCC"}/>
        <Typography type={"NormalBold"} color={"Text.default"}>{course.title}</Typography>
        <Typography type={"Normal"} color={"Text.placeholder"}>{course.code}</Typography>
      </FlexWrapper>
      <Divider/>
      <FlexWrapper direction="column" gap={4}>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>{t('common.class')}</DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>{course.department.name}, {course.type}</Typography>
        </FlexWrapper>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>{t('common.professor')}</DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>{course.professors.map((professor) => professor.name).join(", ")}</Typography>
        </FlexWrapper>
        <FlexWrapper direction="row" gap={6}>
          <DetailHeader type={"NormalBold"} color={"Text.default"}>{t('common.description')}</DetailHeader>
          <Typography type={"Normal"} color={"Text.default"}>{course.summary}</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CourseBlockInner>
  );
}

export default CourseBlock;