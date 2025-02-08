import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/moviehub-api/us-central1',
  }),
  endpoints: builder => ({
    getMovies: builder.query<IMovie[], void>({
      query: () => {
        return {
          url: '/getMovies',
          method: 'GET',
        };
      },
    }),
    getMoviesById: builder.query<IMovie[], string>({
      query: movieId => {
        return {
          url: `/getMovieById/${movieId}`,
          method: 'GET',
        };
      },
    }),
    updateSingleMovie: builder.mutation<IMovie[], IUpdateMovie>({
      query: body => {
        const {id, ...rest} = body;
        return {
          url: `/updateMovie/${id}`,
          method: 'PATCH',
          body: rest,
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesByIdQuery,
  useUpdateSingleMovieMutation,
} = movieApi;
