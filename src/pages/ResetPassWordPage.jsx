import React from "react";
import { styled } from "styled-components";

function ResetPassWordPage() {
  return (
    <>
      {/* header 디자인 작업해서 넣을 예정 */}

      <ContentsArea></ContentsArea>
    </>
  );
}

export default ResetPassWordPage;

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
