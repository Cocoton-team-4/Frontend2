import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Homes from "../Components/Homes";

export default function Home() {
  const navigate = useNavigate();

  const [response, setResponse] = useState(null);
  const [searchInfo, setSearchInfo] = useState({
    rebornName: "",
    deathDate: "",
    birthDate: "",
    phoneNumber: "",
  });
  const handleSearch = (e) => {
    e.preventDefault();
    const { rebornName, deathDate, birthDate, phoneNumber } = searchInfo;
    if (!rebornName && !deathDate && !birthDate && !phoneNumber) {
      alert("하나 이상의 검색어를 입력하세요.");
      return;

      // Add your search logic here
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearchInfo((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .get(
        `http://8833-1-209-175-114.ngrok-free.app/reborner/search?name=${searchInfo.rebornName}&deathDate=${searchInfo.deathDate}&birthDate=${searchInfo.birthDate}&phoneNumber=${searchInfo.phoneNumber}`
      )
      .then((response) => {
        console.log(response);
        setResponse(response.data); // Set the API response to state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <Homepage>
      <Title>
        <H1>분향소 검색</H1>
      </Title>
      <form onSubmit={handleSubmit}>
        <Container>
          <GridContainer>
            <GridItem>
              <InputLabel>성명</InputLabel>
              <Input
                type="text"
                onChange={onChange}
                value={searchInfo.rebornName}
                name="rebornName"
                placeholder="성명"
              />
            </GridItem>
            <GridItem>
              <InputLabel>발인날짜</InputLabel>
              <Input
                type="text"
                onChange={onChange}
                value={searchInfo.deathDate}
                name="deathDate"
                placeholder="2100-12-31"
              />
            </GridItem>
            <GridItem>
              <InputLabel>생년월일</InputLabel>
              <Input
                type="text"
                onChange={onChange}
                value={searchInfo.birthDate}
                name="birthDate"
                placeholder="1900-01-01"
              />
            </GridItem>
            <GridItem>
              <InputLabel>전화번호</InputLabel>
              <Input
                type="text"
                onChange={onChange}
                value={searchInfo.phoneNumber}
                name="phoneNumber"
                placeholder="010-0000-0000"
              />
            </GridItem>
          </GridContainer>

          <SearchButton type="submit" onClick={handleSearch} value="검색" />
        </Container>
      </form>
      <SearchResult>
        분향소 리스트
        <div>{response && <Homes response={response} />}</div>
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

const SearchButton = styled.input`
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
