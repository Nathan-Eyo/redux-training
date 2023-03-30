import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://dog.ceo/api'}),
    reducerPath: "testApi",
    tagTypes: ["dogs"],
    endpoints: (builder) => ({
        getDogImage: builder.query({
            query: () => '/breeds/image/random',
            providesTags: ["dogs"]
        })
    })
});

export const { useGetDogImageQuery } = api;