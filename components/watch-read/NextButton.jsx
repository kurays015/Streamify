import { Button } from "../ui/button";

export default function NextButton({
  currentIndex,
  handleNextClick,
  episodes,
}) {
  return (
    <Button
      className="text-slate-300 hover:text-cyan-300"
      disabled={currentIndex === episodes.length - 1}
      variant="outline"
      onClick={handleNextClick}
    >
      Next Episode
    </Button>
  );
}
