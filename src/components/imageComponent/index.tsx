import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return (
    <NextImage src={src} alt={alt} width={width} height={height} {...rest} />
  );
};

export default ImageComponent;
