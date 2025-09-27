import type { GETUserInfoResponse } from "@/api/users/$userId/info"

const exampleUserInfo: GETUserInfoResponse = {
  name: "Sample User",
  mail: "test@kaist.ac.kr",
  studentNumber: 20123456,
  course: "학사과정",
  majorDepartments: [
    {
      id: 9945,
      name: "전산학부",
    },
  ],
  interestedDepartments: [
    {
      id: 9945,
      name: "전산학부",
    },
    {
      id: 833,
      name: "수리과학과",
    },
  ],
}

export default exampleUserInfo
