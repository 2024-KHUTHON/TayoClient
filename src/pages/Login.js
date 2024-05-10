import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";

function Login() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [idMsg, setIDMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const cookies = new Cookies();

  const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!id || !password) {
        alert("아이디와 비밀번호를 입력하세요.");
        return;
      }
      const endpoint = "http://moomu.iptime.org:8855/users/login";
      const requestBody = {
        user_id: id,
        password: password,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("token", response.data);
        alert("로그인했습니다.");

        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      alert("ID 또는 비밀번호가 틀립니다.");
    }
  };

  const onIDHandler = (e) => {
    const currID = e.target.value;
    setID(currID);

    console.log(id);
    console.log(password);
    if (!currID) {
      setIDMsg("올바른 아이디를 입력해주세요.");
    } else {
      setIDMsg("");
    }
  };

  const onPasswordHandler = (e) => {
    const currpwd = e.target.value;
    setPassword(currpwd);

    console.log(id);
    console.log(password);
    if (!currpwd) {
      setPasswordMsg("올바른 비밀번호를 입력해 주세요.");
    } else {
      setPasswordMsg("");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <img
          src="/images/logo2.png"
          alt="arrow"
          width={60}
          height={50}
          style={{ margin: "20px 20px 0" }}
        />
      </div>

      <div className={styles.login_content}>
        <h4 className={styles.login_title}>
          아이디와 비밀번호를 입력해 주세요
        </h4>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <label className={styles.login_label}>아이디</label>
          <input
            type="text"
            className={styles.id}
            placeholder="아이디"
            onChange={onIDHandler}
          />
          <p className={styles.login_text}>{idMsg}</p>
          <label className={styles.login_label}>비밀번호</label>
          <input
            type="password"
            className={styles.password}
            placeholder="비밀번호"
            onChange={onPasswordHandler}
          />
          <p className={styles.login_text}>{passwordMsg}</p>
          <button
            className={styles.login_btn}
            type="submit"
            onClick={handleLogin}
            style={{ backgroundColor: id && password ? "#22543D" : "#cccccc" }}
          >
            확인
          </button>
        </form>
        <p className={styles.login_title}>
          아직 계정이 없으시다면?{" "}
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "gray",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
