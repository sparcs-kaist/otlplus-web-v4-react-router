import i18n from "i18next"

import { WeekdayEnum, weekdayToString } from "@/common/enum/weekdayEnum"
import type { TimeBlock } from "@/common/schemas/timeblock"

import { weekdayEnKorMap } from "./WeekdayKorEnMap"

function formatMinuteToString(minute: number, by12: boolean = false): string {
  const hour = Math.floor(minute / 60)
  const min = (minute % 60).toString().padStart(2, "0")
  if (by12) {
    const period = hour < 12 ? i18n.t("common.am") : i18n.t("common.pm")
    const displayHour = (hour % 12 === 0 ? 12 : hour % 12).toString().padStart(2, "0")
    return `${period} ${displayHour}:${min}`
  }
  return hour.toString().padStart(2, "0") + ":" + min
}

export function formatTimeblockToString(timeblock: TimeBlock): string {
  if (timeblock.day instanceof Date) {
    const date = timeblock.day
    const formattedDate = date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/ /g, "")
    return `${formattedDate} ${formatMinuteToString(timeblock.begin)} - ${formatMinuteToString(timeblock.end)}`
  }
  return `${weekdayToString(timeblock.day)} ${formatMinuteToString(timeblock.begin)} - ${formatMinuteToString(timeblock.end)}`
}

// timetable에서 시간 filter 위함
export function formatTimeAreaToString(timeBlock: TimeBlock): string {
  const eng = WeekdayEnum[timeBlock.day as WeekdayEnum]

  return `${weekdayEnKorMap.get(eng)} ${formatMinuteToString(
    timeBlock.begin,
    true,
  )} - ${formatMinuteToString(timeBlock.end, true)}`
}
