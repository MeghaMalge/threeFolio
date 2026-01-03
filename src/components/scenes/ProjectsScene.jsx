import { Float, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ProjectsScene() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });

  const panels = [0, 1, 2];

  return (
    <group ref={groupRef}>
      {panels.map((_, index) => {
        const angle = (index / panels.length) * Math.PI * 2;
        const radius = 2.8;

        return (
          <Float key={index} speed={1} floatIntensity={0.4}>
            <Plane
              args={[1.8, 1.2]}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
              rotation={[0, -angle, 0]}
            >
              <meshStandardMaterial
                color="#7fff00"
                emissive="#7fff00"
                emissiveIntensity={0.15}
                roughness={0.3}
                metalness={0.5}
                transparent
                opacity={0.9}
              />
            </Plane>
          </Float>
        );
      })}
    </group>
  );
}
