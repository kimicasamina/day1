import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const uiContext = createContext();

export function ProvideUi({ children }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal((prev) => (prev = false));
  }

  function openModal() {
    setShowModal((prev) => (prev = true));
  }

  return (
    <uiContext.Provider
      value={{ showModal, setShowModal, closeModal, openModal }}
    >
      {children}
    </uiContext.Provider>
  );
}

export const useUi = () => {
  return useContext(uiContext);
};
