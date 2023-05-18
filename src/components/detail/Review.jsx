import React from "react";
import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { addReview } from "../../api/detail/review";

function Review({tvid , movieid}) {
  const [content, setContent] = useState();
  const queryClient = useQueryClient();
  const ARRAY = [0, 1, 2, 3, 4];

  //   별점 기본값 설정
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // console.log("스코어:", score);
  };

  let score = clicked.filter(Boolean).length;

  //댓글추가
  const addMutation = useMutation(addReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("detailMovie");
    },
  });

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    if (content === "") {
      alert("양식을 모두 입력해주세요.");
      return;
    }
    const newPost = {
      star: score,
      content: content,
    };
    addMutation.mutate(newPost);
  };

  return (
    <>
      <ReviewWrapper>
        <TitleWrapper>
          <h2>왓챠피디아 사용자 평</h2>
        </TitleWrapper>
        {/* 얘아래부터 각각 리뷰들 */}
        <SeperateReview>
          <InputBox
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></InputBox>
          <Stars>
            {ARRAY.map((el, idx) => {
              // console.log(el);
              return (
                <FaStar
                  key={idx}
                  size="30"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && "yellowStar"}
                />
              );
            })}
          </Stars>
          <SubmitButton onClick={onSubmitClickHandler}>완료</SubmitButton>
        </SeperateReview>
      </ReviewWrapper>
    </>
  );
}

export default Review;

const ReviewWrapper = styled.section`
  margin: 0px 0px 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;

  h2 {
    margin-top: 20px;
    margin-left: 20px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
  }
`;

// const SmtitleWrapper = styled.div`
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   min-width: 0px;
// `;

const SeperateReview = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  padding: 8px 0px;
`;

const InputBox = styled.input`
  color: rgb(132, 134, 141);
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre-wrap;
  margin: 4px 0px;
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 40px;
  margin: 4px 20px;
  border-radius: 12px;
  background-color: #f82f62;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const DetailSecondItemWrap = styled.form`
  margin: 20px;
  padding: 20px;
  background-color: #484848;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;
const DetailSecondItemtext = styled.p`
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre-wrap;
  margin: 4px 0px;
`;
const DetailSecondItemInput = styled.input`
  margin-top: 50px;
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const DetailSecondItemBtn = styled.button`
  position: absolute;
  width: 60px;
  height: 25px;
  right: 25px;
  bottom: 28px;
  font-weight: 900;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #f7ddde;
    transition: all 0.3s;
  }
`;

const DetailReplyDeleteBtn = styled.button`
  width: 60px;
  height: 25px;
  background-color: white;
  font-weight: 900;
  border: 1px solid black;
  &:hover {
    background-color: #f79191;
    transition: all 0.3s;
    color: white;
  }
`;
