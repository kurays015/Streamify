import siteMetadata from "@/config/site-metadata";
import titleHandler from "./titleHandler";

export default function infoMetadata(info, previousImages) {
  const image = info?.image ? info?.image : info?.thumbnail;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: titleHandler(info?.title),
    description: info?.description,
    openGraph: {
      title: titleHandler(info?.title),
      description: info?.description,
      images: [image, ...previousImages],
    },
  };
}
