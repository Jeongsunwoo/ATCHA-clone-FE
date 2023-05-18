import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { detailMovie } from "../../api/detail/detailMovie";
import { useLocation } from "react-router-dom";
import Director from "../director/Director";
import Review from "./Review";
import { useParams } from "react-router-dom";
import Head from "../Layout/Head";
import Header from "../Layout/Header";
import Reviewlist from "../director/Reviewlist";

function DetailMovie() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    "detailMovie",
    () => detailMovie(id),
    {
      enabled: true,
      staleTime: 0,
    }
  );

  console.log(data?.reviewList);

  return (
    <>
      {/* <Header /> */}
      <HomeWrap>
        <ContentsArea>
          <MovieInfoArea>
            <MovieImage src={data?.image}></MovieImage>
            <MovieTitleArea>
              <MovieTitle>{data?.title}</MovieTitle>
              <Moviegenre>
                {data?.genre}
                {data?.time}평균{data?.star}|{data?.age}
              </Moviegenre>

              <MovieInfo>{data?.information}</MovieInfo>
            </MovieTitleArea>
          </MovieInfoArea>
          <MovieClickArea>
            <ButtonWrapper>
              <div>
                <WatchButton>
                  <BsFillCaretRightFill />
                  감상하기
                </WatchButton>
                <PartyButton>왓챠파티</PartyButton>
              </div>
              <div>
                <PlusButton>+ 보고싶어요</PlusButton>
                <DotButton>'''</DotButton>
              </div>
            </ButtonWrapper>
          </MovieClickArea>
          <DirectorNameWrap>
            <h2>감독/출연</h2>
          </DirectorNameWrap>
          <Container>
            <PersonArea>
              {data?.castingList.map((item) => {
                return <Director key={item.id} listdata={item} />;
              })}
            </PersonArea>
          </Container>

          <Review />

          {data?.reviewList.map((item) => {
            return <Reviewlist key={item.id} reviewdata={item} />;
          })}
        </ContentsArea>
      </HomeWrap>
    </>
  );
}
export default DetailMovie;

const HomeWrap = styled.div``;

const ContentsArea = styled.div`
  z-index: -1;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  padding: 72px 0 0 240px;
  background: #000000;
  color: white;
`;

const MovieInfoArea = styled.div`
  background-color: #000000;
  /* justify-content: center; */
  align-items: center;
  display: flex;

  height: 40%;
`;

const MovieImage = styled.img`
  border-radius: 3px;
  width: 10em;
  margin-left: 50px;
  background-color: #000000;
  /* text-align: center; */
  height: 15em;
  margin-right: 30px;
`;

const MovieTitleArea = styled.div`
  margin-top: 30px;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: #000000;
  width: 40%;
`;
const MovieTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const Moviegenre = styled.div`
  margin-top: 10px;
`;

const MovieInfo = styled.div`
  margin-top: 10px;
`;
const MovieClickArea = styled.div`
  /* border-style: solid; */
  /* border-color: red green blue; */

  background-color: #000000;
  height: 10%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-top: 1px solid rgb(27, 28, 29);
  border-bottom: 1px solid rgb(27, 28, 29);
  justify-content: space-between;
  /* background-color: red; */
  /* position: fixed; */
  padding: 20px;
`;

const WatchButton = styled.button`
  margin-right: 10px;
  background-color: #f82f62;
  border-radius: 5px;
  font-size: 20px;
  width: 120px;
  height: 50px;
  color: white;
`;

const PartyButton = styled.button`
  background-color: #262626;
  border-radius: 5px;
  font-size: 20px;
  width: 120px;
  height: 50px;
  color: white;
`;

const PlusButton = styled.button`
  margin-right: 10px;
  background-color: #000000;
  border-radius: 5px;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 140px;
  height: 50px;
  color: white;
`;

const DotButton = styled.button`
  background-color: #000000;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  font-size: 20px;
  width: 50px;
  height: 50px;
  color: white;
`;

const DirectorNameWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;

  h2 {
    margin-top: 20px;
    margin-left: 20px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
  }
`;

const Container = styled.div`
  background-color: #010101;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PersonArea = styled.div`
  margin-left: 20px;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  background-color: #000000;
`;
const DetailSecondItemWrap = styled.form`
  margin: 20px;
  padding: 20px;
  background-color: #484848;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;
const DetailSecondItemtext = styled.p`
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre-wrap;
  margin: 4px 0px;
`;
const DetailSecondItemInput = styled.input`
  margin-top: 50px;
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const DetailSecondItemBtn = styled.button`
  position: absolute;
  width: 60px;
  height: 25px;
  right: 25px;
  bottom: 28px;
  font-weight: 900;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #f7ddde;
    transition: all 0.3s;
  }
`;

const DetailReplyDeleteBtn = styled.button`
  width: 60px;
  height: 25px;
  background-color: white;
  font-weight: 900;
  border: 1px solid black;
  &:hover {
    background-color: #f79191;
    transition: all 0.3s;
    color: white;
  }
`;
