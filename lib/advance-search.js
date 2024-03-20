const currentYear = new Date().getFullYear();

export const filters = [
  {
    title: "Year",
    options: Array.from(
      { length: currentYear - 1959 },
      (_, index) => 1960 + index
    ),
  },
  {
    title: "Genres",
    options: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mahou Shoujo",
      "Mecha",
      "Music",
      "Mystery",
      "Psychological",
      "Romance",
      "Sci-Fi",
      "Slice of Life",
      "Sports",
      "Supernatural",
      "Thriller",
    ],
  },
  { title: "Season", options: ["FALL", "SUMMER", "WINTER", "SPRING"] },
  {
    title: "Status",
    options: [
      "RELEASING",
      "NOT_YET_RELEASED",
      "FINISHED",
      "CANCELLED",
      "HIATUS",
    ],
  },
  {
    title: "Format",
    options: ["TV", "TV_SHORT", "OVA", "ONA", "MOVIE", "SPECIAL", "MUSIC"],
  },
];
