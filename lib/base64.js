import { getPlaiceholder } from "plaiceholder";

const placeholder =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

export default async function getImageBase64(imageSrc) {
  const response = await fetch(imageSrc, { cache: "no-store" });
  const buffer = Buffer.from(await response.arrayBuffer());

  try {
    const { metadata, ...plaiceholder } = await getPlaiceholder(buffer, {
      size: 10,
    });

    return {
      ...plaiceholder,
      img: { src: imageSrc, ...metadata },
    };
  } catch (error) {
    const placeholderResponse = await fetch(placeholder, {
      cache: "no-store",
    });
    const placeholderBuffer = Buffer.from(
      await placeholderResponse.arrayBuffer()
    );

    try {
      const { metadata, ...placeholderPlaiceholder } = await getPlaiceholder(
        placeholderBuffer,
        { size: 10 }
      );

      return {
        ...placeholderPlaiceholder,
        img: { src: placeholder, ...metadata },
      };
    } catch (error) {
      console.error("Error processing placeholder image:", error);
      return null;
    }
  }
}
