import { getPlaiceholder } from "plaiceholder";

// export async function customBase64(imageUrl) {
//   try {
//     const response = await fetch(imageUrl, {
//       cache: "no-store",
//     });
//     const contentType = response.headers.get("content-type");
//     const buffer = await response.arrayBuffer();
//     const base64String = Buffer.from(buffer).toString("base64");
//     return `data:${contentType};base64,${base64String}`;
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     return null;
//   }
// }

export default async function getImageBase64(src) {
  if (!src) {
    throw new Error("no src provided");
  }

  try {
    const res = await fetch(src, { cache: "no-store" });
    const buffer = Buffer.from(await res.arrayBuffer());

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      ...plaiceholder,
      img: { src, height, width },
    };
  } catch (error) {
    console.error("Error processing image:", error);
    return null;
  }
}
