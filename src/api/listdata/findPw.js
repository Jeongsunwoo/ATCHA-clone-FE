import axios from "axios";

const findPw = async (newPW) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/members/find-password`,newPW
  );
  return response;
};
export { findPw };
