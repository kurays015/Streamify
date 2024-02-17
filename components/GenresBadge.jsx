import { Badge } from "./ui/badge";

export default function GenresBadge({ genres }) {
  return (
    <div className="flex flex-wrap items-center  font-semibold customSm:gap-2 lg:gap-3">
      {genres.map(genre => (
        <Badge variant="secondary" key={genre}>
          {genre}
        </Badge>
      ))}
    </div>
  );
}
