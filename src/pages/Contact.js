import React from "react";
import styles from "../styles/contact.module.css";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/home");
  };
  const clickChat = () => {
    navigate("/chat");
  };
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <img
          src="/images/logo2.png"
          alt="logo2"
          width={60}
          height={50}
          style={{ margin: "33px 40px 20px" }}
          onClick={clickHandler}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.user}>
          <img
            src="/images/boy1.png"
            alt="logo"
            width={65}
            height={65}
            style={{ margin: "15px 10px" }}
          />
          <div className={styles.info}>
            <p className={styles.text}>유재석</p>
            <p className={styles.text}>경희대학교 의류디자인학과</p>
          </div>
        </div>
        <div className={styles.btn} onClick={clickChat}>
          <p>디자이너 컨택</p>
        </div>
      </div>

      <div className={styles.content} onClick={clickChat}>
        <div className={styles.user}>
          <img
            src="/images/boy2.png"
            alt="logo"
            width={65}
            height={65}
            style={{ margin: "15px 10px" }}
          />
          <div className={styles.info}>
            <p className={styles.text}>박명수</p>
            <p className={styles.text}>경희대학교 의류디자인학과</p>
          </div>
        </div>
        <div className={styles.btn}>
          <p>디자이너 컨택</p>
        </div>
      </div>
      <img
        src="/images/plus.png"
        alt="plus"
        width={80}
        height={80}
        style={{ marginLeft: "68%", marginTop: "12px" }}
      />
    </div>
  );
}

export default Contact;
