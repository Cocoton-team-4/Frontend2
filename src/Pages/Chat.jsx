import React, { useState } from "react";
import styled from "styled-components";
import "../Chat.css";

export default function Chat() {
  const [chat, setChat] = useState("");

  const onChange = (e) => {
    setChat(e.target.value); // 입력값을 chat 상태로 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 메시지를 보내는 로직 추가

    // chat 값 초기화
    setChat("");
  };

  return (
    <div>
      <Container></Container>
      <ul class="chat-screen_texts">
        <span>코코</span>
        <li class="text">고마웠어 잘지내</li>
        <li class="text">안녕</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <Submit>
          <input
            className="chatmessage"
            type="text"
            value={chat}
            placeholder="하고싶은 말을 남겨주세요"
            onChange={onChange}
            name="chat"
          />
          <img
            style={{ width: "50px", height: "50px" }}
            src="dm.png"
            alt="로고"
          />
        </Submit>
      </form>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  top: 80px;
  width: 80%;
  height: 100%;
  left: 10%;
  background-color: #bcdeec;
`;

const Submit = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;

  .chatmessage {
    bottom: 0px;
    border: none;
    width: 77%;
    height: 50px;
    left: 100px;
  }
  .submit {
    bottom: 0px;
    border: none;
  }
`;
