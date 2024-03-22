import { Button } from "../ui/button";

export default function PrevButton({ currentIndex, handlePrevClick, info }) {
  return (
    <Button
      className="text-slate-300 hover:text-cyan-300"
      disabled={currentIndex === 0}
      variant="outline"
      onClick={handlePrevClick}
    >
      Previous {info.episodes ? "Episode" : "Chapter"}
    </Button>
  );
}
