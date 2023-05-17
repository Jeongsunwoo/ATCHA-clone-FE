import axios from "axios";
import Cookies from "js-cookie";

const allListAPI = async () => {
    const token = Cookies.get("token");
    console.log("토큰:", token);
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/all`,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.content;
  };
  
  export { allListAPI };
  