import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import reset from "emotion-reset";
import { useMutation } from "react-query";
import { resetPw } from "../../api/listdata/resetPw";
import { useLocation } from "react-router-dom";
import { createContext } from "react";
import axios from "axios";
import { PathContext } from "../../context/PathContext";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  //주소에서 토큰뽑기
  const queryString = location.search;
  //   console.log("얘가주소뽑은애:", queryString);

  const [resetPw, setResetPw] = useState("");

  const resetPassword = async (newPassword) => {
    try {
      const response = await axios.post(
        // "http://54.180.120.82:8080/atcha/members/confirm-email{token}",
        `http://54.180.120.82:8080/atcha/members/confirm-email${queryString}`,
        newPassword
      );
      return response;
    } catch (error) {
      console.log("에러:", error);
    }
  };

  const pwmutation = useMutation(resetPassword, {
    onSuccess: (response) => {
      console.log("얘:", response);
      navigate("/login");
    },
  });

  //네비게이션로그인으로이동
  const resetPwHandler = () => {
    const newPassword = {
      token: queryString,
      password: resetPw,
    };

    pwmutation.mutate(newPassword);
  };

  return (
    <>
      <ContentsArea>
        {" "}
        <SignInWrapper>
          <div>
            <form>
              <FormHeader>
                <h2>새로운 비밀번호</h2>
                <h5>새로운 비밀번호를 입력해주세요.</h5>
              </FormHeader>
              <InputBox>
                <input
                  type="password"
                  placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                  name="password"
                  value={resetPw}
                  onChange={(event) => setResetPw(event.target.value)}
                />
              </InputBox>
              <Button onClick={resetPwHandler}>확인</Button>
            </form>
          </div>
        </SignInWrapper>
      </ContentsArea>
    </>
  );
}

// export default { ResetPassword };
export { ResetPassword, PathContext };
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
const FormHeader = styled.div`
  text-align: center;
  margin: 0px 0px 14px;
  & > h2 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  & > a {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: 400;

    letter-spacing: -0.4px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const InputBox = styled.div`
  margin-top: 60px;
  position: relative;
  width: 100%;
  & > input {
    width: 100%;
    padding: 12px 44px 12px 14px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: normal;
    border: 1px solid rgba(154, 151, 161, 0.2);
    border-bottom: none;
    border-radius: 4px 4px 0px 0px;
    line-height: 1;
  }
  & > input::placeholder {
    color: #a7a8af;
  }
  &:last-of-type {
    position: relative;
    top: -1px;
  }
  &:last-of-type > input {
    border-radius: 0px 0px 4px 4px;
    border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  }
`;
const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 0px 0px 21px;
  border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  background-color: rgb(248, 47, 98);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  /* border-radius: 40px; */
  border: none;
  font-size: 16px;
  line-height: 47px;
  height: 48px;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
`;
const SignInWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  color: white;
`;
