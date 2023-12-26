import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

export default function Create() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    recheck: "",
    email: "",
  });
  const { id, pw, recheck, email } = inputs;

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

    alert("환영합니다");
    navigate(`/`);
  };

  return (
    <LoginContainer>
      <div className="loginname">
        <div>회원가입</div>
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
          <input type="password" value={pw} onChange={onChange} name="pw" />

          <div>비밀번호 재확인</div>
          <input
            type="password"
            value={recheck}
            onChange={onChange}
            name="recheck"
          />

          <div>이메일</div>
          <input
            type="password"
            value={email}
            onChange={onChange}
            name="email"
          />
          <br></br>
          <br></br>
          <Submit type="submit" value="회원가입" disabled={loading} />
        </form>
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

        border-style: solid;
        border-radius: 10px;
        border-color: rgb(179, 176, 176);
        &:nth-child(3) {
          background-color: black;
          border-radius: 20px;
        }
      }
    }
  }
`;

const Submit = styled.input`
  background-color: #bd6ad6;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
