export const TabTypes = ["write", "popularFeed", "reviewFeed", "liked"] as const
export type TabType = (typeof TabTypes)[number]
