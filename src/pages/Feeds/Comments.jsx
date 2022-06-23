import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Comments = ({
  setCommentsView,
  feedData,
  commentsData,
  setCommentsData,
}) => {
  const { id, feedProfile, feedImage, likeNum, comment } = feedData;
  const inputComment = useRef('');
  const OverlayClick = () => {
    setCommentsView((prev) => !prev);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setCommentsData([
      ...commentsData,
      { id: commentsData.length + 1, content: inputComment.current.value },
    ]);
    inputComment.current.value = '';
  };

  return (
    <>
      <OverLay onClick={OverlayClick}>
        <div>X</div>
      </OverLay>
      <Wrap id="wrapppppppppp">
        <ImageFrame>
          <img src={feedImage} />
        </ImageFrame>
        <CommentFrame>
          <Header>
            <HeaderProfile>
              <HeaderIcon>
                <img src="/image/wantedIco.JPG" />
              </HeaderIcon>
              <HeaderName>{feedProfile}</HeaderName>
            </HeaderProfile>
          </Header>
          <Middle>
            <HeaderProfile>
              <HeaderIcon>
                <img src="/image/wantedIco.JPG" />
              </HeaderIcon>
              <HeaderName>{feedProfile}</HeaderName>
              <Comment>{comment}</Comment>
            </HeaderProfile>
            {commentsData.map((data, index) => (
              <HeaderProfile key={index}>
                <HeaderIcon>
                  <img src="/image/wantedIco.JPG" />
                </HeaderIcon>
                <HeaderName>{feedProfile}</HeaderName>
                <Comment>{data.content}</Comment>
              </HeaderProfile>
            ))}
          </Middle>
          <Bottom>
            <Like>좋아요 {likeNum}개</Like>
            <Time>21시간 전</Time>
          </Bottom>
          <CommentInput>
            <Form onSubmit={(e) => onSubmit(e)}>
              <input type="text" ref={inputComment} placeholder="댓글 달기" />
              <button>게시</button>
            </Form>
          </CommentInput>
        </CommentFrame>
      </Wrap>
    </>
  );
};

export default Comments;

const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  div {
    position: absolute;
    top: 2vh;
    right: 1vw;
    font-size: 22px;
    color: white;
    cursor: pointer;
  }
`;
const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 70vw;
  height: 90vh;
  margin: 5vh auto;
  z-index: 11;
  background-color: white;
  z-index: 11;
`;
const ImageFrame = styled.div`
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }
`;
const CommentFrame = styled.div`
  position: relative;
  width: 40%;
`;
const Comment = styled.span`
  font-size: 14px;
`;
const Header = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c7c2c2;
`;
const HeaderProfile = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  flex-shrink: 1;

  margin: 8px 4px 8px 12px;
  align-items: center;
`;
const HeaderIcon = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 15px;
  }
`;
const HeaderName = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Middle = styled.div`
  height: 68%;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 14vh;
  border-top: 1px solid #c7c2c2;
  border-bottom: 1px solid #c7c2c2; ;
`;
const Like = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;
const Time = styled.div`
  font-size: 12px;
  color: #aca7a7;
  margin-top: 10px;
  margin-left: 10px;
`;
const CommentInput = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  /* border-top: 1px solid #c7c2c2; */
  input {
    width: 90%;
    height: 49px;
    margin: 0 auto;
  }
  button {
    background-color: white;
    color: #3737f788;
    font-size: 16px;
    font-weight: bold;
  }
`;
const Form = styled.form`
  display: flex;
`;
