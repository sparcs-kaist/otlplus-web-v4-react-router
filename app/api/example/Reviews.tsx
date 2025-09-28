import type { GETReviewsResponse } from "@/api/reviews"

const exampleReviews: GETReviewsResponse = {
  reviews: [
    {
      id: 30579,
      courseId: 745,
      courseName: "이산구조",
      professor: {
        id: 1534,
        name: "박진아",
      },
      year: 2025,
      semester: 1,
      content:
        "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
      like: 1,
      isDeleted: false,
      grade: 4,
      load: 4,
      speech: 4,
      likedByUser: true,
    },
    {
      id: 29854,
      courseId: 745,
      courseName: "이산구조",
      professor: {
        id: 2057,
        name: "이주영",
      },
      year: 2025,
      semester: 1,
      content:
        "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
      like: 0,
      isDeleted: false,
      grade: 4,
      load: 5,
      speech: 5,
      likedByUser: false,
    },
    {
      id: 32899,
      courseId: 745,
      courseName: "이산구조",
      professor: {
        id: 1534,
        name: "박진아",
      },
      year: 2025,
      semester: 1,
      content:
        "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
      like: 1,
      isDeleted: false,
      grade: 4,
      load: 4,
      speech: 4,
      likedByUser: false,
    },
    {
      id: 93429,
      courseId: 745,
      courseName: "이산구조",
      professor: {
        id: 2057,
        name: "이주영",
      },
      year: 2025,
      semester: 1,
      content:
        "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
      like: 0,
      isDeleted: false,
      grade: 4,
      load: 5,
      speech: 5,
      likedByUser: false,
    },
  ],
  averageGrade: 13.0,
  averageLoad: 13.5,
  averageSpeech: 13.5,
  myReviewId: 29854,
}

export default exampleReviews
