import React, { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseHistoryChip from "@/features/dictionary/components/CourseHistoryChip"

const CourseHistory = styled(FlexWrapper)`
  width: 100%;
  padding-bottom: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.Line.default};
    border-radius: 8px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.Line.dark};
  }
`

const CourseHistoryBlock = styled(FlexWrapper)`
  height: 100%;
`

const NoHistoryText = styled(Typography)`
  width: 150px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface CourseHistorySubsectionProps {
  courseDetail: GETCourseDetailResponse | null
  selectedProfessorId: number | null
  setSelectedProfessorId: React.Dispatch<React.SetStateAction<number | null>>
}

const CourseHistorySubsection: React.FC<CourseHistorySubsectionProps> = ({
  courseDetail,
  selectedProfessorId,
  setSelectedProfessorId,
}) => {
  const { t } = useTranslation()

  const historyScroll = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (historyScroll.current) {
      historyScroll.current.scrollLeft = historyScroll.current.scrollWidth
    }
  }, [courseDetail])

  return (
    <>
      <Typography type={"NormalBold"} color={"Text.default"}>
        {t("dictionary.courseHistory")}
      </Typography>
      <CourseHistory direction="row" gap={20} ref={historyScroll}>
        {courseDetail?.history.map((history, index) => (
          <CourseHistoryBlock key={index} direction="column" gap={6} align={"center"}>
            <Typography type={"Normal"} color={"Text.default"}>
              {history.year} {semesterToString(history.semester)}
            </Typography>
            {history.professors.length === 0 ? (
              <NoHistoryText color={"Text.disable"} type={"Normal"}>
                {t("dictionary.notOffered")}
              </NoHistoryText>
            ) : (
              <FlexWrapper direction="column" gap={4} align={"center"}>
                {history.professors.map((professor, profIndex) => (
                  <CourseHistoryChip
                    selected={selectedProfessorId == professor.id}
                    chipIndex={professor.classNo}
                    chipText={professor.name}
                    onClick={() => {
                      if (selectedProfessorId === professor.id) {
                        setSelectedProfessorId(null)
                      } else {
                        setSelectedProfessorId(professor.id)
                      }
                    }}
                  />
                ))}
              </FlexWrapper>
            )}
          </CourseHistoryBlock>
        ))}
      </CourseHistory>
    </>
  )
}

export default CourseHistorySubsection
