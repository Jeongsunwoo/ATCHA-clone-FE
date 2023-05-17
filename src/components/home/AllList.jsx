import React from 'react';
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
      <Title>홈</Title>
      <Content>
        {data && data?.map((allList) => (
          <Img
            key={allList.id}
            onClick={() => navigate(`/detailPage/${allList.id}`)}
            src={allList.image}
          />
        ))}
      </Content>
      <Title>홈</Title>
      <Content>
        {data && data?.map((allList) => (
          <Img
            key={allList.id}
            onClick={() => navigate(`/detailPage/${allList.id}`)}
            src={allList.image}
          />
        ))}
      </Content>
      <Title>홈</Title>
      <Content>
        {data && data?.map((allList) => (
          <Img
            key={allList.id}
            onClick={() => navigate(`/detailPage/${allList.id}`)}
            src={allList.image}
          />
        ))}
      </Content>
      <Title>홈</Title>
      <Content>
        {data && data?.map((allList) => (
          <Img
            key={allList.id}
            onClick={() => navigate(`/detailPage/${allList.id}`)}
            src={allList.image}
          />
        ))}
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
