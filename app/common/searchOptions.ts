import i18n from "i18next"

export const getTypeOptions = (): string[][] => [
  ["BR", i18n.t("common.type.basicRequiredShort")],
  ["BE", i18n.t("common.type.basicElectiveShort")],
  ["MR", i18n.t("common.type.majorRequiredShort")],
  ["ME", i18n.t("common.type.majorElectiveShort")],
  ["MGC", i18n.t("common.type.mandatoryGeneralCourseShort")],
  ["HSE", i18n.t("common.type.humanitiesSocialElectiveShort")],
  ["GR", i18n.t("common.type.generalRequiredShort")],
  ["EG", i18n.t("common.type.electiveGraduateShort")],
  ["OE", i18n.t("common.type.otherElectiveShort")],
  ["ETC", i18n.t("common.type.etcShort")],
]

export const getDepartmentOptions = (): string[][] =>
  (
    [
      ["HSS", i18n.t("common.department.hssShort"), 200],
      ["CE", i18n.t("common.department.ceShort"), 500],
      ["BTM", i18n.t("common.department.btmShort"), 500],
      ["ME", i18n.t("common.department.meShort"), 500],
      ["PH", i18n.t("common.department.phShort"), 500],
      ["BiS", i18n.t("common.department.bisShort"), 500],
      ["IE", i18n.t("common.department.ieShort"), 500],
      ["ID", i18n.t("common.department.idShort"), 500],
      ["BS", i18n.t("common.department.bsShort"), 500],
      ["MAS", i18n.t("common.department.masShort"), 500],
      ["NQE", i18n.t("common.department.nqeShort"), 500],
      ["EE", i18n.t("common.department.eeShort"), 500],
      ["CS", i18n.t("common.department.csShort"), 500],
      ["AE", i18n.t("common.department.aeShort"), 500],
      ["CH", i18n.t("common.department.chShort"), 500],
      ["CBE", i18n.t("common.department.cbeShort"), 500],
      ["MS", i18n.t("common.department.msShort"), 500],
      ["TS", i18n.t("common.department.tsShort"), 500],
      ["SS", i18n.t("common.department.ssShort"), 500],
      ["BCS", i18n.t("common.department.bcsShort"), 500],
      ["ETC", i18n.t("common.department.etcShort"), 900],
    ] as [string, string, number][]
  )
    .sort((a, b) => {
      if (a[2] !== b[2]) {
        return a[2] - b[2]
      }
      return a[1].localeCompare(b[1])
    })
    .map(([code, name]) => [code, name])

export const getLevelOptions = (): string[][] => [
  ["100", i18n.t("common.level.100sShort")],
  ["200", i18n.t("common.level.200sShort")],
  ["300", i18n.t("common.level.300sShort")],
  ["400", i18n.t("common.level.400sShort")],
  ["500", i18n.t("common.level.500sShort")],
  ["600", i18n.t("common.level.600sShort")],
  ["700", i18n.t("common.level.700sShort")],
  ["800", i18n.t("common.level.800sShort")],
  ["900", i18n.t("common.level.900sShort")],
]

export const getTermOptions = (): string[][] => [
  ["3", i18n.t("common.term.3yearsShort")],
  ["1", i18n.t("common.term.1yearShort")],
  ["0", i18n.t("common.term.thisSemesterShort")],
]

export const getLabelOfValue = (options: string[][], value: string): string => {
  const matchedOption = options.find((o) => o[0] === value)
  if (!matchedOption) {
    return "Unknown"
  }
  return matchedOption[1]
}
