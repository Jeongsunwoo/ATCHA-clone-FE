import axios from "axios";

// ! 영화리스트
const movieList = async () => {
    const token = Cookies.get("token");
    console.log("토큰:", token);
    const response = await axios.get(
      // `${process.env.REACT_APP_SERVER_URL}/movies/2`,
      "http://54.180.120.82:8080/atcha/movies/2",
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );
    return response;
  };
  
  export { movieList };
  