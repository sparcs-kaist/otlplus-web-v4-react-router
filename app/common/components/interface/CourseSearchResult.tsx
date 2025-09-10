export interface CourseSearchResult {
  id: number,          // 과목 ID
  title: string,    // 과목 이름
  code: string,     // 과목 코드
  type: string,     // 과목 유형 (예: 전공필수, 교양 등)
  department: {     // 소속 학과
    name: string    // 소속 학과 이름
  },
  professors:       // 교수들
    {
      name: string  // 교수들 이름만
    }[]
  ,
  summary: string,  // 과목 소개
  open: boolean,    // 개설 여부
  myCourse?: number[]  // 로그인 되어 있으면 내가 듣고 있는 강의 리스트
}
