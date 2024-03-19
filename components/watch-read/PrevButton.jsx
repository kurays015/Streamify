import { Button } from "../ui/button";

export default function PrevButton({ currentIndex, handlePrevClick }) {
  return (
    <Button
      className="text-slate-300 hover:text-cyan-300"
      disabled={currentIndex === 0}
      variant="outline"
      onClick={handlePrevClick}
    >
      Previous Episode
    </Button>
  );
}
