import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiApp = createApi({
  reducerPath: "Api",
  tagTypes: ['Posts', 'Comments', 'Albums'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit='') => `/posts?${limit && `_limit=${limit}`}`,
      providesTags : ['Posts'],
    }),
    getAlbums : builder.query({
      query:(limit='') => `/albums?${limit && `_limit=${limit}`}`,
      providesTags: ['Albums']
    }),
    getComments: builder.query({
      query : () => '/comments',
      providesTags:['Comments'],
    }),
    addComments : builder.mutation({
      query : (post) => ({
        url:'/comments',
        method: 'POST', 
        body: post
      }),
      invalidatesTags:['Comments'],
    }),
    deleteComments : builder.mutation({
      query:(id) => ({
        url :`/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Comments'],
    }),
    addPosts: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags:['Posts']
    }),
    removePosts: builder.mutation({
        query: (id) => ({
          url: `/posts/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      }),
      removeAllPosts: builder.mutation({
        query: () => ({
          url:`/posts`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      })
  }),
  transformResponce : responce => ({
    
    totalPages: responce.totalPages,
  })
});

export const { useDeleteCommentsMutation, useGetPostsQuery, useAddPostsMutation, useRemovePostsMutation, useRemoveAllPostsMutation, useGetCommentsQuery, useAddCommentsMutation, useGetAlbumsQuery} =
  apiApp;
