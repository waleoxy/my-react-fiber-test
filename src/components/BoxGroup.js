import { useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { generate } from "../context";
import Box from "../components/Box";
import { store } from "../store";

const BoxGroup = () => {
  const arr = generate();
  console.log("arr", arr);

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

  const mesh = useRef();
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return arr.map((item) => {
    return (
      <mesh
        ref={mesh}
        onClick={() => setListItem(mesh)}
        position={item.props.position}>
        {item.props.children}
      </mesh>
    );
  });
};

export default BoxGroup;
