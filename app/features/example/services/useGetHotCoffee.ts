import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

import { axiosClient, defineAxiosMock } from "@/libs/axios"

const API_URL = "https://api.sampleapis.com/coffee/hot"

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
    title: "Black Coffee",
    description:
      "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  },
]
export const useGetHotCoffee = () =>
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
