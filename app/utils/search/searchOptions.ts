import i18n from "i18next"

/*
    [<API에 요청 보내는 type>, i18n string]
*/

// 이거 i18n 뺀 것도 어떻게 보면 임시 방편인데 추후 수정하겠음

export const getTypeOptions = () =>
  [
    ["BR", "common.type.basicRequiredShort"],
    ["BE", "common.type.basicElectiveShort"],
    ["MR", "common.type.majorRequiredShort"],
    ["ME", "common.type.majorElectiveShort"],
    ["MGC", "common.type.mandatoryGeneralCourseShort"],
    ["HSE", "common.type.humanitiesSocialElectiveShort"],
    ["GR", "common.type.generalRequiredShort"],
    ["EG", "common.type.electiveGraduateShort"],
    ["OE", "common.type.otherElectiveShort"],
    ["ETC", "common.type.etcShort"],
  ] as const

type DepartmentTuple = readonly [string, string, number]
type DepartmentPair = readonly [string, string]

export const getDepartmentOptions = () => {
  const list: DepartmentTuple[] = [
    ["HSS", "common.department.hssShort", 200],
    ["CE", "common.department.ceShort", 500],
    ["BTM", "common.department.btmShort", 500],
    ["ME", "common.department.meShort", 500],
    ["PH", "common.department.phShort", 500],
    ["BiS", "common.department.bisShort", 500],
    ["IE", "common.department.ieShort", 500],
    ["ID", "common.department.idShort", 500],
    ["BS", "common.department.bsShort", 500],
    ["MAS", "common.department.masShort", 500],
    ["NQE", "common.department.nqeShort", 500],
    ["EE", "common.department.eeShort", 500],
    ["CS", "common.department.csShort", 500],
    ["AE", "common.department.aeShort", 500],
    ["CH", "common.department.chShort", 500],
    ["CBE", "common.department.cbeShort", 500],
    ["MS", "common.department.msShort", 500],
    ["TS", "common.department.tsShort", 500],
    ["SS", "common.department.ssShort", 500],
    ["BCS", "common.department.bcsShort", 500],
    ["ETC", "common.department.etcShort", 900],
  ]

  const departments = [
    ...[...list]
      .sort((a, b) => a[2] - b[2] || a[1].localeCompare(b[1]))
      .map(
        ([code, label]) =>
          [code, label] as const satisfies readonly [typeof code, string],
      ),
  ] as const

  // 임시 방편, 추후 더 정확한 로직 만들겠음
  return [
    ["HSS", "common.department.hssShort"],
    ["CE", "common.department.ceShort"],
    ["BTM", "common.department.btmShort"],
    ["ME", "common.department.meShort"],
    ["PH", "common.department.phShort"],
    ["BiS", "common.department.bisShort"],
    ["IE", "common.department.ieShort"],
    ["ID", "common.department.idShort"],
    ["BS", "common.department.bsShort"],
    ["MAS", "common.department.masShort"],
    ["NQE", "common.department.nqeShort"],
    ["EE", "common.department.eeShort"],
    ["CS", "common.department.csShort"],
    ["AE", "common.department.aeShort"],
    ["CH", "common.department.chShort"],
    ["CBE", "common.department.cbeShort"],
    ["MS", "common.department.msShort"],
    ["TS", "common.department.tsShort"],
    ["SS", "common.department.ssShort"],
    ["BCS", "common.department.bcsShort"],
    ["ETC", "common.department.etcShort"],
  ] as const
}

export const getLevelOptions = () =>
  [
    [100, "common.level.100sShort"],
    [200, "common.level.200sShort"],
    [300, "common.level.300sShort"],
    [400, "common.level.400sShort"],
    [500, "common.level.500sShort"],
    [600, "common.level.600sShort"],
    [700, "common.level.700sShort"],
    [800, "common.level.800sShort"],
    [900, "common.level.900sShort"],
  ] as const

export const getTermOptions = () =>
  [
    [3, "common.term.3yearsShort"],
    [1, "common.term.1yearShort"],
    [0, "common.term.thisSemesterShort"],
  ] as const

export const getLabelOfValue = (options: string[][], value: string): string => {
  const matchedOption = options.find((o) => o[0] === value)
  if (!matchedOption) {
    return "Unknown"
  }
  return matchedOption[1]
}
