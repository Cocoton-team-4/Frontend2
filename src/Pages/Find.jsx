import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { products } from "../findDummys.js";

import Finds from "../Components/Finds.jsx";

export default function Find() {
  const location = useLocation();

  return (
    <Answer>
      <span>{location.state} 검색 결과입니다</span>

      <div className="dummy">
        {products.results.map((products) => {
          return <Finds products={products} key={products.id} />;
        })}
      </div>
    </Answer>
  );
}
const Answer = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  .dummy {
    position: relative;
    top: 100px;
    right: 500px;
  }
`;
