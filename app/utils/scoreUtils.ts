export const getSingleScoreLabel = (score: number) =>
  ["?", "F", "D", "C", "B", "A"][score]

export const getAverageScoreLabel = (
  score: number | undefined,
  reviewNum: number | undefined,
) => {
  if (reviewNum === 0 || reviewNum === undefined || score === undefined) {
    return "?"
  }
  return [
    "?",
    "F",
    "F",
    "F",
    "D-",
    "D",
    "D+",
    "C-",
    "C",
    "C+",
    "B-",
    "B",
    "B+",
    "A-",
    "A",
    "A+",
  ][Math.round(score)]
}
