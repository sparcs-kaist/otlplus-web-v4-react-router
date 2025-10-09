import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import OptionChipGrid from "@/utils/search/generateChips"
import {
    getDepartmentOptions,
    getLevelOptions,
    getTermOptions,
    getTypeOptions,
} from "@/utils/search/searchOptions"

import TimeFilterArea from "./TimeFilterArea"

type TupleOf<T, N extends number, R extends unknown[] = []> = R["length"] extends N
    ? R
    : TupleOf<T, N, [...R, T]>

type BoolN<N extends number> = TupleOf<boolean, N> & boolean[]

function hasKey<O extends object, K extends PropertyKey>(
    obj: O,
    key: K,
): key is K & keyof O {
    return key in obj
}

type SearchOptionsChips = "type" | "department" | "level" | "term"
export type SearchOptions = SearchOptionsChips | "time"

const funcs = {
    type: getTypeOptions,
    department: getDepartmentOptions,
    level: getLevelOptions,
    term: getTermOptions,
} satisfies Record<SearchOptionsChips, () => unknown>

const SearchOptionsChipsDetail = Object.fromEntries(
    Object.entries(funcs).map(([op, fn]) => [op, fn()]),
) as {
    [op in keyof typeof funcs]: ReturnType<(typeof funcs)[op]>
}

const SingleSelectOptions = ["term"] as const
type SingleSelectOption = (typeof SingleSelectOptions)[number]
const SingleSelectOptionsSet = new Set<SearchOptions>(SingleSelectOptions)
export function isSingleSelectOption(
    option: SearchOptions,
): option is SingleSelectOption {
    return SingleSelectOptionsSet.has(option)
}

type OptionsMinLength<T> = [T, ...T[]]
type OptionsRule<K extends SearchOptions, T> = K extends SingleSelectOption
    ? T | null
    : OptionsMinLength<T>

type ChosenListType = {
    [K in keyof typeof ChipsDetail]: K extends SingleSelectOption
        ? number | null
        : BoolN<(typeof ChipsDetail)[K]["length"]>
}

type SearchOptionsChipsType = {
    [K in keyof typeof SearchOptionsChipsDetail]: OptionsRule<
        K,
        (typeof SearchOptionsChipsDetail)[K][number]
    >
}
type SearchOptionsType = SearchOptionsChipsType & { time: TimeBlock }

type ExportRule<K extends SearchOptions, T> = K extends SingleSelectOption
    ? T
    : OptionsMinLength<T>

export type ExportDataType = {
    [K in keyof typeof SearchOptionsChipsDetail]?: ExportRule<
        K,
        (typeof SearchOptionsChipsDetail)[K][number][0] extends string
            ? [string, string]
            : (typeof SearchOptionsChipsDetail)[K][number][0] extends number
              ? [number, string]
              : any
    >
} & { time?: TimeBlock }

type TimeProps<ops extends readonly SearchOptions[]> = "time" extends ops[number]
    ? {
          timeFilter: TimeBlock | null
          setTimeFilter: (timeFilter: TimeBlock | null) => {}
      }
    : { timeFilter?: never; setTimeFilter?: never }

export type SearchFilterAreaProps<ops extends readonly SearchOptions[]> = {
    options: ops
    onChange: (options: ExportDataType) => void
} & TimeProps<ops>

const ChipsDetail = SearchOptionsChipsDetail

