import React, { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import { useLanguage } from "../contexts/LanguageContext";
import { init, subscribeToMessages } from "../socketApi";
import ChaList from "./ChaList";
import Form from "./Form";

function Container() {
  const { setChat } = useChat();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("callback function");
      setChat((prev) => [...prev, { text: message }]);
    });
  }, [setChat]);

  return (
    <>
      <button onClick={() => setLanguage(language === "en" ? "tr" : "en")}>{`${
        language === "en" ? "Turkish" : "English"
      }`}</button>
      <ChaList />
      <Form />
    </>
  );
}

export default Container;
