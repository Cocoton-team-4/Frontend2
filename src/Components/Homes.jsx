import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homes({ response }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={(e) => {
          navigate(`/main/${response.name}`, { state: response });
        }}
        style={{ backgroundColor: "white", marginBottom: "20px", fontSize: "20px", marginLeft:"200px", marginTop:"100px"}}
      >
        <h5>이름: {response.name}</h5>
        <h5>생년월일: {response.birthDate}</h5>
        <h5>발인날짜: {response.deathDate}</h5>
        <h5>전화번호: {response.phoneNumber}</h5>
      </div>
    </div>
  );
}
