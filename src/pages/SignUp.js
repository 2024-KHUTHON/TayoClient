import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/signup.module.css";
import axios from "axios";

function SignUp() {
  const [id, setID] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [idMsg, setIDMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const navigate = useNavigate("/login");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onIDHandler = (e) => {
    const currID = e.target.value;
    setID(currID);

    if (!currID) {
      setIDMsg("아이디를 입력해주세요");
    } else {
      setIDMsg("");
    }
  };

  const onNicknameHandler = (e) => {
    const currnickname = e.target.value;
    setNickname(currnickname);

    if (!currnickname) {
      setNicknameMsg("닉네임을 입력해주세요");
    } else {
      setNicknameMsg("");
    }
  };

  const onPasswordHandler = (e) => {
    const currpwd = e.target.value;
    setPassword(currpwd);

    if (!currpwd) {
      setPwdMsg("비밀번호를 입력해주세요");
    } else {
      setPwdMsg("");
    }
  };

  const onConfirmPasswordHandler = (e) => {
    const currconfirmpwd = e.target.value;
    setconfirmPassword(currconfirmpwd);
    console.log("비밀번호", password);
    console.log("확인", confirmPassword);

    if (password !== currconfirmpwd) {
      setPasswordMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordMsg("");
    }
  };

  const handleSignUp = async () => {
    try {
      const endpoint = "http://moomu.iptime.org:8855/users/signUp";
      const requestBody = {
        user_id: id,
        password: password,
        nickname: nickname,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("회원가입했습니다.");
      navigate("/login");

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("다시 작성해 주세요.");
    }
  };

  return (
    <div className={styles.signup}>
      <h2>회원가입</h2>
      <div className={styles.signup_container}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <label className={styles.signup_label}>아이디</label>
          <div className={styles.container}>
            <input
              type="text"
              className={styles.id}
              placeholder="아이디"
              onChange={onIDHandler}
            />
          </div>
          <p className={styles.signup_text}>{idMsg}</p>

          <label className={styles.signup_label}>닉네임</label>
          <div className={styles.container}>
            <input
              type="text"
              className={styles.nickname}
              placeholder="닉네임"
              onChange={onNicknameHandler}
            />
          </div>
          <p className={styles.signup_text}>{nicknameMsg}</p>

          <label className={styles.signup_label}>비밀번호</label>
          <input
            type="password"
            className={styles.password}
            placeholder="비밀번호"
            onChange={onPasswordHandler}
          />
          <p className={styles.signup_text}>{pwdMsg}</p>

          <label className={styles.signup_label}>비밀번호 확인</label>
          <input
            type="password"
            className={styles.password}
            placeholder="비밀번호 확인"
            onChange={onConfirmPasswordHandler}
          />
          <p className={styles.signup_text}>{passwordMsg}</p>
        </form>

        <button
          className={styles.signup_btn}
          type="submit"
          onClick={handleSignUp}
          style={{
            backgroundColor:
              id && password && nickname && confirmPassword
                ? "#171923"
                : "#cccccc",
            color: "white",
            border: "none",
            margin: "20px 0 0",
            fontWeight: "bold",
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUp;
