import React, { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChaList() {
  const { chat } = useChat();

  useEffect(() => {
    console.log("chat", chat);
  }, [chat]);

  return (
    <div className="chat-list">
      <ScrollableFeed>
        {chat.map((item, i) => (
          <div
            key={i}
            className={`chat-item-container ${
              item.isFromMe === true ? "from-me" : ""
            }`}
          >
            <div className="chat-item">
              <div className="chat-bubble name">{`${
                item.isFromMe ? item.name : item.text.name
              }`}</div>
              <div className="chat-bubble">{`${
                item.isFromMe ? item.msg : item.text.msg
              }`}</div>
            </div>
          </div>
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChaList;
