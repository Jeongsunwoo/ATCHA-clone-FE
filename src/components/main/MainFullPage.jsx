import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

let options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionfour', 'sectionfive'],
};

function MainFullPage() {
  return (
    <SectionsContainer {...options}>
      <Section>
        <TitleCon>
          <Title>영화, 드라마, 예능, 다큐멘터리, 웹툰을 무제한으로</Title>
          <SeTitle>매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.</SeTitle>
          <Link to="/login"><Button>앗챠 이용하기</Button></Link>
        </TitleCon>
      </Section>
      <Section>
        <TitleCon>
          <Title>여럿이 함께, 하나의 이용권으로</Title>
          <SeTitle>동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.</SeTitle>
          <Link to="/login"><Button>앗챠 이용하기</Button></Link>
        </TitleCon>
      </Section>
      <Section>
        <TitleCon>
          <Title>이제 TV로 최고의 화질을 경험하세요</Title>
          <SeTitle>최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.</SeTitle>
          <Link to="/login"><Button>앗챠 이용하기</Button></Link>
        </TitleCon>
      </Section>
      <Section>
        <TitleCon>
          <Title>이동 중에도 감상을 멈추지 마세요</Title>
          <SeTitle>보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.</SeTitle>
          <Link to="/login"><Button>앗챠 이용하기</Button></Link>
        </TitleCon>
      </Section>
      <Section>
        <TitleCon>
          <Title>스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서</Title>
          <SeTitle>10만여 편의 콘텐츠를 무제한 스트리밍하세요.</SeTitle>
          <Link to="/login"><Button>앗챠 이용하기</Button></Link>
        </TitleCon>
      </Section>
    </SectionsContainer>
  );
}

export default MainFullPage

const TitleCon = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::after {
    content: "";
    background-image: url("https://an2-img.amz.wtchn.net/image/v2/n38aK5AxsV5de_1ni5t54A.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZZblY1YlcxemFIaDJhMngyY0hoa2JuYzVOamdpZlEuNFJNVVVHMHh0SFFPUk5IRVRVOVpOLVplQlg1MWJCWF8yMXJjT3V5eTZRcw")
    ,url("https://an2-img.amz.wtchn.net/image/v2/7uFyGrkEzxDWKbCGKo356w.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZlREp6Y21GMmNtSmlhblI0YUhKcGNXbzNiRzBpZlEubEVrZjRyV0hid24tSjMzdnBMVzVTTFdkTk9YWF9SUXNNay1WMWpzaS12TQ");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(0.2);
  }
`

const Title = styled.div`

color: #fff;
    font-size: 3.4722222222222223vw;
    font-weight: 400;
    letter-spacing: -0.24305555555555555vw;
    line-height: 4.375vw;
    white-space: pre-wrap;
overflow: hidden;
`;

const SeTitle = styled.div`

color: #fff;
    font-size: 1.5277777777777777vw;
    font-weight: 400;
    letter-spacing: -0.04861111111111111vw;
    line-height: 2.2916666666666665vw;
    margin-bottom: 3.75vw;
    opacity: 0.65;
`;

const Button = styled.button`
  width: 20vw;
  padding: 0px 0px 21px;
  border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  background-color: rgb(248, 47, 98);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  border-radius: 40px;
  border: none;
  font-size: 16px;
  line-height: 47px;
  height: 48px;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
`;