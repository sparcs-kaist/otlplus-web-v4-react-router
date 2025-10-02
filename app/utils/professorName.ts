import { type Professor } from "@/common/schemas/professor"

function professorName(professors: Professor[]) {
    return `${professors[0].name}${professors.length > 1 ? " 외 " + (professors.length - 1) : ""}`
}

export default professorName
