import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tiktokHeaders = {
  "X-RapidAPI-Key": "aebaa8e0eamshf4a21968e560b82p1c4ba4jsn160d4cc2a65d",
  "X-RapidAPI-Host": "tiktok-all-in-one.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: tiktokHeaders });

export const tiktokAPI = createApi({
  reducerPath: "tiktokAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tiktok-all-in-one.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getUserSuggest: builder.query({
      query: () => createRequest(`/user/recommend?region=PK`)
    }),
    getUserDiscover: builder.query({
      query: () => createRequest(`/discover?region=PK`)
    }),
  }),
});

export const { useGetUserSuggestQuery, useGetUserDiscoverQuery } = tiktokAPI;
