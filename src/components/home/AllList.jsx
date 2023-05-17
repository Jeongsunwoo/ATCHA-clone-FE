import React from "react";
import { useQuery } from "react-query";
import { allListAPI } from "../../api/listdata/allListAPI";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function AllList() {
  const navigate = useNavigate();
  const { data } = useQuery("allListAPI", allListAPI);
  console.log("모든 비디오 조회", data);
  // console.log(data.id);
  return (
    <Container>
      <Title>홈</Title>
      <Content>
      {data &&
          data.map(
            (allList) => (
              console.log("이미지 주소 => ", allList.image),
              data.category === "MOVIE" ? (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/movie/${allList.id}`)}
                  src={allList.image}
                />
              ) : (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/tv/${allList.id}`)}
                  src={allList.image}
                />
              )
            )
          )}
      </Content>
      <Title>홈</Title>
      <Content>
      {data &&
          data.map(
            (allList) => (
              console.log("이미지 주소 => ", allList.image),
              data.category === "MOVIE" ? (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/movie/${allList.id}`)}
                  src={allList.image}
                />
              ) : (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/tv/${allList.id}`)}
                  src={allList.image}
                />
              )
            )
          )}
      </Content>
      <Title>홈</Title>
      <Content>
      {data &&
          data.map(
            (allList) => (
              console.log("이미지 주소 => ", allList.image),
              data.category === "MOVIE" ? (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/movie/${allList.id}`)}
                  src={allList.image}
                />
              ) : (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/tv/${allList.id}`)}
                  src={allList.image}
                />
              )
            )
          )}
      </Content>
      <Title>홈</Title>
      <Content>
      {data &&
          data.map(
            (allList) => (
              console.log("이미지 주소 => ", allList.image),
              data.category === "MOVIE" ? (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/movie/${allList.id}`)}
                  src={allList.image}
                />
              ) : (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/tv/${allList.id}`)}
                  src={allList.image}
                />
              )
            )
          )}
        <Img
          src={
            "https://an2-img.amz.wtchn.net/image/v2/ED7fQqzRjf5ABjGPcHTnIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qWXlNRGs1TURnMU16WTBOelk0TkRBekluMC5QRlFWTF9LQnBqdDBaS3gyUldLcEJLQkFaOEdNbVRkaWt6aGpObjJ4aVFJ"
          }
        />
      </Content>
    </Container>
  );
}

export default AllList;

const Container = styled.div`
  padding-bottom: 32px;
  padding-right: 40px;
  padding-left: 40px;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  margin-top: 2px;
  margin-bottom: 2px;
`;
