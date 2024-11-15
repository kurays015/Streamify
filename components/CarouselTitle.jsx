export default function CarouselTitle({ index }) {
  const titleColors = [
    "text-amber-300",
    "text-teal-300",
    "text-lime-300",
    "text-sky-300",
    "text-orange-300",
    "text-violet-300",
    "text-recent",
    "text-trending",
  ];

  const titles = [
    "Popular Movies",
    // "Popular TV Series",
    "Top Rated Movies",
    "Top Rated TV Series",
    "Upcoming Movies",
    "Popular Anime",
    "Recent Anime Episodes",
    "Trending Anime",
  ];

  return (
    <h1
      className={`text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ${
        titleColors[index]
      } ${index === 0 ? "relative customSm:mt-0 lg:mt-48 " : "mt-16"}
    `}
    >
      {titles[index]}
    </h1>
  );
}
