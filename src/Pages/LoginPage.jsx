import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //========onchange==================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  //========onsubmit==================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://43.201.164.245:8000/signin", {
        id,
        password,
      })

      .then((response) => {
        //loading 1.5초 이후 없애기
        alert("환영합니다");
        navigate(`/`);

        console.log(response);
      })
      .catch((error) => {
        const code = error.response.status;
        console.log(code);

        if (code === 400) {
          alert("등록되지 않은 회원이거나 비밀번호가 잘못되었음");
          return;
        }
        if (code === 401) {
          alert("이미 로그인 중인 상태입니다.");
          return;
        }
        if (code === 500) {
          alert("네트워크 오류");
          return;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LoginContainer>
      <div className="loginname">
        <div>로그인</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>아이디</div>
          <input
            type="text"
            value={id}
            onChange={onChange}
            name="id"
            //e.target.value는 input값
          />
          <br />
          <div>비밀번호</div>
          <input
            type="text"
            value={password}
            onChange={onChange}
            name="password"
          />
          <br />
          <br />
          <br />
          <Submit type="submit" value="로그인" disabled={loading} />
        </form>
        <br></br>
        <Submit
          type="submit"
          value="회원가입"
          onClick={(e) => {
            navigate(`/create`);
          }}
        />
      </div>
    </LoginContainer>
  );
}

//======================css==============================

const LoginContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 30%;
  width: 500px;
  align-items: center;
  .loginname {
    display: flex;
    justify-content: center;
  }
  div {
    position: relative;

    &:first-child {
      font-size: 30px;
    }
    &:nth-child(2) {
      margin: 20px;
      div {
        font-size: 15px;
        text-align: left;
        margin: 5px 0px;
        font-weight: bold;
      }
      input {
        width: 100%;
        height: 40px;

        border-style: none;
        border-radius: 20px;
        background-color: rgb(217, 213, 213);
        &:nth-child(9) {
          background-color: #bd6ad6;
          border-radius: 10px;
          color: black;
        }
        &:nth-child(3) {
          color: black;
          background-color: white;
          border: 2px solid #bd6ad6;
          border-radius: 10px;
        }
      }
    }
  }
`;

const Submit = styled.input`
  background-color: black;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
