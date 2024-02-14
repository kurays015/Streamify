import Image from "next/image";

export default function ChaptersContent({ chaptersContent, chapterNumber }) {
  return (
    <div>
      {chapterNumber && (
        <h1 className="text-emerald-500 text-center mb-5 font-bold text-4xl">
          Chapter {chapterNumber}
        </h1>
      )}
      {chaptersContent?.map(content => (
        <div key={content.index} className="flex justify-center">
          <Image
            src={content.url}
            alt="content-img"
            width={800}
            height={500}
            className="w-full"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
