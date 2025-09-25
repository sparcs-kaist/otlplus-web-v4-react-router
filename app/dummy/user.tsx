import type UserProfile from "@/common/components/interface/User"

import UserLectures from "./userLectures"

const user: UserProfile = {
  departments: [],
  email: "mini@sparcs.org",
  favorite_departments: [],
  firstName: "동혁",
  id: 1,
  lastName: "김",
  majors: [
    {
      id: 1,
      name: "산업디자인학과",
      name_en: "industrial design",
      code: "industrial",
    },
  ],
  my_timetable_lectures: UserLectures,
  review_writable_lectures: [],
  reviews: [],
  student_id: "20200104",
}

export default user
