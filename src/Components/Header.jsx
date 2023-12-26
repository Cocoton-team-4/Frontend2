import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const activeSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/find`, { state: search });
    }
  };

  return (
    <Head>
      <div className="Header-container flex">
        <div
          className="Header-logo"
          onClick={(e) => {
            navigate(`/`);
          }}
        >
          <span>RE-BORN</span>
        </div>
        <div className="Header-nav">
          <ul>
            <li>
              <Link to="/login" className="header-font">
                로그인
              </Link>
            </li>
            <li>
              <Link to="/mypage" className="header-font">
                마이페이지
              </Link>
            </li>
            <li>
              <Link to="/make" className="header-font">
                분향소 생성
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Head>
  );
}
//작성한 값이 다음 페이지로 넘어갈 수 있도록 props 넘겨서 구현해보기
const Head = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: white;
  .Header-container {
    width: 75vw;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    margin: auto;
    @media screen and (max-width: 1100px) {
      input {
        display: none;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    box-sizing: border-box;
  }
  li {
    margin: 10px 15px;
    font-size: 20px;
  }
  .Header-find {
    position: relative;
    top: 10px;
  }
  input {
    margin: 10px;
    padding: 8px;
    &:first-child {
      width: 200px;
    }
  }
  img {
    position: relative;
    top: 10px;
  }
  span {
    position: relative;
    top: 30px;
    left: 10px;
    font-size: 20px;
    font-weight: 1000;
    color: #070400;
  }
  .Header-logo {
    cursor: pointer;
  }
  .header-font {
    text-decoration-line: none;
  }
`;
