import cover from "@/public/opcover.jpeg";

export default function Cover() {
  return (
    <>
      <div className="absolute h-full top-0 bottom-0 left-0 right-0 w-full bg-customTransparent2 -z-10 test"></div>
      <div
        className="absolute -top-16 bottom-0 right-0 left-0"
        style={{
          backgroundImage: `url("https://wallpapercave.com/uwp/uwp3589179.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -11,
        }}
      ></div>
    </>
  );
}
