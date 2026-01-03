import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { cameraPositions } from "./CameraPositions";

export default function CameraController({ section }) {
  const { camera } = useThree();

  useEffect(() => {
    const config = cameraPositions[section];
    if (!config) return;

    gsap.to(camera.position, {
      x: config.position[0],
      y: config.position[1],
      z: config.position[2],
      duration: 1.4,
      ease: "power3.inOut",
      onUpdate: () => {
        camera.lookAt(config.lookAt[0], config.lookAt[1], config.lookAt[2]);
      },
    });
  }, [section, camera]);

  return null;
}
