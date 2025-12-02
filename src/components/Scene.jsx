import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment, Sphere, Torus, Box } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Particles from "./Particles";

export default function Scene({ section }) {
  const [lightColor, setLightColor] = useState("#00ffff");

  useEffect(() => {
    const colors = {
      Home: "#00ffff",
      About: "#ffb6c1",
      Experience: "#ffd700",
      Projects: "#7fff00",
      Contact: "#ffa500",
    };

    gsap.to({}, {
      duration: 1,
      onUpdate: () => setLightColor(colors[section] || "#00ffff"),
    });
  }, [section]);

  const renderObject = () => {
    switch (section) {
      case "Home":
        return (
          <Float speed={2} rotationIntensity={1}>
            <Sphere args={[1, 64, 64]}>
              <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.3} />
            </Sphere>
          </Float>
        );
      case "About":
        return (
          <Float speed={2} rotationIntensity={0.8}>
            <Torus args={[1, 0.3, 64, 128]}>
              <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.2} />
            </Torus>
          </Float>
        );
      case "Experience":
        return (
          <Float speed={1.5} rotationIntensity={0.6}>
            <Box args={[1.5, 1.5, 1.5]}>
              <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.2} />
            </Box>
          </Float>
        );
      case "Projects":
        return (
          <Float speed={2} rotationIntensity={1.5}>
            <Torus args={[1, 0.2, 32, 128]}>
              <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.25} />
            </Torus>
          </Float>
        );
      case "Contact":
        return (
          <Float speed={2.5} rotationIntensity={0.5}>
            <Sphere args={[0.8, 32, 32]}>
              <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.4} wireframe />
            </Sphere>
          </Float>
        );
      default:
        return null;
    }
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Background Particles */}
      <Particles color={lightColor} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 5]} intensity={1.2} color={lightColor} />

      {/* Main Object */}
      {renderObject()}

      {/* Text */}
      <Text position={[0, -2.5, 0]} fontSize={0.45} color="white" anchorX="center" anchorY="middle">
        Megha Malge
      </Text>

      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="night" />
    </Canvas>
  );
}
