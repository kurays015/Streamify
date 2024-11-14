import { Badge } from "./ui/badge";

export default function GenresBadge({ genres }) {
  return (
    <div className="flex flex-wrap items-center  font-semibold customSm:gap-2 lg:gap-3">
      {genres.map((genre, index) => (
        <Badge variant="secondary" key={index}>
          {genre.name ? genre.name : genre}
        </Badge>
      ))}
    </div>
  );
}
