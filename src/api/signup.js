import axios from "axios";

const signUpUser = async (newPost) => {
  try {
    const response = await axios.post(
      "http://54.180.120.82:8080/atcha/members/signup",
      newPost
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { signUpUser };
