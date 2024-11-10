import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiApp = createApi({
  reducerPath: "Api",
  tagTypes: ['Posts', 'Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags : ['Posts'],
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
        query:(data) => ({
          url:`/posts${data}`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      })
  }),
});

export const { useDeleteCommentsMutation, useGetPostsQuery, useAddPostsMutation, useRemovePostsMutation, useRemoveAllPostsMutation, useGetCommentsQuery, useAddCommentsMutation} =
  apiApp;
