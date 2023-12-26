import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <Homepage>
      <Title>
        <H1>분향소 검색</H1>
      </Title>
      <Container>
        <GridContainer>
          <GridItem>
            <InputLabel>성명</InputLabel>
            <Input type="text" placeholder="성명" />
          </GridItem>
          <GridItem>
            <InputLabel>발인날짜</InputLabel>
            <Input type="text" placeholder="2100-12-31" />
          </GridItem>
          <GridItem>
            <InputLabel>생년월일</InputLabel>
            <Input type="text" placeholder="1900-01-01" />
          </GridItem>
          <GridItem>
            <InputLabel>전화번호</InputLabel>
            <Input type="text" placeholder="010-0000-0000" />
          </GridItem>
        </GridContainer>

        <SearchButton onClick={handleSearch}>검색</SearchButton>
        </Container>
        <SearchResult>
          분향소 리스트들이 들어갈 자리
          <div onClick={(e) => {
            navigate(`/main`);
          }} style={{backgroundColor: 'white'}}>
            <p>이름:</p>
            <p>생년월일:</p>
            <p>발인날짜:</p>
            <p>전화번호:</p>
          </div>
        </SearchResult>
          
      
    </Homepage>
  );
}

const Homepage = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const H1 = styled.div`
  width: 200px;
  font-size: 30px;
  margin: 0 auto;
`;

const Container = styled.div`
  background-color: #ccc; /* Set your desired background color */
  padding: 20px;
  width: 100vw;
  height: 250px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  margin-bottom: 30px;
`;

const GridItem = styled.div`
  position: relative;
  margin: 0 auto;
`;

const InputLabel = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  background-color: #bd6ad6; /* Set your desired background color */
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto; /* Center the button */
`;

const SearchResult = styled.h3`
  background-color: grey;
  height: 500px;
`;