function SearchFilterArea<ops extends readonly SearchOptions[]>({
    options,
    onChange,
    timeFilter,
    setTimeFilter,
}: SearchFilterAreaProps<ops>) {
    const { t } = useTranslation()

    const optionsSet = new Set<ops[number]>(options)
    function isOptions(option: SearchOptions): option is ops[number] {
        return optionsSet.has(option)
    }

    const [chosenList, setChosenList] = useState<ChosenListType>(makeChosenList)

    const [selectedOptions, setSelectedOptions] = useState<SearchOptionsType>(
        {} as SearchOptionsType,
    )

    function makeChosenList() {
        const result = {} as ChosenListType

        options
            .filter((x): x is keyof typeof ChipsDetail => x in ChipsDetail)
            .forEach((key: keyof typeof ChipsDetail) => {
                const len = ChipsDetail[key].length

                if (isSingleSelectOption(key)) result[key] = null
                else
                    (result[key] as ChosenListType[typeof key]) = Array(len).fill(
                        false,
                    ) as BoolN<(typeof ChipsDetail)[typeof key]["length"]>
            })

        return result
    }

    function makeSelectedOptions(src: ChosenListType) {
        const result = {} as SearchOptionsChipsType

        ;(Object.keys(src) as Array<keyof ChosenListType>).forEach(
            (key: SearchOptionsChips) => {
                const detail = SearchOptionsChipsDetail[key]

                if (isSingleSelectOption(key)) {
                    if (src[key] == null) result[key] = null
                    else
                        result[key] = detail[
                            src[key]
                        ] as SearchOptionsChipsType[typeof key]
                }
                // 임시 방편, 나중에 방법 알아내면 수정할 예정
                else
                    (result[key] as any) = src[key]
                        .map((selected, idx) => (selected ? detail[idx] : null))
                        .filter((x): x is (typeof detail)[number] => x != null)
            },
        )

        return result
    }

    function makeExportData(src: SearchOptionsType) {
        const result = {} as ExportDataType

        for (const key in src) {
            const value = src[key as ops[number]]

            if (value != undefined) {
                if (hasKey(chosenList, key)) {
                    if (isSingleSelectOption(key)) {
                        const isAllSelected = chosenList[key] == null

                        if (isAllSelected) delete result[key]
                        else result[key] = value as ExportDataType[typeof key]
                    } else {
                        const isAllSelected = !chosenList[key].includes(true)

                        if (isAllSelected) delete result[key]
                        // 임시 방편
                        else (result[key] as any) = value as ExportDataType[typeof key]
                    }
                } else if (key == "time")
                    result[key] = value as ExportDataType[typeof key]
            }
        }

        return result
    }

    function handleOptionClick(idx: number, option: keyof ChosenListType) {
        setChosenList((prev) => {
            if (isSingleSelectOption(option)) return { ...prev, [option]: idx }
            else {
                const current = prev[option]
                const updated = current.map((v, i) => (i === idx ? !v : v))
                return { ...prev, [option]: updated }
            }
        })
    }

    function handleSelectAll(option: keyof ChosenListType) {
        if (isSingleSelectOption(option))
            setChosenList((prev) => ({
                ...prev,
                [option]: null,
            }))
        else
            setChosenList((prev) => ({
                ...prev,
                [option]: prev[option].map(() => false),
            }))
    }

    function isSelectedAll(chosenList: ChosenListType, option: keyof ChosenListType) {
        if (isSingleSelectOption(option)) return chosenList[option] == null
        else return !chosenList[option].includes(true)
    }

    useEffect(() => {
        const chipsList = makeSelectedOptions(chosenList)
        const time = { time: timeFilter }

        // 임시 방편
        setSelectedOptions(
            (isOptions("time") ? { ...chipsList, ...time } : chipsList) as any,
        )
    }, [chosenList, timeFilter])

    useEffect(() => {
        const data = makeExportData(selectedOptions)

        onChange(data)
    }, [selectedOptions])

    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            {options.map((option) => (
                <FlexWrapper direction="column" gap={6} key={option}>
                    <Typography type="NormalBold">
                        {t(`common.search.${option}`)}
                    </Typography>
                    <FlexWrapper direction="column" gap={0}>
                        {(() => {
                            if (hasKey(chosenList, option) && option in chosenList)
                                return (
                                    <OptionChipGrid
                                        nameList={ChipsDetail[option].map((x) => x[1])}
                                        chosenList={chosenList[option]}
                                        handleOptionClick={(idx) => {
                                            handleOptionClick(idx, option)
                                        }}
                                        handleSelectAllClick={() => {
                                            handleSelectAll(option)
                                        }}
                                        isSingleSelect={isSingleSelectOption(option)}
                                        selectedAll={isSelectedAll(chosenList, option)}
                                    />
                                )
                            else if (option == "time" && timeFilter != undefined)
                                return (
                                    <TimeFilterArea
                                        timeFilter={timeFilter}
                                        setTimeFilter={setTimeFilter}
                                    />
                                )
                        })()}
                    </FlexWrapper>
                </FlexWrapper>
            ))}
        </FlexWrapper>
    )
}

export default SearchFilterArea
