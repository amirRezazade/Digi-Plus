import { createContext, useContext, useState } from "react";

const imgContext = createContext();

export function ImgFullScreenProvider({ children }) {
  let [images, setImages] = useState(null);
  let [index, setIndex] = useState(0);
  return (
    <imgContext.Provider
      value={{
        images,
        setImages,
        index,
        setIndex,
      }}
    >
      {children}
    </imgContext.Provider>
  );
}

export function useImgFullScreen() {
  return useContext(imgContext);
}
