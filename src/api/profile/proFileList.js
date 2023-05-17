import axios from 'axios'
import Cookies from "js-cookie";
import { useState } from "react";

const proFileList = async () => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/members/mypage`, {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    });
    return response.data.data;
};

const useInput = () => {
  const [value, setValue] = useState("");

  const hanlder = (e) => {
    setValue(e.target.value);
  };

  return [value, hanlder];
};

const upDatePost = async (payload) => {
  console.log("페이로드 값 => ",payload)
  const token = Cookies.get("token");
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/members/mypage`, {
    payload,
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
};

export { proFileList, useInput, upDatePost }