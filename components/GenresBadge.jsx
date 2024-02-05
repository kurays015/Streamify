import { Badge } from "./ui/badge";

export default function GenresBadge({ genres }) {
  return (
    <div className="flex items-center gap-3  font-semibold">
      {genres.map(genre => (
        <Badge variant="secondary" key={genre}>
          {genre}
        </Badge>
      ))}
    </div>
  );
}
