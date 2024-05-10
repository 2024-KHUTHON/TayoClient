import React from "react";
import styles from "../styles/footer.module.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  const clickHome = () => {
    navigate("/home");
  };

  const clickPointDetail = () => {
    navigate("/point");
  };

  const clickMyPage = () => {
    navigate("/mypage");
  };

  return (
    <div className={styles.footer}>
      <div className={styles.category} onClick={clickPointDetail}>
        <img
          src="/images/point.png"
          alt="point"
          width={36}
          height={36}
          style={{ margin: "5px 0 0" }}
        />
        <p>포인트 사용처</p>
      </div>

      <div className={styles.category} onClick={clickHome}>
        <div
          className={styles.category_home}
          style={{ backgroundColor: "#3E5835" }}
        >
          <img
            src="/images/home.png"
            alt="arrow"
            width={36}
            height={36}
            style={{ margin: "5px 0 0" }}
          />
          <p style={{ color: "#FDFEF2" }}>홈</p>
        </div>
      </div>

      <div className={styles.category} onClick={clickMyPage}>
        <img
          src="/images/user.png"
          alt="point"
          width={36}
          height={36}
          style={{ margin: "5px 0 0" }}
        />
        <p>마이 페이지</p>
      </div>
    </div>
  );
}

export default Footer;
