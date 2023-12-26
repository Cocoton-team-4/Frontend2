import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Homepage>
      <span>발인날짜찾기</span>
      <div>
        <div>
          <form>
            <input type="submit" />
          </form>
        </div>
      </div>
    </Homepage>
  );
}
//제출하면 /find로 이동하기
const Homepage = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;

  span {
    position: relative;
    top: 30px;
    left: 100px;
    font-size: 50px;
  }
  span {
    position: relative;
    top: 100px;
  }
`;
