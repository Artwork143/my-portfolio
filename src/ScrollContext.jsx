
import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [targetId, setTargetId] = useState(null);

  return (
    <ScrollContext.Provider value={{ targetId, setTargetId }}>
      {children}
    </ScrollContext.Provider>
  );
};
