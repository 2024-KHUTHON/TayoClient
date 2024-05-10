import React from "react";
import styles from "../styles/pointdetail.module.css";
import { useNavigate } from "react-router-dom";

function PointDetail() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/home");
  };

  const clickContact = () => {
    navigate("/contact");
  };
  return (
    <div className={styles.pointdetail}>
      <div className={styles.header}>
        <img
          src="/images/logo2.png"
          alt="logo2"
          width={60}
          height={50}
          style={{ margin: "8px 40px" }}
          onClick={clickHandler}
        />
      </div>
      <p style={{ color: "#FEFEF4", margin: "20px 0 10px", fontSize: "27px" }}>
        포인트로 환경지키기
      </p>
      <div className={styles.content} onClick={clickContact}>
        <img
          src="/images/clothes.png"
          alt="clothes"
          width={130}
          height={120}
          style={{ margin: "20px 0 5px" }}
        />
        <h2 className={styles.text}>디자이너 컨택</h2>
      </div>
      <div className={styles.content}>
        <img
          src="/images/car.png"
          alt="car"
          width={150}
          height={92}
          style={{ margin: "20px 0 0" }}
        />
        <h2 className={styles.text}>카풀</h2>
      </div>
    </div>
  );
}

export default PointDetail;
