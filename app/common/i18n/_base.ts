export const commonI18nBase = {
  example: "예시 번역",
  toggleTheme: {
    light: "라이트 모드",
    dark: "다크 모드",
  },
  credits: {
    credits: "만든 사람들",
    license: "라이선스",
    privacyPolicy: "개인정보취급방침",
  },
  search: {

  },
  common: {
    class: "분류",
    professor: "교수",
    description: "설명",
    grade: "성적",
    load: "널널",
    speech: "강의",
    upload: "업로드",
    numClasses: "강의시간",
    numLabs: "실험",
    credit: "학점",
    cancel: "취소",
    type: {
      basic: "기초",
      major: "전공",
      doubleMajor: "복수전공",
      minor: "부전공",
      advancedMajor: "심화전공",
      interdisciplinaryMajor: "자유융합전공",
      research: "연구",
      general: "교양",
      basicRequired: "기초필수",
      basicElective: "기초선택",
      majorRequired: "전공필수",
      majorElective: "전공선택",
      generalRequired: "교양필수",
      humanitiesSocialElective: "인문사회선택",
      humanities: "인문사회선택",
      thesisStudy: "졸업연구",
      individualStudy: "개별연구",
      otherElective: "자유선택",
      unclassified: "미분류",
      etc: "기타",
      basicRequiredShort: "기필",
      basicElectiveShort: "기선",
      majorRequiredShort: "전필",
      majorElectiveShort: "전선",
      humanitiesSocialElectiveShort: "인선",
      mandatoryGeneralCourseShort: "교필",
      otherElectiveShort: "자선",
      generalRequiredShort: "공통",
      electiveGraduateShort: "석박",
      allShort: "전체",
      etcShort: "기타",
      total: "전체",
      totalCredit: "학점",
      totalAu: "AU"
    },
    department: {
      hssShort: "인문",
      aeShort: "항공",
      bisShort: "바공",
      bsShort: "생명",
      cbeShort: "생화공",
      ceShort: "건환",
      chShort: "화학",
      csShort: "전산",
      eeShort: "전자",
      idShort: "산디",
      ieShort: "산공",
      masShort: "수리",
      meShort: "기계",
      nqeShort: "원양",
      btmShort: "기경",
      msShort: "신소재",
      phShort: "물리",
      tsShort: "융인",
      ssShort: "반시공",
      bcsShort: "뇌인지",
      allShort: "전체",
      etcShort: "기타"
    },
    level: {
      "100sShort": "100번대",
      "200sShort": "200번대",
      "300sShort": "300번대",
      "400sShort": "400번대",
      "500sShort": "500번대",
      "600sShort": "600번대",
      "700sShort": "700번대",
      "800sShort": "800번대",
      "900sShort": "900번대",
      allShort: "전체",
      etcShort: "기타"
    },
    term: {
      "3yearsShort": "3년이내",
      "1yearShort": "1년이내",
      thisSemesterShort: "이번학기",
      allShort: "전체"
    },
    review: {
      writingPlaceholder: "학점, 로드 등의 평가에 대하여 설명해주세요.",
      like: "좋아요",
    },
    search: {
      search: "검색",
      grade: "학년",
      department: "학과",
      term: "기간",
    },
    semesters: {
      spring: "봄",
      summer: "여름",
      fall: "가을",
      winter: "겨울"
    }
  },
  dictionary: {
    courseHistory: "개설이력",
    notOffered: "미개설",
    courseCountInfo: "총 <bold>{{count}}</bold>개 과목 (<icon/>: 이번 학기 개설)",
    sort: "정렬",
    noResults: "결과 없음",
    sortOptions: {
      code: "과목코드순",
      popularity: "인기순",
      enrollment: "수강자 많은 순"
    },
    review: "과목 후기",
    reviewLanguage: "언어",
    reviewLanguageOptions: {
      all: "전체",
      english: "영어"
    }
  }
}

export type CommonI18nBaseType = typeof commonI18nBase
