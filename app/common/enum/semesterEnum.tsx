import i18n from "i18next"

export enum SemesterEnum {
  SPRING = 1,
  SUMMER = 2,
  FALL = 3,
  WINTER = 4,
}

export function stringSemester(semester: SemesterEnum): string {
  return [
    i18n.t("common.semesters.spring"),
    i18n.t("common.semesters.summer"),
    i18n.t("common.semesters.fall"),
    i18n.t("common.semesters.winter"),
  ][semester - 1]
}
