"use client";
import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasref.current) {
      initDraw(canvasref.current);
    }
  }, [canvasref]);
  return (
    <div>
      <canvas ref={canvasref} width={5000} height={4000}></canvas>
    </div>
  );
}
