import axios from "axios";

const findPw = async (newPW) => {
  const response = await axios.post(
    "http://54.180.120.82:8080/atcha/members/find-password",
    newPW
  );
  return response;
};
export { findPw };
