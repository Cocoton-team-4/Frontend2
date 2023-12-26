import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homes({ response }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={(e) => {
          navigate(`/main`);
        }}
        style={{ backgroundColor: "white", marginBottom: "20px" }}
      >
        <p>이름: {response.name}</p>
        <p>생년월일: {response.birthDate}</p>
        <p>발인날짜: {response.deathDate}</p>
        <p>전화번호: {response.phoneNumber}</p>
      </div>
    </div>
  );
}
