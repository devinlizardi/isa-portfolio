import { useEffect, useState } from "react";

export const useSurface = (): "mobile" | "desktop" => {
  const [surface, setSurface] = useState<"mobile" | "desktop">(
    window.innerWidth >= 1024 ? "desktop" : "mobile",
  );

  const checkResize = () => {
    setSurface(window.innerWidth >= 1024 ? "desktop" : "mobile");
  };

  useEffect(() => {
    window.addEventListener("resize", () => checkResize());
    return window.removeEventListener("resize", () => checkResize());
  }, []);

  return surface;
};
