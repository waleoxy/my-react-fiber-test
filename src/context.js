import { MeshWobbleMaterial } from "@react-three/drei";

export const generate = () => {
  const meshArr = [];
  for (let index = 0; index < 500; index++) {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 90 - 45;
    const z = Math.random() * 90 - 50;
    const meshT = (
      <mesh position={[x, y, z]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <MeshWobbleMaterial
          attach="material"
          color={Math.random() * 0xffffff}
          speed={3}
          factor={2}
        />
      </mesh>
    );
    meshArr.push(meshT);
  }
  return meshArr;
};
