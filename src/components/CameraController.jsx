import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function CameraController({ section }) {
  const { camera } = useThree();

  useEffect(() => {
    const positions = {
      Home: { x: 0, y: 0, z: 5 },
      About: { x: 3, y: 0, z: 5 },
      Experience: { x: -3, y: 1, z: 5 },
      Projects: { x: 0, y: 2, z: 6 },
      Contact: { x: 0, y: -2, z: 5 },
    };

    const target = positions[section] || positions.Home;

    gsap.to(camera.position, {
      duration: 1.2,
      x: target.x,
      y: target.y,
      z: target.z,
      ease: "power2.inOut",
    });
  }, [section, camera]);

  return null;
}
