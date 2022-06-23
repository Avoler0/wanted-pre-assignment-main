import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom';
// 가이드 네비게이션 바
const GNB = () => {
  const [login, setLogin] = useState(false);
  const input = useRef();
  useEffect(() => {
    const check = localStorage.getItem('login_state');
    if (check) setLogin(true);
  }, []);
  return (
    <Container>
      <LayOut>
        <Logo
          onClick={() => {
            location.href = `${location.origin}`;
          }}
        >
          <LogoImg src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
        </Logo>
        <SearchWrap>
          <Input type="text" ref={input} placeholder="검색" />
        </SearchWrap>
        <LoginWrap>
          {login ? (
            <Login
              onClick={() => {
                localStorage.clear();
                location.reload();
              }}
            >
              LogOut
            </Login>
          ) : (
            <Login
              onClick={() => {
                location.href = `${location.origin}/login`;
              }}
            >
              Login
            </Login>
          )}
        </LoginWrap>
      </LayOut>
    </Container>
  );
};

export default GNB;
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 60px;
  border: 0.5px solid #c7c2c26e;
  background-color: white;
  z-index: 10;
`;
const LayOut = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  max-width: calc(935px + 40px);
  margin: 0 auto;
  justify-content: space-between;
`;
const Logo = styled.div`
  justify-content: flex-start;
  margin: auto 0;
  cursor: pointer;
  padding: 0 20px;
`;
const LogoImg = styled.img`
  width: 103px;
  height: 29px;
`;
const SearchWrap = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 268px;
  height: 36px;
  margin: auto 0;
  border-radius: 8px;
  background-color: rgb(239, 239, 239);
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  background-color: inherit;
  border-radius: 8px;
  font-size: 16px;
`;
const LoginWrap = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 15px;
`;
const Login = styled.div`
  cursor: pointer;
`;
// const Home = styled.div``;
// const Direct = styled.div``;
// const NewPost = styled.div``;
// const FindPeople = styled.div``;
// const ActivityFeed = styled.div``;
// const Profile = styled.div``;
