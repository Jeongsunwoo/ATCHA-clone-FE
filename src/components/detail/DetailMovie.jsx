import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { detailMovie } from "../../api/detail/detailMovie";
import Director from "../director/Director";
import Review from "./Review";

function DetailMovie() {
  const { data } = useQuery("detailmovie", detailMovie);
  console.log("영화상세조회:", data);

  return (
    <>
      {/* header 디자인 작업해서 넣을 예정 */}
      <HomeWrap>
        {/* 사이드메뉴 */}
        <SidebarArea>
          <ul>
            <li>비디오</li>
            <li>TV</li>
            <li>찾기</li>
          </ul>
        </SidebarArea>
        <ContentsArea>
          {/* 작업시작 */}
          <MovieInfoArea>
            <MovieImage></MovieImage>
            <MovieTitleArea>
              <MovieTitle>스펜서</MovieTitle>
              <Moviegenre>로맨스</Moviegenre>

              <MovieInfo>
                동일범의 소행으로 추정했지만, 체포한 범인들이 모두 평범한
                사람들인 연쇄살인 사건이 발생한다. 아무런 전조 증상이 없었던
                범인들을 조사하던 끝에 형사 다카베는 유일한 공통점 하나를
                찾아낸다.
              </MovieInfo>
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
          <div>감독/출연</div>
          <Container>
            {/* 두개씩 들어가나 넣어본거요 */}
            <PersonArea>
              <Director />
            </PersonArea>
            <PersonArea>
              <Director />
            </PersonArea>
            <PersonArea>
              <Director />
            </PersonArea>
            <PersonArea>
              <Director />
            </PersonArea>
          </Container>

          <Review />
        </ContentsArea>
      </HomeWrap>
    </>
  );
}
export default DetailMovie;

const HomeWrap = styled.div``;

const SidebarArea = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  color: white;
  /* background: #141517; */
  background: #4068b8;

  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
`;

const ContentsArea = styled.div`
  z-index: -1;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  padding: 72px 0 0 240px;
  background: #141517;
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
  justify-content: space-between;
  /* background-color: red; */
  /* position: fixed; */
  padding: 10px;
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
  border: 1px solid #757575;
  width: 140px;
  height: 50px;
  color: white;
`;

const DotButton = styled.button`
  background-color: #000000;
  border: 1px solid #757575;

  border-radius: 5px;
  font-size: 20px;
  width: 50px;
  height: 50px;
  color: white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PersonArea = styled.div`
  margin-left: 20px;
  width: 20%;
  /* font-size: 30px; */
  /* flex-direction: column; */
  padding: 10px;
  background-color: #000000;
  /* height: 40%; */
`;
