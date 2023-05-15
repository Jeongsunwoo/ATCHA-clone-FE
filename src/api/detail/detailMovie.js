import axios from "axios";
import Cookies from "js-cookie";

// ! 영화상세조회
const detailMovie = async () => {
  const token = Cookies.get("token");
  console.log("토큰:", token);
  const response = await axios.get("http://54.180.120.82:8080/atcha/movies/1", {
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { detailMovie };
