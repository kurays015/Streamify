export default function NoContent() {
  return (
    <div className="flex flex-col items-center text-center justify-center h-[60vh]   text-slate-400 p-3">
      <p className="text-xl mb-4 customSm:text-base">
        Sorry, I can&apos;t control what&apos;s available for users.
      </p>
      <p className="text-xl mb-4 customSm:text-base">
        No content is available at the moment.
      </p>
      <p className="text-xl customSm:text-base">Please try again later.</p>
    </div>
  );
}
