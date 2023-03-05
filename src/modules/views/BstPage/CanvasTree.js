import { useEffect, useRef } from 'react';

const CanvasTree = ({ listNode }) => {
  const canvasRef = useRef(null);

  const bfs = (ctx, listNode) => {
    const queue = [];
    const black = '#000';
    const white = '#fff';
    const radius = 20;
    queue.push(listNode);
    while (queue.length !== 0) {
      const node = queue.shift();
      if (node) {
        const { x, y } = node.position;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = black;
        ctx.fillStyle = white;
        ctx.fill();
        ctx.stroke();
        ctx.strokeText(node.value, x, y);
        node.children.forEach((child) => {
          const { x: x1, y: y1 } = child.position;
          ctx.beginPath();
          ctx.moveTo(x, y + radius);
          ctx.lineTo(x1, y1 - radius);
          ctx.stroke();
          queue.push(child);
        });
      }
    }
  };

  const handleRestCanvas = (ctx) => {
    ctx.clearRect(0, 0, 1900, 50000);
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    handleRestCanvas(ctx);
    bfs(ctx, listNode[0]);
  }, [canvasRef.current, listNode]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        width="1900"
        height="50000"
        style={{ border: '1px solid #FFF' }}
      />
    </>
  );
};

export default CanvasTree;
