import React from "react";
import { useEffect, useState } from "react";
import Reward from "./Reward";
import Usage from "./Usage";
import styles from "../styles/mypage.module.css";

import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();

  const [content, setContent] = useState("reward");
  const [rank, setRank] = useState("");
  const [nickname, setNickname] = useState("");
  const [info, setInfo] = useState([]);
  const [point, setPoint] = useState("");

  const [exp, setExp] = useState("");
  const [profile, setProfile] = useState([]);

  const handleClickButton = (value) => {
    setContent(value);
  };

  const selectComponent = {
    reward: <Reward data={info} />,
    usage: <Usage />,
  };

  const clickHandler = () => {
    navigate("/home");
  };

  useEffect(() => {
    getMyProfile();
    getPoint();
    getPointInfo();
    getConsume();
  }, []);

  const getMyProfile = async () => {
    try {
      const atkToken = localStorage.getItem("token");
      const url = new URL("http://moomu.iptime.org:8855/profile");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: atkToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data.result);
        setRank(data.rank);
        setNickname(data.nickname);
        setExp(data.exp);
        console.log("data", data);
      } else {
        console.error("데이터를 가져오지 못했습니다:", response);
      }
    } catch (error) {
      console.error("에러", error);
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

  const getPointInfo = async () => {
    try {
      const atkToken = localStorage.getItem("token");
      const url = new URL("http://moomu.iptime.org:8855/point/history/get");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: atkToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("포인트 데이터", data);
        console.log("포인트 데이터", data.get_history);
        setInfo(data.get_history);
        //setInfoPoint(data.point);
      } else {
        console.error("데이터를 가져오지 못했습니다:", response);
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  const getConsume = async () => {
    try {
      const atkToken = localStorage.getItem("token");
      const url = new URL("http://moomu.iptime.org:8855/point/history/consume");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: atkToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("소비 데이터", data);
        //setInfo(data.i);
        //setInfoPoint(data.point);
      } else {
        console.error("데이터를 가져오지 못했습니다:", response);
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  return (
    <div className={styles.pointdetail}>
      <div className={styles.header}>
        <img
          src="/images/back.png"
          alt="arrow"
          width={28}
          height={28}
          onClick={clickHandler}
        />
        <p>나의 포인트</p>
      </div>
      <div className={styles.background}>
        <div className={styles.image}>
          <img
            src="/images/profile.png"
            alt="profile"
            width={130}
            height={130}
          />
        </div>
        <div className={styles.info}>
          <p>{nickname} 님</p>
        </div>
        <div className={styles.info_exp}>
          <p>내 등급</p>
          <ProgressBar bgcolor="green" completed={70} />
          <div className={styles.info_text}>
            <p>Lv. 2</p> <p style={{ marginLeft: "8px" }}>{rank}</p>
          </div>
        </div>
      </div>
      <div className={styles.content_background}>
        <div className={styles.rowContainer}>
          <div
            className={`${styles.selectContainer} ${
              content === "reward" ? "" : styles.disabled
            }`}
            onClick={() => handleClickButton("reward")}
            style={{ marginRight: "4%" }}
          >
            <p>적립내역</p>
          </div>
          <div
            className={`${styles.selectContainer} ${
              content === "usage" ? "" : styles.disabled
            }`}
            onClick={() => handleClickButton("usage")}
          >
            <p>사용내역</p>
          </div>
        </div>
        {content && selectComponent[content]}
      </div>
    </div>
  );
}

export default MyPage;
