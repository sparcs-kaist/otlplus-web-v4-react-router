import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type UserCoffeePreferenceState = {
  coffeePreference: string
}

type UserCoffeePreferenceActions = {
  setCoffeePreference: (coffeePreference: string) => void
}

// Do not persist this store
const useUserCoffeePreferenceStore = create<
  UserCoffeePreferenceState & UserCoffeePreferenceActions
>()(
  immer((set) => ({
    coffeePreference: "latte",
    setCoffeePreference: (coffeePreference: string) => set({ coffeePreference }),
  })),
)

export default useUserCoffeePreferenceStore
