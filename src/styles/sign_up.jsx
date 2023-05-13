import styled from "@emotion/styled";

export const SignUpChecker = styled.div`
  width: 100%;
  margin: 16px 0 0;
`;

export const Checker = styled.div`
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
    input[type="checkbox"] {
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
        background-image: url("ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE1EWTVPVGcxTnpFek5qUTVNVGswTnlKOS41cUgtcUQ4YW9LUV9aN3dRRWJxckdJbXpiMDFNUm5zYVRPYzBPUXdaXzE0");
        background-size: contain;
      }
    }
  }
`;

export const InputBox = styled.div`
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
`;

export const SignUpForm = styled.form`
  width: 100%;
  button {
    opacity: 0.3;
    &.success {
      opacity: 1;
    }
  }
`;
export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE1EWTVPVGcxTnpFek5qUTVNVGswTnlKOS41cUgtcUQ4YW9LUV9aN3dRRWJxckdJbXpiMDFNUm5zYVRPYzBPUXdaXzE0")
    center center / cover no-repeat;
  &::before {
    content: "";
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
`;

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`;
