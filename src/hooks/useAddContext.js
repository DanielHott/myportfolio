import React, { createContext, useState, useContext } from "react";

const AddContext = createContext();

export function AddContextProvider({ children }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isModalProjectOpen, setisModalProjectOpen] = useState(false);
  const [isModalProfileOpen, setisModalProfileOpen] = useState(false);

  return (
    <AddContext.Provider
      value={{
        isModalOpen,
        setisModalOpen,
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
    isModalOpen,
    setisModalOpen,
    isModalProfileOpen,
    setisModalProfileOpen,
    isModalProjectOpen,
    setisModalProjectOpen,
  } = context;
  return {
    isModalOpen,
    setisModalOpen,
    isModalProfileOpen,
    setisModalProfileOpen,
    isModalProjectOpen,
    setisModalProjectOpen,
  };
}
