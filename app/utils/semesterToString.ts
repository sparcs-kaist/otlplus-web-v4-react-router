import i18n from "i18next"

export function stringSemester(semester: number): string {
  return [
    i18n.t("common.semesters.spring"),
    i18n.t("common.semesters.summer"),
    i18n.t("common.semesters.fall"),
    i18n.t("common.semesters.winter"),
  ][semester - 1]
}
