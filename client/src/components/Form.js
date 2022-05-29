import moment from "moment";
import React, { useEffect, useState } from "react";
import { useChat } from "../contexts/ChatContext";
import { useLanguage } from "../contexts/LanguageContext";
import { init, sendMessage, typingListen } from "../socketApi";

function Form() {
  const { setChat, chat } = useChat();
  const { language } = useLanguage();
  const [text, setText] = useState({
    name: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.msg || !text.name) {
      alert("Please write something");
      return;
    }

    setChat((prev) => [...prev, { ...text, isFromMe: true }]);

    sendMessage(text);
    setText(text);
  };

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="send-form">
          <input
            className="message"
            value={text.name}
            name="name"
            placeholder={`${language === "en" ? "Name" : "İsim"}`}
            onChange={handleChange}
          />

          <input
            className="message"
            value={text.msg}
            onChange={handleChange}
            name="msg"
            placeholder={`${language === "en" ? "Message" : "Mesaj..."}`}
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
