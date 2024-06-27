// @ts-nocheck

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "./client";

const ImageUrl = ({ image, className }: any) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      {...imageProps}
      style={{ width: "100%", height: "auto" }}
      decoding="async"
      loading="lazy"
      sizes="(max-width: 800px) 100vw, 800px"
      className={className}
      alt={image?.alt}
    />
  );
};

export default ImageUrl;
