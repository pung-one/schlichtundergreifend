import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export function useImageCountLoop(images: StaticImageData[], interval: number) {
  const [imageCount, setImageCount] = useState<number>(0);

  useEffect(() => {
    function imageLoop() {
      setImageCount((prevCount) =>
        prevCount < images.length - 1 ? prevCount + 1 : 0
      );
    }

    const intervalId = setInterval(imageLoop, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return imageCount;
}
