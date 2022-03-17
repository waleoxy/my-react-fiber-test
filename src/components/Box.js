import { useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { store } from "../store";

const Box = ({ position, args, color, speed, factor, name }) => {
  const mesh = useRef(null);
  //const [expand, setExpand] = useState(false);
  //   const props = useSpring({
  //     scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  //   });

  const { state, dispatch } = useContext(store);
  const [listItem, setListItem] = useState(null);

  useEffect(() => {
    if (listItem !== null) {
      const handleSelection = () => {
        dispatch({ type: "ADD_ITEM", payload: listItem });
      };
      handleSelection();
      setListItem(null);
    }
  }, [listItem, dispatch]);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <animated.mesh
      name={name}
      onClick={() => setListItem(mesh)}
      castShadow
      position={position}
      ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={`${color}`}
        speed={`${speed}`}
        factor={`${factor}`}
      />
    </animated.mesh>
  );
};

export default Box;
