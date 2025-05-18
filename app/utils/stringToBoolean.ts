const possibleTrueValues = ["true", "1", "yes", "y", "on", "enable", "enabled"]

const stringToBoolean = (value: string) => {
  return possibleTrueValues.includes(value)
}

export default stringToBoolean
