import React from 'react'
import { useQuery } from 'react-query';
import { allListAPI } from '../../api/listdata/allListAPI';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AllList() {
  const navigate = useNavigate();
  const { data } = useQuery("allListAPI", allListAPI);
  console.log("모든 비디오 조회", data);

  return (
    <Container>
      <h1>홈</h1>
      <Content>
        {data && data.map((allList) => (
          console.log("이미지 주소 => ",allList.image),
          <Img onClick={() => navigate(`/detailPage/${allList.id}`)} src={allList.image} />
        ))}
        <Img src={"https://an2-img.amz.wtchn.net/image/v2/ED7fQqzRjf5ABjGPcHTnIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qWXlNRGs1TURnMU16WTBOelk0TkRBekluMC5QRlFWTF9LQnBqdDBaS3gyUldLcEJLQkFaOEdNbVRkaWt6aGpObjJ4aVFJ"}
        />
      </Content>
    </Container>
  );
}

export default AllList

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Img = styled.img`
  width: 16%;
  height: 10%;
  cursor: pointer;
`

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
