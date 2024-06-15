// @ts-nocheck

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "./client";

const ImageUrl = ({ image }: any) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      {...imageProps}
      style={{ width: "100%", height: "auto" }}
      sizes="(max-width: 800px) 100vw, 800px"
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
    />
  );
};

export default ImageUrl;
