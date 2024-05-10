import React, { useState, useEffect } from "react";

import styles from "../styles/home.module.css";
import Footer from "../components/Footer";
import QRcode from "../components/QRcode";
import axios from "axios";

function Home() {
  const [userHash, setUserHash] = useState("");
  const [point, setPoint] = useState("");

  const token = localStorage.getItem("token");
  const handleDecodeHash = async () => {
    try {
      const endpoint = "http://moomu.iptime.org:8855/qr/issue";

      const response = await axios.post(
        endpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      setUserHash(response.data.qr_hash);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPoint = async () => {
    try {
      const atkToken = localStorage.getItem("token");
      const url = new URL("http://moomu.iptime.org:8855/point/remain");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: atkToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("데이터", data);
        setPoint(data.point);
      } else {
        console.error("데이터를 가져오지 못했습니다:", response);
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  useEffect(() => {
    getPoint();
    handleDecodeHash();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img
          src="/images/logo2.png"
          alt="arrow"
          width={60}
          height={50}
          style={{ margin: "5px 0 0" }}
        />
      </div>
      <div className={styles.background}>
        <div className={styles.point}>
          <p>적립금</p>
          <p>{point} point</p>
        </div>

        <div className={styles.qrcode_container}>
          <QRcode hash={userHash} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
