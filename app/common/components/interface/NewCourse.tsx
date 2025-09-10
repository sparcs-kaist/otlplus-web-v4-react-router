export interface NewCourse {
  id: number,          // 과목 ID
    title: string,    // 과목 이름
  code: string,     // 과목 코드
  type: string,     // 과목 유형 (예: 전공필수, 교양 등)
  department: {      // 소속 학과
    name: string   // 소속 학과 이름
  },
  history: {
    year: number,    // 학기 연도
    semester: number, // 학기 번호 (1: 봄학기, 3: 가을학기)
    professors: {        // 교수 목록
      id: number, // 교수 ID
      name: string,    // 교수 이름
      classNo: string   // 교수의 수업 번호 (없을 경우 null)
    }[]
  }[]
  summary: string   // 과목 소개
  credit: number,      // 학점
  credit_au: number,   // AU
  num_classes: number, // 수업 시간
  num_labs: number     // 실험시간
}
