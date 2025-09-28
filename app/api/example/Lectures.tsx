import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import type { Lecture } from "@/common/schemas/lecture"

const exampleLectures: Lecture[] = [
  {
    id: 3678,
    code: "CBE342",
    courseId: 1234,
    department: { id: 701, name: "생명화학공학과" },
    name: "화학 및 생물 제품디자인",
    type: "전공선택",
    professors: [
      {
        id: 695,
        name: "장용근",
      },
    ],
    lectureDuration: 3,
    scoreGrade: 0,
    scoreLoad: 0,
    scoreSpeech: 0,
    credit: 4,
    au: 0,
    limitPeople: 50,
    classes: [
      {
        day: 0,
        begin: 480,
        end: 570,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
      {
        day: 2,
        begin: 600,
        end: 690,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
    ],
    examTimes: [
      {
        day: WeekdayEnum.Mon,
        begin: 600,
        end: 720,
        str: "월 10:00~12:00",
      },
    ],
    classNo: "A",
    numPeople: 0,
    isEnglish: false,
  },
  {
    id: 295,
    code: "CBE441",
    courseId: 5678,
    department: { id: 701, name: "생명화학공학과" },
    name: "공정 및 제품 디자인",
    type: "전공선택",
    professors: [
      {
        id: 1853,
        name: "이재우",
      },
      {
        id: 695,
        name: "장용근",
      },
    ],
    scoreGrade: 0,
    lectureDuration: 3,
    scoreSpeech: 0,
    scoreLoad: 0,
    credit: 4,
    au: 0,
    limitPeople: 20,
    classes: [
      {
        day: 1,
        begin: 630,
        end: 720,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
      {
        day: 2,
        begin: 780,
        end: 870,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
    ],
    examTimes: [
      {
        day: WeekdayEnum.Wed,
        begin: 840,
        end: 960,
        str: "수 14:00~16:00",
      },
    ],
    classNo: "A",
    numPeople: 0,
    isEnglish: false,
  },
  {
    id: 1599,
    code: "CBE442",
    courseId: 9101,
    department: { id: 701, name: "생명화학공학과" },
    name: "생명화학공학 디자인 프로젝트",
    type: "전공필수",
    professors: [
      {
        id: 2023,
        name: "리섕",
      },
    ],
    lectureDuration: 3,
    scoreGrade: 15,
    scoreLoad: 6,
    scoreSpeech: 12,
    credit: 3,
    au: 0,
    limitPeople: 70,
    classes: [
      {
        day: 1,
        begin: 480,
        end: 570,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
      {
        day: 3,
        begin: 600,
        end: 690,
        buildingCode: "E2",
        placeName: "산업경영학동 1225",
      },
    ],
    examTimes: [
      {
        day: WeekdayEnum.Thu,
        begin: 960,
        end: 1080,
        str: "목 16:00~18:00",
      },
    ],
    classNo: "A",
    numPeople: 0,
    isEnglish: false,
  },
]

export default exampleLectures
