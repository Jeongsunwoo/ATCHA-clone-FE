import axios from "axios";
import { useNavigate } from "react-router-dom";



const signUpUser = async (newPost) => {

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/members/signup`,
      newPost
    );
    alert("회원가입 완료!")
    return response;
    
  } catch (error) {
    console.log(error);
  }
};

export { signUpUser };
