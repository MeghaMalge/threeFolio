import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Text, Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 5]} intensity={1.2} />

      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={1}>
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Name */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Megha Malge
      </Text>

      {/* Controls + Environment */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      <Environment preset="night" />
    </Canvas>
  );
}
