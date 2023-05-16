import axios from "axios";
import Cookies from "js-cookie";

const addReview = async (newPost) => {
  const token = Cookies.get("token");

  await axios.post(
    "http://54.180.120.82:8080/atcha/media/24",
    {
      star: newPost.star,
      content: newPost.content,
    },
    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  // console.log(token);
};

export { addReview };
