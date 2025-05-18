import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

import { axiosClient, defineAxiosMock } from "@/libs/axios"

const API_URL = "https://api.sampleapis.com/coffee/iced"

const apiResponseBody = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
    image: z.string(),
    id: z.number(),
  }),
)

type ApiResponseBodyType = z.infer<typeof apiResponseBody>

const ApiResponseMockData: ApiResponseBodyType = [
  {
    title: "Iced Coffee",
    description:
      "Regular coffee served with ice, typically served with a dash of milk, cream or sweetener.",
    ingredients: ["Coffee", "Ice", "Sugar", "Cream"],
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    id: 1,
  },
]

export const useGetIcedCoffee = () =>
  useQuery<ApiResponseBodyType, Error>({
    queryKey: [API_URL],
    queryFn: async (): Promise<ApiResponseBodyType> => {
      const { data } = await axiosClient.get(API_URL, {})
      const parsedData = apiResponseBody.parse(data)
      return parsedData
    },
  })

defineAxiosMock((mock) => {
  mock.onGet(API_URL).reply(() => [200, ApiResponseMockData])
})
