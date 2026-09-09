import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gold Hill Luxe Tour and Travel",
    short_name: "Gold Hill Luxe",
    description:
      "Luxury Kashmir holiday packages — Srinagar, Gulmarg, Sonmarg, Pahalgam.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f5132",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
