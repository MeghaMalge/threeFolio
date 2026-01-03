import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Particles from "./Particles";
import CameraController from "../camera/CameraController";
import ProjectsScene from "./ProjectsScene";
import HomeScene from "./HomeScene";

export default function Scene({ section }) {
  const [lightColor, setLightColor] = useState("#00ffff");

  useEffect(() => {
    const colors = {
      Home: "#00ffff",
      Experience: "#ffd700",
      Projects: "#ffb6c1",
    };

    gsap.to(
      {},
      {
        duration: 1,
        onUpdate: () => setLightColor(colors[section] || "#00ffff"),
      }
    );
  }, [section]);

  const renderObject = () => {
    switch (section) {
      case "Home":
        return <HomeScene />;
      case "Projects":
        return <ProjectsScene />;
      default:
        return null;
    }
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <CameraController section={section} />

      <Particles />

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <pointLight position={[-2, -2, -2]} intensity={0.6} color={lightColor} />

      {/* Main Object */}
      {renderObject()}

      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="night" />
    </Canvas>
  );
}
