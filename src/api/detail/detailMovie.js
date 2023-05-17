import axios from "axios";
import Cookies from "js-cookie";

// ! 영화상세조회
const detailMovie = async (id) => {
  console.log("id =>" ,id)
  const token = Cookies.get("token");
  const response = await axios.get(`http://54.180.120.82:8080/atcha/movies/${id}`, {
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
  console.log("리스폰스 => ",response.data)
  return response;
};

export { detailMovie };
