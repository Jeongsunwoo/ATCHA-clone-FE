import React from "react";
import { styled } from "styled-components";
function Reviewlist(reviewdata) {

  return (
    <>
      {" "}
      <DetailSecondItemWrap>
        <DetailSecondItemtext>
          {reviewdata?.reviewdata?.content}
        </DetailSecondItemtext>
        <DetailReplyDeleteBtn>삭제</DetailReplyDeleteBtn>
      </DetailSecondItemWrap>
    </>
  );
}

export default Reviewlist;

const DetailSecondItemWrap = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #484848;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const DetailSecondItemtext = styled.p`
  color: red;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre-wrap;
  margin: 4px 0px;
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
  color: black; /* 추가: 버튼 텍스트 색상 */
  position: absolute; /* 추가: 위치 설정 */
  right: 25px; /* 추가: 위치 설정 */
  top: 28px; /* 추가: 위치 설정 */
  cursor: pointer;
  &:hover {
    background-color: #f79191;
    transition: all 0.3s;
    color: white;
  }
`;