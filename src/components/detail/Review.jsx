import React from "react";
import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { addReview } from "../../api/detail/review";

function Review() {
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
  console.log("스코어:", score);
  console.log(typeof score);

  //댓글추가
  const addMutation = useMutation(addReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("getReply");
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
          <SmtitleWrapper>
            <h2>왓챠피디아 사용자 평</h2>
          </SmtitleWrapper>
        </TitleWrapper>
        {/* 얘아래부터 각각 리뷰들 */}
        <SeperateReview>
          <InputBox
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></InputBox>
          <Stars>
            {ARRAY.map((el, idx) => {
              console.log(el);
              return (
                <FaStar
                  key={idx}
                  size="50"
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
  position: relative;
  z-index: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  font-size: initial;
  margin-bottom: 5px;
`;

const SmtitleWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
`;

const SeperateReview = styled.div`
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
  height: 40px;
  margin: 4px 20px;

  background-color: pink;
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
