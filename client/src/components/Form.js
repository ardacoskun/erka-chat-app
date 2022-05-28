import moment from "moment";
import React, { useEffect, useState } from "react";
import { useChat } from "../contexts/ChatContext";
import { useLanguage } from "../contexts/LanguageContext";
import { init, sendMessage, typingListen } from "../socketApi";

function Form() {
  const { setChat } = useChat();
  const { language } = useLanguage();
  const [text, setText] = useState({
    msg: "",
    date: moment().calendar(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.msg) {
      return;
    }

    setChat((prev) => [...prev, { text, isFromMe: true }]);
    console.log("text", text.date);

    sendMessage(text);
    setText(text);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="send-form">
          <input
            className="message"
            value={text.msg}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">{`${
            language === "en" ? "Send" : "Gönder"
          }`}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
