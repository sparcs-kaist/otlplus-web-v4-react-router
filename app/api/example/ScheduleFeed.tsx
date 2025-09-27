import type { GETSchedulesResponse } from "@/api/schedules"

const exampleScheduleFeed: GETSchedulesResponse = [
  {
    year: 2024,
    from: new Date("2024-12-16"),
    to: new Date("2024-12-20"),
    name: "2024 겨울 기말고사",
  },
  {
    year: 2025,
    from: new Date("2025-01-20"),
    to: new Date("2025-01-24"),
    name: "2025 겨울 계절학기",
  },
]

export default exampleScheduleFeed
