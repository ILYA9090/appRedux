import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiApp = createApi({
  reducerPath: "Api",
  tagTypes: ["Posts", "Comments", "Albums", "Clients", "Entities"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getEntities: builder.query({
      query: () => `/entities`,
      providesTags: ["Entities"],
    }),
    addEntities: builder.mutation({
      query: (body) => ({
        url: `/entities`,
        method: "POST",
        body
      }),
      invalidatesTags: ["Entities"],
    }),
    deleteEntities: builder.mutation({
      query: (id) => ({
        url: `/entities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Entities"],
    }),
    getPosts: builder.query({
      query: (limit = "") => `/posts?${limit && `_limit=${limit}`}`,

      providesTags: ["Posts"],
    }),
    getAlbums: builder.query({
      query: (limit = "") => `/albums?${limit && `_limit=${limit}`}`,
      providesTags: ["Albums"],
    }),
    getClients: builder.query({
      query: () => "/clients",
      providesTags: ["Clients"],
    }),
    getComments: builder.query({
      query: (limit = "") => `/comments?${limit && `_limit=${limit}`}`,
      providesTags: ["Comments"],
    }),
    addComments: builder.mutation({
      query: (post) => ({
        url: "/comments",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Comments"],
    }),
    addClients: builder.mutation({
      query: (post) => ({
        url: "/clients",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Clients"],
    }),
    addAlbums: builder.mutation({
      query: (post) => ({
        url: "/albums",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Albums"],
    }),
    deleteAlbums: builder.mutation({
      query: (id) => ({
        url: `/albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Albums"],
    }),
    deleteComments: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comments"],
    }),
    addPosts: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    removePosts: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    removeAllPosts: builder.mutation({
      query: () => ({
        url: `/posts`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useDeleteCommentsMutation,
  useGetPostsQuery,
  useAddPostsMutation,
  useRemovePostsMutation,
  useRemoveAllPostsMutation,
  useGetCommentsQuery,
  useAddCommentsMutation,
  useGetAlbumsQuery,
  useAddAlbumsMutation,
  useDeleteAlbumsMutation,
  useGetClientsQuery,
  useAddClientsMutation,
  useGetEntitiesQuery,
  useAddEntitiesMutation,
  useDeleteEntitiesMutation
} = apiApp;
