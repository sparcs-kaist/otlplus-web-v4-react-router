import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export type UserType = {
  id: number
  name: string
  email: string
}

type UserStateLoggedOut = {
  isLoggedIn: false
}

type UserStateLoggedIn = {
  isLoggedIn: true
  user: UserType
}

type UserState = UserStateLoggedOut | UserStateLoggedIn

type UserActions = {
  login: (user: UserType) => void
  logout: () => void
}

// Persist this store
const useUserStore = create<UserState & UserActions>()(
  persist(
    immer((set) => ({
      isLoggedIn: false,
      user: null,
      login: (user: UserType) => set({ isLoggedIn: true, user }),
      logout: () => set({ isLoggedIn: false }),
    })),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useUserStore
