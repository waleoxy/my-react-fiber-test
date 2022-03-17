import { createContext, useReducer } from "react";

export const store = createContext();

const initialState = {
  list: [],
  itemsCount: 0,
  listIsEmpty: true,
  listGroup: [
    
  ],
  listsCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = action.payload;
      return { ...state, list: [...state.list, item], itemsCount: item.length };
    case "SAVE_DATA":
      const data = action.payload;
      return {
        ...state,
        listGroup: [...state.listGroup, data],
        listsCount: data.length,
      };
    case "LOAD_DATA":
      return {};
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{props.children}</store.Provider>;
};
