import { Float, Sphere } from "@react-three/drei";

export default function HomeScene() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  );
}
