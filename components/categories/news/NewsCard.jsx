import Image from "next/image";

export default async function NewsCard({ thumbnail, title }) {
  return (
    <div>
      <Image src={thumbnail} alt={title} width={500} height={500} />
    </div>
  );
}
