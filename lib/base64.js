export async function customBase64(imageUrl) {
  try {
    const response = await fetch(imageUrl, {
      cache: "no-store",
    });
    const contentType = response.headers.get("content-type");
    const buffer = await response.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    return `data:${contentType};base64,${base64String}`;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
