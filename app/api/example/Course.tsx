import type { GETCourseDetailResponse } from "@/api/courses/$courseId"

const exampleCourse: GETCourseDetailResponse = {
  id: 745,
  name: "이산구조",
  code: "CS.20004",
  credit: 3,
  credit_au: 0,
  department: { name: "전산학부", id: 9945 },
  type: "전공필수",
  num_classes: 3,
  num_labs: 0,
  history: [
    { year: 2009, semester: 1, professors: [{ id: 981, name: "정진완", classNo: "A" }] },
    {
      year: 2009,
      semester: 3,
      professors: [{ id: 1534, name: "박진아", classNo: "A" }],
    },
    { year: 2010, semester: 1, professors: [{ id: 286, name: "최광무", classNo: "A" }] },
    {
      year: 2010,
      semester: 3,
      professors: [{ id: 798, name: "황규영", classNo: "A" }],
    },
    { year: 2011, semester: 1, professors: [{ id: 981, name: "정진완", classNo: "A" }] },
    {
      year: 2011,
      semester: 3,
      professors: [{ id: 1534, name: "박진아", classNo: "A" }],
    },
    { year: 2012, semester: 1, professors: [{ id: 1554, name: "김순태", classNo: "A" }] },
    {
      year: 2012,
      semester: 3,
      professors: [{ id: 798, name: "황규영", classNo: "A" }],
    },
    { year: 2013, semester: 1, professors: [{ id: 981, name: "정진완", classNo: "A" }] },
    {
      year: 2013,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 1554, name: "김순태", classNo: "B" },
      ],
    },
    { year: 2014, semester: 1, professors: [{ id: 1534, name: "박진아", classNo: "A" }] },
    {
      year: 2014,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 981, name: "정진완", classNo: "B" },
      ],
    },
    {
      year: 2015,
      semester: 1,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 981, name: "정진완", classNo: "B" },
      ],
    },
    {
      year: 2015,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 1529, name: "강성원", classNo: "B" },
      ],
    },
    {
      year: 2016,
      semester: 1,
      professors: [
        { id: 286, name: "최광무", classNo: "A" },
        { id: 1534, name: "박진아", classNo: "B" },
      ],
    },
    {
      year: 2016,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 1534, name: "박진아", classNo: "B" },
      ],
    },
    {
      year: 2017,
      semester: 1,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2017,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 1534, name: "박진아", classNo: "B" },
        {
          id: 2010,
          name: "마틴 지글러",
          classNo: "C",
        },
      ],
    },
    {
      year: 2018,
      semester: 1,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 1534, name: "박진아", classNo: "B" },
        {
          id: 2010,
          name: "마틴 지글러",
          classNo: "C",
        },
      ],
    },
    {
      year: 2018,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 2010, name: "마틴 지글러", classNo: "B" },
        {
          id: 1534,
          name: "박진아",
          classNo: "C",
        },
        { id: 2057, name: "이주영", classNo: "D" },
      ],
    },
    {
      year: 2019,
      semester: 1,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2019,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2020,
      semester: 1,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
        {
          id: 1534,
          name: "박진아",
          classNo: "C",
        },
      ],
    },
    {
      year: 2020,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
        {
          id: 1534,
          name: "박진아",
          classNo: "C",
        },
      ],
    },
    {
      year: 2021,
      semester: 1,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 1529, name: "강성원", classNo: "B" },
        {
          id: 2057,
          name: "이주영",
          classNo: "C",
        },
      ],
    },
    {
      year: 2021,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 1534, name: "박진아", classNo: "B" },
      ],
    },
    { year: 2022, semester: 1, professors: [{ id: 1529, name: "강성원", classNo: "A" }] },
    {
      year: 2022,
      semester: 3,
      professors: [{ id: 1534, name: "박진아", classNo: "A" }],
    },
    { year: 2023, semester: 1, professors: [{ id: 1529, name: "강성원", classNo: "A" }] },
    {
      year: 2023,
      semester: 3,
      professors: [
        { id: 1529, name: "강성원", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2024,
      semester: 1,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2024,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
    {
      year: 2025,
      semester: 1,
      professors: [],
    },
    {
      year: 2025,
      semester: 3,
      professors: [
        { id: 1534, name: "박진아", classNo: "A" },
        { id: 2057, name: "이주영", classNo: "B" },
      ],
    },
  ],
  summary:
    "집합이론, 관계, 순열과 조합의 개념과 그 응용, Propositional and predicate logic 등의 알고리즘의 설계와 분석을 다루는 수업입니다.",
}

export default exampleCourse
