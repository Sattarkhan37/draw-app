import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export function Canvas({
  roomId,
  socket,
}: {
  socket: WebSocket;
  roomId: string;
}) {
  const canvasref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasref.current) {
      initDraw(canvasref.current, roomId, socket);
    }
  }, [canvasref]);
  return (
    <div>
      <canvas ref={canvasref} width={1600} height={660}></canvas>
      <div className="absolute buttom-0 right-0">
        <div className="flex gap-3 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl w-fit shadow">
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 shadow hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
            ⬛ Rectangle
          </button>
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 shadow hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
            ⚪ Circle
          </button>
        </div>
      </div>
    </div>
  );
}
