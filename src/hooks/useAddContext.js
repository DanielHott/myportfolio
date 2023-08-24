import React, { createContext, useState, useContext } from "react";

const AddContext = createContext();

export function AddContextProvider({ children }) {
  const [isEnglish, setisEnglish] = useState(false);
  const [isModalProjectOpen, setisModalProjectOpen] = useState(false);
  const [isModalProfileOpen, setisModalProfileOpen] = useState(false);

  return (
    <AddContext.Provider
      value={{
        isEnglish,
        setisEnglish,
        isModalProjectOpen,
        setisModalProjectOpen,
        isModalProfileOpen,
        setisModalProfileOpen,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

export function useAddContext() {
  const context = useContext(AddContext);
  const {
    isEnglish,
    setisEnglish,
    isModalProfileOpen,
    setisModalProfileOpen,
    isModalProjectOpen,
    setisModalProjectOpen,
  } = context;
  return {
    isEnglish,
    setisEnglish,
    isModalProfileOpen,
    setisModalProfileOpen,
    isModalProjectOpen,
    setisModalProjectOpen,
  };
}
