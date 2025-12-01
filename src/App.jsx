import Scene from "./components/Scene";
import Navbar from "./components/Overlay/Navbar";

export default function App() {
  return (
    <div className="relative h-screen w-screen">
      <Scene />
      <Navbar />
    </div>
  );
}
