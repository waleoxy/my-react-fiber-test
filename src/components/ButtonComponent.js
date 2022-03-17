import React, { useContext, useEffect, useState } from "react";
import { store } from "../store";
import "./ButtonComponent.scss";

const ButtonComponent = () => {
  const { state, dispatch } = useContext(store);
  const [listItem, setListItem] = useState(null);
  const { list } = state;
  useEffect(() => {
    if (listItem !== null) {
      const handleSave = () => {
        dispatch({ type: "SAVE_DATA", payload: listItem });
      };
      handleSave();
    }
  }, [dispatch, listItem]);

  const handleLoad = () => {};
  //console.log("lg", listGroup);
  return (
    <div className="btn__wrapper">
      <button className="btn" onClick={() => setListItem(list)}>
        Save
      </button>
      <button className="btn" onClick={handleLoad}>
        Load
      </button>
    </div>
  );
};

export default ButtonComponent;
