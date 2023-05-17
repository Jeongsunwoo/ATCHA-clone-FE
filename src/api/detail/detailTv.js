import axios from "axios";
import Cookies from "js-cookie";

// ! 영화상세조회
const detailTv = async (id) => {
  const token = Cookies.get("token");
  console.log("토큰:", token);
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/tvs/${id}`,

    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export { detailTv };
