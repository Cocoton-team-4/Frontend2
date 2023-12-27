import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Make() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthDate, setBirth] = useState("");
  const [deathDate, setDeath] = useState("");
  const [phoneNumber, setPhonenum] = useState("");
  const [creater, setCreater] = useState("");
  const [relationship, setRelations] = useState("");
  const [postPeriod, setPost] = useState("");

  const [file, setFile] = useState(null);
  const [profileImageId, setFileId] = useState(null);

  const [inputs, setInputs] = useState({
    deathname: "",
    putname: "",
    relation: "",
    phone: "",
  });
  const { putname, relation, phone } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/v1/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const result = response.data;
        console.log("파일 ID:", result.file_id);
        setFileId(result.file_id);
      } else {
        console.error("파일 업로드 실패");
      }
    } catch (error) {
      console.error("파일 업로드 중 오류 발생:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleUpload();

      const data = {
        name,
        phoneNumber,
        creator: creater,
        birthDate,
        deathDate,
        postPeriod: "month",
        relationship,
        profileImageId,
      };

      try {
        const response = await axios.post(
          "/reborner",
          JSON.stringify(data), // 데이터를 JSON 문자열로 변환
          {
            headers: {
              "Content-Type": "application/json", // JSON 데이터를 보낼 때 Content-Type을 application/json으로 설정
            },
          }
        );

        if (response.status === 200) {
          alert("분향소가 등록되었습니다");
          navigate(`/`);
        } else {
          console.error("데이터 제출 실패");
        }
      } catch (error) {
        console.log("fail", error);
      }
    } catch (error) {
      console.error("데이터 제출 중 오류 발생:", error);
    }
  };

  return (
    <MakeDeath>
      <div className="middle">
        <div className="make1">분향소생성</div>
      </div>

      <br />
      <form onSubmit={handleSubmit}>
        <div className="checkinfo1">
          <div>고인명</div>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <div>사진 업로드</div>
          <input type="file" onChange={handleFileChange} />
          <input type="button" value="업로드" onClick={handleUpload} />
          <div>사망확인서 업로드</div>
          <input type="button" value="업로드" />
        </div>

        <div className="checkinfo1">
          <div>생년월일</div>
          <input type="date" onChange={(e) => setBirth(e.target.value)} />
          <div>발인날짜</div>
          <input type="date" onChange={(e) => setDeath(e.target.value)} />
        </div>

        <div className="checkinfo1">
          <div>등록자명</div>
          <input type="text" onChange={(e) => setCreater(e.target.value)} />
          <div>가족관계증명서 업로드</div>
          <input type="button" value="업로드" />
        </div>

        <div className="checkinfo1">
          <div>고인과의 관계</div>
          <input type="text" onChange={(e) => setRelations(e.target.value)} />
          <div>전화번호</div>
          <input type="text" onChange={(e) => setPhonenum(e.target.value)} />
        </div>

        <div className="checkinfo1">
          <div>온라인 분향소 개방 기간</div>
          <div
            className="radio-group"
            onChange={(e) => setPost(e.target.value)}
          >
            <label>
              <input type="radio" name="option" value="week" />
              7일
            </label>
            <label>
              <input type="radio" name="option" value="month" />한 달
            </label>
            <label>
              <input type="radio" name="option" value="year" />
              1년
            </label>
            <label>
              <input type="radio" name="option" value="indefinite" />
              무기한
            </label>
          </div>
        </div>

        <div className="middle">
          <Submit type="submit" />
        </div>
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
  padding-bottom: 150px;

  .make1 {
    font-size: 30px;
  }
  .make {
    font-size: 20px;
  }
  .middle {
    margin-top: 50px;
  }
  .checkinfo1 {
    display: flex;
    margin-left: 30px;
  }
  .checkinfo1 > div {
    margin-right: 60px; /* 입력 필드 간의 수평 간격을 조절합니다. */
  }
  .checkinfo1 > input {
    margin-right: 100px; /* 입력 필드 간의 수평 간격을 조절합니다. */
  }
  .middle {
    display: flex;
    justify-content: center;
  }
  .radio-group input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    outline: none;
    border-radius: 0; /* 네모 모양의 라디오 버튼을 위해 border-radius를 0으로 설정합니다. */
  }

  /* 선택된 라디오 버튼의 스타일 */
  .radio-group input[type="radio"]:checked {
    background-color: #bd6ad6; /* 선택된 상태의 배경색을 변경합니다. */
    border-color: #bd6ad6; /* 선택된 상태의 테두리 색상도 변경할 수 있어요. */
  }
  /* 라디오 버튼 스타일링 */
  .radio-group label {
    display: inline-block; /* 각 라디오 버튼을 한 줄에 나란히 표시합니다. */
    margin-right: 20px; /* 각 라디오 버튼 사이의 가로 간격을 조절합니다. */
  }

  /* 라디오 버튼 스타일 */
  .radio-group input[type="radio"] {
    /* 기존의 스타일 유지 */
    /* ... */
  }
`;
const Submit = styled.input`
  background-color: #bd6ad6;
  border-radius: 10px;
  border: 0;
  width: 200px;
  height: 30px;
  color: white;
  cursor: pointer;
`;
