import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { styled } from "styled-components";
import {
  proFileList,
  upDatePost,
  useInput,
} from "../../api/profile/proFileList";
import { useNavigate } from "react-router-dom";

function ProFileEdit() {
  const { data } = useQuery("profilelist", proFileList);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [input, setInput] = useInput("");

  const mutation = useMutation(upDatePost, {
    onSuccess: () => {
      alert("수정 완료!");
      queryClient.invalidateQueries("profilelist");
    },
    onError: () => {
    },
  });

  const handleClickUpdate = () => {
    if (!input) {
      alert("수정 내용을 입력해 주세요!");
      return;
    }

    const updatedPost = {
    nickname: input
    }

    mutation.mutate(updatedPost);
  };

  return (
    <Background>
      <ContentBox>
        <Title>프로필 수정</Title>
        <Con>
          <ProfileCon>
            <ImgCon>
              {data?.image ? (
                <Img src={data?.image} />
              ) : (
                <Img
                  src={
                    "https://an2-img.amz.wtchn.net/image/v2/DuqxCHAo8tswoiaBFI0uYA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16QXdlRE13TUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNWelpYSXZaR1ZtWVhWc2RGOXdjbTltYVd4bFgybHRZV2RsTDNCeWIyWnBiR1ZmTURNdWNHNW5JbjAuRzFSMVlqTC14VHJ5bXkyajIxMHkzcFZGX3EwSGJLODEyZWtjZjBsQjc1TQ"
                  }
                />
              )}
            </ImgCon>
            <EditCon>
              <But>이미지 변경</But>
            </EditCon>
          </ProfileCon>
          <NameCon>
            <Label>
              이름
              <Input
                name="name"
                type="txet"
                value={input}
                onChange={setInput}
                placeholder={`${data?.nickname}`}
              />
            </Label>
            <Ul>
              <Li>• 이름은 최소 2자, 최대 20자 까지 입력이 가능해요</Li>
              <Li>
                • 수정한 정보는 앗챠의 다른 서비스에서도 동일하게 표시됩니다
              </Li>
            </Ul>
          </NameCon>
        </Con>
        <Line />
        <But2Con>
          <But2 onClick={handleClickUpdate}>완료</But2>
          <But2 onClick={() => navigate(-1)}>취소</But2>
        </But2Con>
      </ContentBox>
    </Background>
  );
}
export default ProFileEdit;
const Background = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  transition: visibility 0ms ease 300ms, z-index 0ms ease 300ms, opacity 300ms;
`;
const ContentBox = styled.div`
  animation: 200ms cubic-bezier(0.13, 0.29, 0.29, 0.86) 0s 1 normal forwards
      running animation-cmelmz,
    200ms ease-in-out 0s 1 normal forwards running animation-ox4vyo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 20px;
  background-color: black;
`;
const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 3.125vw;
  font-weight: 700;
  letter-spacing: -0.0554687vw;
  margin: 0px 0px 0.15625vw;
`;
const Label = styled.label`
  display: block;
  color: rgb(255, 255, 255);
  font-size: 1.40625vw;
  font-weight: 400;
  letter-spacing: -0.0390625vw;
`;
const Input = styled.input`
  display: block;
  background: rgb(26, 27, 28);
  color: rgb(255, 255, 255);
  width: 29.5312vw;
  padding: 0.78125vw 0.9375vw;
  border: 0.078125vw solid rgb(51, 52, 53);
  margin: 0.703125vw 0px 0px;
`;
const Ul = styled.ul`
  margin: 0.78125vw 0px 0px;
`;
const Li = styled.li`
  color: rgb(93, 94, 95);
  font-size: 1.09375vw;
  font-weight: 400;
  letter-spacing: -0.0078125vw;
  line-height: 1.5625vw;
`;
const NameCon = styled.section`
  padding: 1.01562vw 0px 0px;
`;
const ProfileCon = styled.div`
  margin: 0px 1.875vw 0px 0px;
`;
const ImgCon = styled.div`
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  vertical-align: top;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  transition: opacity 420ms ease 0s;
`;
const EditCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5625vw 0px 0px 0.3125vw;
`;
const But = styled.button`
  color: rgb(93, 94, 95);
  font-size: 1.09375vw;
  font-weight: 400;
  letter-spacing: -0.03125vw;
  vertical-align: top;
  white-space: nowrap;
  padding: 0.3125vw 2.73438vw 0.46875vw;
  margin: 7px 0px 0px;
  visibility: visible;
  border: 0.078125vw solid rgb(64, 64, 66) !important;
`;
const Con = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Line = styled.div`
  background: rgba(255, 255, 255, 0.09);
  height: 0.1vw;
  margin: 1vw;
`;
const But2 = styled.button`
  background: no-repeat rgb(34, 35, 36);
  color: rgb(219, 219, 219);
  font-size: 1.40625vw;
  font-weight: 400;
  letter-spacing: -0.0390625vw;
  line-height: 2.10938vw;
  padding: 0.625vw 1.875vw 0.703125vw;
  margin: 1vw;
`;
const But2Con = styled.div`
  margin: 0px 0px 0px -0.390625vw;
`;
