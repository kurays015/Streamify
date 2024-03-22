import { Button } from "../ui/button";

export default function NextButton({
  currentIndex,
  handleNextClick,
  episodesOrChapters,
  info,
}) {
  return (
    <Button
      className="text-slate-300 hover:text-cyan-300"
      disabled={currentIndex === episodesOrChapters.length - 1}
      variant="outline"
      onClick={handleNextClick}
    >
      Next {info.episodes ? "Episode" : "Chapter"}
    </Button>
  );
}
