import { IStoreItem } from "./storeItem.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeItemApi = createApi({
  reducerPath: "storeItem",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getStoreItems: build.query<IStoreItem[], string>({
      query: (search: string) => ({
        url: `storeItems`,
        params: {
          q: search,
          _limit: 50,
          _page: 1,
        },
      }),
    }),

    // url: `storeItems?_limit=${limit}&_page=${page}`,
    // storeItems?q=esp&_limit=5&_page=1
  }),
});

export const { useGetStoreItemsQuery } = storeItemApi;
