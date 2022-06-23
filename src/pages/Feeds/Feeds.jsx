import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Comments from './Comments';
const Feeds = ({ feedData }) => {
  const { id, feedProfile, feedImage, likeNum, comment } = feedData;
  const [commentsView, setCommentsView] = useState();
  const inputComment = useRef('');
  const [commentsCount, setCommentsCount] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const commentView = () => {
    setCommentsView((prev) => !prev);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      { id: commentsCount, content: inputComment.current.value },
    ]);
    setCommentsCount(commentsCount + 1);
    inputComment.current.value = '';
  };
  return (
    <>
      <Feed style={{ display: imgLoading ? 'none' : 'block' }}>
        <FeedHead>
          <FeedProfile>
            <ProfileIcon>
              <img src="/image/wantedIco.JPG" />
            </ProfileIcon>
            <ProfileName>{feedProfile}</ProfileName>
          </FeedProfile>
        </FeedHead>
        <FeedMiddle>
          <FeedImage>
            {
              <img
                src={feedImage}
                onLoad={() => setImgLoading(false)}
                onError={() => console.log('이미지 오류')}
              />
            }
          </FeedImage>
        </FeedMiddle>
        <FeedBottom>
          <BottomWrap>
            <FeedLike>좋아요 {likeNum}개</FeedLike>
            <FeedContent>
              <ContentProfile>{feedProfile}</ContentProfile>
              <span>{comment}</span>
            </FeedContent>
            <Comment onClick={commentView}>
              댓글 {comments.length}개 모두 보기
            </Comment>
            <Time>21시간 전</Time>
          </BottomWrap>
          <CommentInput>
            <Form onSubmit={(e) => onSubmit(e)}>
              <input type="text" ref={inputComment} placeholder="댓글 달기" />
              <button>게시</button>
            </Form>
          </CommentInput>
        </FeedBottom>
      </Feed>
      {commentsView && (
        <Comments
          setCommentsView={setCommentsView}
          feedData={feedData}
          commentsData={comments}
          setCommentsData={setComments}
        />
      )}
    </>
  );
};

export default Feeds;

const Feed = styled.div`
  border-radius: 10px;
  border: 1px solid #c7c2c2;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    border-radius: 0px;
  }
`;
const FeedHead = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c7c2c2;
`;

const FeedProfile = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  flex-shrink: 1;

  margin: 8px 4px 8px 12px;
  align-items: center;
`;
const ProfileIcon = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 15px;
  }
`;
const ProfileName = styled.div`
  margin-left: 10px;
`;
const FeedMiddle = styled.div`
  margin-bottom: 10px;
`;
const FeedImage = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
const FeedBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 195px;
`;
const BottomWrap = styled.div`
  margin-left: 10px;
`;
const FeedLike = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const FeedContent = styled.div`
  margin-top: 10px;
  height: 70px;
  font-size: 14px;
  line-height: 18px;
  span {
    font-size: 13px;
  }
`;
const ContentProfile = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
const Time = styled.div`
  font-size: 12px;
  color: #aca7a7;
  margin-top: 10px;
`;
const Comment = styled.div`
  font-size: 14px;
  color: #aca7a7;
`;
const Form = styled.form`
  display: flex;
`;
const CommentInput = styled.div`
  position: relative;
  width: 100%;
  height: 49px;
  margin-top: 15px;
  padding: 0 12px;
  border-top: 1px solid #c7c2c2;

  /* border-top: 1px solid #c7c2c2; */
  input {
    width: 88%;
    height: 49px;
    margin: 0 auto;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  button {
    background-color: white;
    color: #3737f788;
    font-size: 16px;
    font-weight: bold;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
