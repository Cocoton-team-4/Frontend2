import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  if (!isOpen) return null;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        {/* 모달 내용을 여기에 추가 */}
        <div>
          <div className="photoUpload">
            <span className="text">사진 업로드</span>
            <input className="uploadButton" type="file" onChange={handleFileUpload} />
            
          </div>
          <div>
            <div>내용</div>
            <input type="text" />
          </div>
          <div>
            <div>날짜</div>
            <input type="date" />
          </div>
        </div>
        <span className="button" onClick={onClose}>
          X
        </span>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 배경을 어둡게 하는 효과 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 1000px;
  height: 70vh;
  background: white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 100px;

  .photoUpload {
    display: flex;
    align-items: center;
    padding-left: 100px;
    height: 100px;
  }

  .text {
    /* 아래로 20px 내림 */
  }

  .uploadButton {
    margin-left: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    position: absolute;
    left: 1230px;
    top: 170px;
  }
`;

export default Modal;
