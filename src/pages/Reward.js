import React from "react";
import styles from "../styles/mypage.module.css";

function Reward({ data }) {
  return (
    <div className={styles.content_container}>
      {data.map((item) => (
        <div className={styles.content} key={item.createdAt}>
          <p>{item.content}</p>
          <p style={{ color: "#25855A" }}>+ {item.point}pt</p>
        </div>
      ))}
    </div>
  );
}

export default Reward;
