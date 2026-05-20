import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-cyan-400 opacity-10 blur-[120px] transition-transform duration-200"
        style={{
          transform: `translate(${position.x - 175}px, ${position.y - 175}px)`,
        }}
      />
    </div>
  );
}

export default MouseGlow;
