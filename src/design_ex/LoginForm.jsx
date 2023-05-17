import React from 'react'
import { useState } from 'react';
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query';
import { loginCertify } from '../api/login';
import Cookies from "js-cookie";
import Header from '../components/Layout/Header';
import Head from '../components/Layout/Head';

function LoginForm() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeLoginContent = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //TODO  토큰 보낼때 Cookies.get('token') 으로 보내기

  const LoginMutation = useMutation(loginCertify, {
    onSuccess: (response) => {
      const token = response.headers.get("access_key").split(" ")[1];
      Cookies.set("token", token);
      if ((response.data = "로그인 성공")) {
        alert("로그인이 완료되었습니다");
        navigate("/homepage/all");
      }
    },
  });

  const loginHandler = (e) => {
    e.preventDefault();

    if (!login.email) {
      alert("아이디 입력");
    } else if (!login.password) {
      alert("비밀번호 입력");
    }
    const newlogin = {
      email: login.email,
      password: login.password,
    };
    LoginMutation.mutate(newlogin);
  };

  return (
    <>
      <Head>
        <title>아챠 | 로그인</title>
      </Head>
      <SignInContainer>
        <Header text="회원가입" link="/signup" />
        <SignInWrapper>
          <div>
            <form>
              <FormHeader>
                <h2>로그인</h2>
                <Link to="/FindPassWord">비밀번호를 잊어버리셨나요?</Link>
              </FormHeader>
              <InputBox>
                <input type="email"
                placeholder="이메일 (example@gmail.com)"
                name="email"
                onChange={onChangeLoginContent} />
              </InputBox>
              <InputBox>
                <input type="password"
                placeholder="비밀번호"
                name="password"
                onChange={onChangeLoginContent} />
              </InputBox>

              <Button onClick={loginHandler}>
                로그인
              </Button>
            </form>
          </div>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
}
export default LoginForm;
const FormHeader = styled.div`
  margin: 0px 0px 14px;
  & > h2 {
    font-size: 18px;
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
const SignInContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("/via.placeholder.com/250/000000/ffffff") center center /
    cover no-repeat;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 24, 0.8);
  }
`;
const SignInWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`;