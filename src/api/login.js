import axios from "axios";

// * post
const loginCertify = async (newLogin) => {
  console.log("현재로그인 => ", newLogin);
  try {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/login`, newLogin);
    console.log("response => ",response)
    return response;
  } catch (error) {
    console.log("에러코드:", error);
    return error;
  }
};

export { loginCertify };