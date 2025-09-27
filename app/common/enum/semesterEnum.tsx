import i18n from "i18next"

export enum SemesterEnum {
  SPRING = 1,
  SUMMER,
  FALL,
  WINTER,
}

export function semesterToString(semester: SemesterEnum): string {
  return [
    i18n.t("common.semesters.spring"),
    i18n.t("common.semesters.summer"),
    i18n.t("common.semesters.fall"),
    i18n.t("common.semesters.winter"),
  ][semester - 1]
}
