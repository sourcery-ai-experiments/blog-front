import type { ImageLoaderProps } from "next/image";

const r2ImageLoader = ({ src }: ImageLoaderProps) => {
  return `https://pub-19e3a11fe93a456fb4f5d69563e15cbf.r2.dev/${src}`;
};

export default r2ImageLoader;
