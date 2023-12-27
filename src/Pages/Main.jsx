import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Modal from "./Modal";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Mains>
      <div className="container">
        <div className="photo">
          <img src="/person.jpg" style={{ maxWidth: "100%", height: "100%" }} />
        </div>
        <div className="grid">
          <div>
            <span>이름</span>
            <div className="info" style={{ marginTop: "26px" }}>
              {state.name}
            </div>
          </div>
          <div>
            <span>스페이스 생성자</span>
            <div className="info" style={{ marginTop: "26px" }}>
              {state.creator}
            </div>
          </div>
          <div>
            <span>발인날짜</span>
            <div className="info" style={{ marginTop: "26px" }}>
              {state.deathDate}
            </div>
          </div>
          <div style={{ gridRow: 2, gridColumn: "1 / span 3" }}>
            <div className="info">삼가 고인의 명복을 빕니다</div>
          </div>
        </div>
      </div>
      <div className="button">
        <div className="visit" onClick={() => navigate("/chat")}>
          방명록
        </div>
        <div className="upload" onClick={openModal}>
          추억 업로드
        </div>
      </div>
      <div className="photos">
        <div className="photoBlock">
          <img src="/puppy.jpg" style={{ maxWidth: "100%", height: "100%" }} />
        </div>
        <div className="photoBlock">
          <img src="/family.jpg" style={{ maxWidth: "100%", height: "100%" }} />
        </div>
        <div className="photoBlock">
          <img src="/photo3.jpg" style={{ maxWidth: "100%", height: "100%" }} />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Mains>
  );
}

const Mains = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  left: 100px;

  span {
    font-size: 18px;
  }
  .photoBlock {
    margin-right: 50px;
    width: 410px;
    height: 350px;
    background-color: grey;
    transition: transform 0.3s ease-in-out; // Add a transition for smooth scaling

    &:hover {
      transform: scale(1.1); // Scale to 110% on hover
    }
  }
  .container {
    position: relative;
    display: flex;
    gap: 10px; /* 사진과 그리드 아이템 간 간격 조절 */
  }

  .photo {
    width: 250px;
    height: 250px;
    background-color: #ccc;
  }

  .grid {
    display: grid;
    width: 1000px;
    height: 200px;
    grid-template-columns: auto auto auto;
    gap: 10px; /* 셀 간 간격 조절 */
    margin-left: 70px;
  }

  .info {
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 50px;
    width: 100%;
    height: 50px;
    background-color: #ddd;
  }

  .button {
    position: absolute;
    top: 200px;
    left: 500px;
    display: flex;
    gap: 10px;
  }

  .visit,
  .upload {
    flex: 1;
    width: 250px;
    height: 40px;
    background-color: #aaa;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 40px;
    margin-right: 150px;
    background-color: #fb8a8a;
    border-radius: 5px;
  }

  .photos {
    display: flex;
    margin-top: 100px;
    margin-left: 120px;
  }
  .photoBlock {
    width: 350px;
    height: 250px;
    background-color: grey;
  }
`;
