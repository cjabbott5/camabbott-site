// components/ui/VantaBackground.tsx
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);


  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        color: 0x7dd3fc, // sky-300 hex
        backgroundColor: 0x0a0a0a, // optional: match your dark bg if needed
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute inset-0 z-0" />
  );
};

export default VantaBackground;
