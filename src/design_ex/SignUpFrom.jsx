import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { mq } from "../styles/media-query";

function SignupForm() {
  return (
    <>
      <title>아챠 | 회원가입</title>
      <SignUpContainer>
        <HeaderWrap>
          <Logo type="button">
            <Link to="/">아챠</Link>
          </Logo>

          <Login type="button">
            <Link to="/login">로그인</Link>
          </Login>
        </HeaderWrap>
        <SignUpWrapper>
          <h2>회원가입</h2>

             <form>
                <InputBox>
                  <div className="inputBox name">
                    <input type="name" placeholder="이름 (2자 이상)" name="name" className="input" />
                  </div>

                  <div className="inputBox email">
                    <input type="email" name="email" placeholder="이메일 (example@gamil.com)" className="input" />
                  </div>

                  <div className="inputBox password">
                    <input
                      type="password"
                      name="password"
                      placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                      className="input"
                    />
                  </div>
                </InputBox>

                <SignUpChecker>
                <Checker>
                  <label>
                    <span>
                      <input
                        type="checkbox"
                      />
                    </span>
                    전체 약관에 동의합니다.
                  </label>
                </Checker>
                </SignUpChecker>

                <Button
                  type="submit"
                >
                  계정 생성하기
                </Button>
              </form>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  )
}

export default SignupForm


const InputBox = styled.div`
  .inputBox {
    width: 100%;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .err {
      color: black;
    }

    &.name {
      border-radius: 4px 4px 0 0;
    }
    &.password {
      border-radius: 0 0 4px 4px;
    }
    &.email {
      border: 1px solid rgba(154, 151, 161, 0.2);
      border-top-width: 1px;
      border-bottom-width: 1px;
    }
    input {
      border: none;
      width: 100%;
      padding: 10px 44px 10px 14px;
      letter-spacing: -0.5px;
    }
  }
`

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/via.placeholder.com/250/000000/ffffff') center center / cover no-repeat;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 24, 0.8);
  }
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 0 14px;
  }
`

const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`




const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url('/via.placeholder.com/250/000000/ffffff') no-repeat center center;
  background-size: contain;
  border: none;
  a {
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 1em 5em;
    opacity: 0;
  }
`

const Login = styled.button`
  background: none;
  border: none;
  a {
    background: #fff;
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`



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
`

// 헤더 네비게이션
const HeaderWrap = styled.nav`
  z-index: 80;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${mq({
    padding: ['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
  })};
`

const SignUpChecker = styled.div`
  width: 100%;
  margin: 16px 0 0;
`

const Checker = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  margin: 6px 0;
  label {
    cursor: pointer;
    strong {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  span {
    vertical-align: middle;
    input {
      width: 14px;
      height: 14px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
    input[type='checkbox'] {
      width: 14px;
      height: 14px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      cursor: pointer;
      margin-right: 7px;
      outline: none;
      appearance: none;
      &:checked {
        background: rgb(248, 47, 98) no-repeat center center;
        border: 1px solid rgb(248, 47, 98);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNDEgMTcuMjZhLjc0NC43NDQgMCAwIDEtLjUzLS4yMkw0LjA1IDEyLjIxMmEuNzQ5Ljc0OSAwIDEgMSAxLjA2LTEuMDZsNC4yOTggNC4yOTcgOS40OC05LjQ4QS43NS43NSAwIDEgMSAxOS45NSA3LjAzTDkuOTQgMTcuMDRhLjc0NC43NDQgMCAwIDEtLjUzLjIyIi8+Cjwvc3ZnPgo=);
        background-size: contain;
      }
    }
  }
`
