import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const proFileList = async () => {
  const token = Cookies.get("token");
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/members/mypage`,
    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

const useInput = () => {
  const [value, setValue] = useState("");

  const hanlder = (e) => {
    setValue(e.target.value);
  };

  return [value, hanlder];
};
// "http://54.180.120.82:8080/atcha/
const upDatePost = async (payload) => {
  const token = Cookies.get("token");
  // await axios.put(`${process.env.REACT_APP_SERVER_URL}/members/mypage`, {
  await axios.put("http://54.180.120.82:8080/atcha/members/mypage", {
    image: payload.image,
    nickname: payload.nickname,
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
};

export { proFileList, useInput, upDatePost };
