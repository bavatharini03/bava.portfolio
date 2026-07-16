import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x - 120,
        top: position.y - 120,
      }}
    >
      <div className="w-60 h-60 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
    </div>
  );
}

export default CursorGlow;