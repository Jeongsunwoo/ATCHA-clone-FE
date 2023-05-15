import axios from "axios";
import Cookies from "js-cookie";

// ! 영화상세조회
const detailTv = async () => {
  const token = Cookies.get("token");
  console.log("토큰:", token);
  const response = await axios.get(
    // `${process.env.REACT_APP_SERVER_URL}/movies/2`,
    "http://54.180.120.82:8080/atcha/tvs/2",
    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export { detailTv };
