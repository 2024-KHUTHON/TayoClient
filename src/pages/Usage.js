import React from "react";
import styles from "../styles/mypage.module.css";

function Usage({ data }) {
  return (
    <div className={styles.content_container}>
      <div className={styles.content}>
        <p>디자이너 컨택</p>
        <p style={{ color: "#C53030" }}>- 1000 pt</p>
      </div>
      <div className={styles.content}>
        <p>카풀 이용</p>
        <p style={{ color: "#C53030" }}>- 2000 pt</p>
      </div>
    </div>
  );
}

export default Usage;
