export default function EpisodeNumber({ number, episode }) {
  return (
    <div className="text-slate-400 text-center font-medium border border-slate-700 p-2 rounded-md hover:bg-slate-300 hover:text-slate-900 transition-all customSm:text-sm md:text-base">
      {number ? number : episode}
    </div>
  );
}
