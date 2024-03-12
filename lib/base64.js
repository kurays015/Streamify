export default async function getImageBase64Async(imageUrl) {
  try {
    const response = await fetch(imageUrl, {
      cache: "no-store",
    });
    const buffer = await response.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    return `data:image/jpg;base64,${base64String}`;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
