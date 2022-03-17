import "./App.scss";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, softShadows } from "@react-three/drei";
import BoxGroup from "./components/BoxGroup";
import { StoreProvider } from "./store";
import ButtonComponent from "./components/ButtonComponent";

softShadows();
function App() {
  return (
    <div className="app">
      <div className="left__div">
        <h2 className="select__pane">Selection Pane</h2>
      </div>
      <div className="right__div">
        <Canvas
          className="canvas"
          shadows
          colorManagement
          camera={{ position: [-5, 2, 10], fov: 60 }}>
          <StoreProvider>
            <Html className="content" position={[-7.3, 4.8, 0]}>
              <div className="wrapper">
                <ButtonComponent />
              </div>
            </Html>

            <ambientLight intensity={0.3} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <BoxGroup />

            <OrbitControls />
          </StoreProvider>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
