"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type AutoPlayVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "autoPlay" | "children" | "muted" | "playsInline" | "src"
> & {
  src: string;
  type?: string;
};

export function AutoPlayVideo({
  src,
  type = "video/mp4",
  preload = "auto",
  ...props
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Safari can still block autoplay in low-power or strict settings.
          // In that case, the video remains available without breaking layout.
        });
      }
    };

    playVideo();
    video.addEventListener("canplay", playVideo);
    video.addEventListener("loadeddata", playVideo);
    document.addEventListener("visibilitychange", playVideo);

    return () => {
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, [src]);

  return (
    <video
      {...props}
      ref={videoRef}
      autoPlay
      controls={false}
      disablePictureInPicture
      loop
      muted
      playsInline
      preload={preload}
    >
      <source src={src} type={type} />
    </video>
  );
}
