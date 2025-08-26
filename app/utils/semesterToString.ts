export function stringSemester(semester: number): string {
  switch (semester) {
    case 1:
      return "봄";
    case 2:
      return "여름";
    case 3:
      return "가을";
    case 4:
      return "겨울";
    default:
      return "";
  }
}
