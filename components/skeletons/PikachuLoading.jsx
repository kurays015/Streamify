import pika from "@/public/pika.gif";
import Image from "next/image";
export default function PikachuLoading() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen">
      <Image src={pika} width={80} height={80} alt="pikachu" className="w-32" />
      <h5>Loading...</h5>
    </div>
  );
}
