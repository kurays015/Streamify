import Image from "next/image";

export default function ChaptersContent({ chaptersContent }) {
  return (
    <div>
      {chaptersContent?.map(content => (
        <div key={content.index} className="flex justify-center">
          <Image
            src={content.url}
            alt="content-img"
            width={800}
            height={500}
            className="w-[800px] h-auto"
          />
        </div>
      ))}
    </div>
  );
}
