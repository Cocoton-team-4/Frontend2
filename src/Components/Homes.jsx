import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homes({ response }) {
  const navigate = useNavigate();

  return (
    <div>
      {response.map((item, index) => (
        <div
          key={index}
          onClick={(e) => {
            navigate(`/main`);
          }}
          style={{ backgroundColor: "white", marginBottom: "20px" }}
        >
          <p>이름: {item.name}</p>
          <p>생년월일: {item.birthDate}</p>
          <p>발인날짜: {item.deathDate}</p>
          <p>전화번호: {item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
}
