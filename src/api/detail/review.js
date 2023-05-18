import axios from "axios";
import Cookies from "js-cookie";

const addReview = async (newPost) => {
  const token = Cookies.get("token");

  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/media/1`,
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
