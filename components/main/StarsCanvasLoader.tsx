"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/main/StarsBackground"), {
  ssr: false,
});

export default function StarsCanvasLoader() {
  return <StarsCanvas />;
}
