import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Make() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    deathname: "",
    putname: "",
    relation: "",
    phone: "",
  });
  const { deathname, putname, relation, phone } = inputs;
  //=======================================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  //=====================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("분향소가 등록되었습니다");
    navigate(`/`);
  };
  return (
    <MakeDeath flex>
      <div className="checkinfo1">
        <div className="make">분향소생성</div>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <hr></hr>
        </div>
        <div>고인정보</div>
        <div className="checkinfo1">
          <div>고인명</div>
          <input
            type="text"
            value={deathname}
            name="deathname"
            onChange={onChange}
          ></input>
          <div>사진 업로드</div>
          <input type="button" value="업로드"></input>
          <div>사망확인서 업로드</div>
          <input type="button" value="업로드"></input>
        </div>
        <div className="checkinfo1">
          <div>생년월일</div>
          <input type="date"></input>
          <div>발인날짜</div>
          <input type="date"></input>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="make">등록자정보</div>
        <div className="checkinfo1">
          <div>등록자명</div>
          <input
            type="text"
            value={putname}
            name="putname"
            onChange={onChange}
          ></input>
          <div>가족관계증명서 업로드</div>
          <input type="button" value="업로드"></input>
        </div>
        <div className="checkinfo1">
          <div>고인과의 관계</div>
          <input
            type="text"
            value={relation}
            name="relation"
            onChange={onChange}
          ></input>
          <div>전화번호</div>
          <input
            type="text"
            value={phone}
            name="phone"
            onChange={onChange}
          ></input>
        </div>
        <Submit type="submit" disabled={loading} />
      </form>
    </MakeDeath>
  );
}

const MakeDeath = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  width: 70%;
  top: 100px;
  height: 100%;

  .make {
    font-size: 30px;
  }
  .checkinfo1 {
    display: flex;
    justify-content: space-between;
  }
`;
const Submit = styled.input`
  background-color: black;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
