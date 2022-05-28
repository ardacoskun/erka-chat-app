import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([]);

  const values = {
    chat,
    setChat,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat hook must be call inside ChatcontextProvider");
  }

  return context;
};
