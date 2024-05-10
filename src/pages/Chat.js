// Chat.js
import styles from "../styles/chat.module.css";

import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <div className={styles.you_name}>유재석</div>
      </div>
      <div className={styles.chat_area}>
        {messages.map((message, index) => (
          <div className={styles.my_balloon_wrap}>
            <div
              key={index}
              className={styles.my_balloon}
              style={{
                backgroundColor: "#FFFF43",
                padding: "5px 8px 5px 8px",
                margin: "10px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <p style={{ margin: "0", fontWeight: "300", fontSize: "14px" }}>
                {message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles.input}
        />
        <button className={styles.btn} onClick={handleMessageSend}>
          보내기
        </button>
      </div>
    </div>
  );
};

export default Chat;
