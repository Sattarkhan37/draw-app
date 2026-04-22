type shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };
export function initDraw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  let existingShapes: shape[] = [];
  if (!ctx) {
    return;
  }
  ctx.fillStyle = " rgba(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let clicked = false;
  let startX = 0;
  let startY = 0;
  const getMousePos = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    const pos = getMousePos(e);
    startX = pos.x;
    startY = pos.y;
  });
  canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    const pos = getMousePos(e);
    const width = pos.x - startX;
    const height = pos.y - startY;
    existingShapes.push({
      type: "rect",
      x: startX,
      y: startY,
      height,
      width,
    });
  });
  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const pos = getMousePos(e);
      const width = pos.x - startX;
      const height = pos.y - startY;
      clerCanvas(existingShapes, canvas, ctx);
      ctx.strokeStyle = "rgba(255,255,255)";
      ctx.strokeRect(startX, startY, width, height);
    }
  });
}

function clerCanvas(
  existingShapes: shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = " rgba(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShapes.map((shape) => {
    if (shape.type === "rect") {
      ctx.strokeStyle = "rgba(255,255,255)";
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
  });
}
