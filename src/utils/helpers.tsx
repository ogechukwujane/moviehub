export const groupMoviesByCategory = (
  movies: IMovie[],
): Record<string, IMovie[]> => {
  return movies.reduce((acc, movie) => {
    if (!acc[movie.category]) {
      acc[movie.category] = [];
    }
    acc[movie.category].push(movie);
    return acc;
  }, {} as Record<string, IMovie[]>);
};

const categoryColors: Record<string, string[]> = {
  action: ['#FF5733', '#C70039'],
  comedy: ['#FFC300', '#FF5733'],
  drama: ['#DAF7A6', '#FFC300'],
  horror: ['#581845', '#900C3F'],
  romance: ['#FF69B4', '#FF1493'],
  adventure: ['#008080', '#20B2AA'],
};

export const getCategoryColors = (category: string) => {
  return categoryColors[category] || [
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  ];
};
