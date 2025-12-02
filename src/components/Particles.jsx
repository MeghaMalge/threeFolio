import { useMemo, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Particles({ color = "#00ffff" }) {
  const pointsRef = useRef();
  const count = 1000; // Number of particles
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}
