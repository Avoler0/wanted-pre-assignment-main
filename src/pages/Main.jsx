import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Feeds from './Feeds/Feeds';
const Main = () => {
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log('피드데이터', feedData);
  useEffect(() => {
    if (!localStorage.getItem('login_state'))
      location.href = `${location.origin}/login`;
    axios.get('data/data.json').then((res) => {
      setFeedData(() => res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <>데이터없음</>;
  }

  return (
    <Container>
      <LayOut>
        <FeedLayOut id="feed">
          {feedData.map((data) => (
            <Feeds feedData={data} key={data.id} />
          ))}
        </FeedLayOut>
      </LayOut>
    </Container>
  );
};

export default Main;

const Container = styled.div``;
const LayOut = styled.main`
  margin-top: 119px;
  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;
const FeedLayOut = styled.div`
  width: 470px;
  margin: 0 auto;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 0px;
  }
`;

const Banner = styled.div``;
