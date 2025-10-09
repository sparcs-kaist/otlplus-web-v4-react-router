import { type ReactElement, useState } from "react"

import { Search } from "@mui/icons-material"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { type GETCoursesQuery } from "@/api/courses"
import { type SearchOptions } from "@/common/interface/SearchOptions"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { formatTimeAreaToString } from "@/utils/timetable/formatTimeblockToString"

import Button from "../Button"
import SearchFilterArea, {
    type ExportDataType,
    type SearchFilterAreaProps,
    isSingleSelectOption,
} from "./SearchFilterArea"
import TextInput from "./TextInput"

export type SearchParamsType = {
    type?: GETCoursesQuery["type"]
    department?: GETCoursesQuery["department"]
    level?: GETCoursesQuery["level"]
    term?: GETCoursesQuery["term"]
    time?: GETCoursesQuery["time"]
    keyword: GETCoursesQuery["keyword"]
}

type TimeProps<ops extends readonly SearchOptions[]> = "time" extends ops[number]
    ? {
          timeFilter: TimeBlock | null
          setTimeFilter: (timeFilter: TimeBlock | null) => {}
      }
    : { timeFilter?: never; setTimeFilter?: never }

type SearchAreaProps<ops extends readonly SearchOptions[]> = {
    options: ops
    onSearch: (params: SearchParamsType) => void
    SearchIcon?: ReactElement
} & TimeProps<ops>

const dropInVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
}

function SearchArea<const ops extends readonly SearchOptions[]>({
    options,
    onSearch,
    SearchIcon,
    timeFilter,
    setTimeFilter,
}: SearchAreaProps<ops>) {
    const { t } = useTranslation()

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")

    const [chipsOptions, setChipsOptions] = useState<ExportDataType>({})

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        chipsOptions: ExportDataType,
        textValue: string,
    ) => {
        if (event.nativeEvent.isComposing) return

        if (event.key === "Enter") {
            handleSubmit(chipsOptions, textValue)
            console.log("입력된 값:", value)
        }
    }

    function handleReset() {
        setOpen(false)
        setChipsOptions({})
    }

    function handleSubmit(chipsOptions: ExportDataType, textValue: string) {
        console.log("필터 결과")
        setOpen(false)
        onSearch(getSearchParams(chipsOptions, textValue))
        setChipsOptions({})
    }

    function getOptionList(
        chipsOptions: ExportDataType,
        key: keyof typeof chipsOptions,
    ): string {
        let result: string = ""
        const value = chipsOptions[key]

        if (value != undefined) {
            if (key == "time") result = `${formatTimeAreaToString(value as TimeBlock)}`

            if (isSingleSelectOption(key)) result = t((value as [any, string])[1])
            else result = (value as [any, string]).map((x) => t(x[1])).join(", ")
        }

        return result
    }

    function getSearchParams(
        chipsOptions: ExportDataType,
        textValue: string,
    ): SearchParamsType {
        const result = {} as SearchParamsType

        ;(Object.keys(chipsOptions) as Array<keyof typeof chipsOptions>).forEach(
            (key: keyof typeof chipsOptions) => {
                const value = chipsOptions[key]

                if (value != undefined) {
                    if (key == "time") result[key] = value as TimeBlock
                    else {
                        if (isSingleSelectOption(key))
                            result[key] = (value as [any, string])[0]
                        else
                            result[key] = (value as [any, string][]).map(
                                (x) => x[0],
                            ) as any
                    }
                }
            },
        )

        result["keyword"] = textValue

        return result
    }

    function onChange(options: ExportDataType) {
        setChipsOptions(options)
    }

    function withTimeFilter<T extends readonly SearchOptions[]>(
        options: T,
        timeFilter?: TimeBlock | null,
    ): Pick<SearchFilterAreaProps<T>, "timeFilter"> {
        return options.includes("time") && timeFilter != undefined
            ? ({ timeFilter: timeFilter, setTimeFilter: setTimeFilter } as Pick<
                  SearchFilterAreaProps<T>,
                  "timeFilter"
              >)
            : ({} as Pick<SearchFilterAreaProps<T>, "timeFilter">)
    }

    return (
        <FlexWrapper direction="column" align="stretch" gap={0}>
            <FlexWrapper
                direction="column"
                align="stretch"
                onClick={() => {
                    if (!open) setOpen(true)
                }}
                gap={0}
                padding="4px 16px"
            >
                <FlexWrapper direction="row" align="center" gap={0}>
                    {SearchIcon == undefined ? (
                        <Icon size={17.5} color="#E54C65" onClick={() => {}}>
                            <Search />
                        </Icon>
                    ) : (
                        SearchIcon
                    )}
                    <TextInput
                        value={value}
                        handleChange={(newValue) => {
                            setValue(newValue)
                        }}
                        placeholder={t("common.search.placeholder")}
                        onKeyDown={(e) => {
                            handleKeyDown(e, chipsOptions, value)
                        }}
                    />
                </FlexWrapper>
                <FlexWrapper direction="row" gap={8} align="center">
                    {Object.keys(chipsOptions).map((key) => (
                        <FlexWrapper
                            direction="row"
                            gap={0}
                            padding="8px 0px 0px 0px"
                            key={key}
                        >
                            <Typography type="SmallerBold">
                                {t(`common.search.${key}`)}:&nbsp;
                            </Typography>
                            <Typography type="Smaller">
                                {getOptionList(
                                    chipsOptions,
                                    key as keyof typeof chipsOptions,
                                )}
                            </Typography>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>
            </FlexWrapper>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropInVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            overflow: "hidden",
                            display: "flex",
                            gap: "12px",
                            flexDirection: "column",
                        }}
                    >
                        <FlexWrapper
                            direction="column"
                            align="stretch"
                            padding="16px"
                            gap={16}
                        >
                            <SearchFilterArea
                                options={options}
                                onChange={onChange}
                                // 임시 방편, 나중에 방법 알아내면 수정할 예정
                                {...(withTimeFilter(options, timeFilter) as any)}
                            />
                            <FlexWrapper direction="row" justify="flex-end" gap={8}>
                                <Button
                                    $paddingLeft={24}
                                    $paddingTop={9}
                                    onClick={handleReset}
                                >
                                    <Typography>취소</Typography>
                                </Button>
                                <Button
                                    $paddingLeft={24}
                                    $paddingTop={9}
                                    type="selected"
                                    onClick={() => {
                                        handleSubmit(chipsOptions, value)
                                    }}
                                >
                                    <Typography>검색</Typography>
                                </Button>
                            </FlexWrapper>
                        </FlexWrapper>
                    </motion.div>
                )}
            </AnimatePresence>
        </FlexWrapper>
    )
}

export default SearchArea
