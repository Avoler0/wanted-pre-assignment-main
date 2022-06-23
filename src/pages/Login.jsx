import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// 로그인 컴포넌트
const Login = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const [valid, setValid] = useState({
    buttonCheck: false,
    emailValid: false,
    passwordValid: false,
    buttonValid: false,
  });
  const [notion, setNotion] = useState({
    emailNotion: true,
    passwordNotion: true,
  });
  const { emailNotion, passwordNotion } = notion;
  const { buttonCheck, emailValid, passwordValid, buttonValid } = valid;
  const pattern1 = /[0-9]/; // 숫자
  const pattern2 = /[a-zA-Z]/; // 문자
  const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

  const onClick = () => {
    setValid({ ...valid, buttonCheck: true });
    if (emailValid && passwordValid) {
      localStorage.setItem('login_state', true);
      localStorage.setItem('login_email', emailRef.current.value);
      localStorage.setItem('login_passWord', pwRef.current.value);
      setTimeout(() => {
        location.href = `${location.origin}`;
      }, 100);
    }
  };
  const emailCheck = () => {
    const emailValue = emailRef.current.value;
    if (emailValue.includes('@') && emailValue.includes('.')) {
      setValid({ ...valid, emailValid: true });
      setNotion({ ...notion, emailNotion: true });
    } else {
      setValid({ ...valid, emailValid: false });
      setNotion({ ...notion, emailNotion: false });
    }
    ButtonValid();
  };
  const pwCheck = () => {
    const pwValue = pwRef.current.value;
    if (
      pattern1.test(pwValue) &&
      pattern2.test(pwValue) &&
      pattern3.test(pwValue)
    ) {
      setValid({ ...valid, passwordValid: true });
      setNotion({ ...notion, passwordNotion: true });
    } else {
      setValid({ ...valid, passwordValid: false });
      setNotion({ ...notion, passwordNotion: false });
    }
    ButtonValid();
  };
  const ButtonValid = () => {
    if (emailValid && passwordValid) {
      setValid({ ...valid, buttonValid: true });
    }
  };

  return (
    <Main>
      <FormDiv>
        <WrapDiv>
          <ImgDiv>
            <LogoImg src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </ImgDiv>
          <Form onSubmit={(e) => e.preventDefault()}>
            <LoginDiv>
              <Label>
                <Input
                  type="text"
                  placeholder="전화번호,사용자 이름 또는 이메일"
                  ref={emailRef}
                  onChange={emailCheck}
                  style={{
                    borderColor: emailNotion
                      ? 'rgb(55, 87, 226)'
                      : 'red' || (buttonValid && 'rgb(163, 228, 41'),
                  }}
                />
              </Label>
            </LoginDiv>
            <LoginDiv>
              <Label>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  ref={pwRef}
                  onChange={pwCheck}
                  style={{
                    borderColor: passwordNotion ? 'rgb(55, 87, 226)' : 'red',
                  }}
                />
              </Label>
            </LoginDiv>
            <Button
              onClick={onClick}
              style={{
                backgroundColor: buttonValid
                  ? 'rgb(137, 156, 240)'
                  : 'rgb(178, 223, 252)',
              }}
            >
              로그인
            </Button>
          </Form>
        </WrapDiv>
      </FormDiv>
    </Main>
  );
};

export default Login;

const Main = styled.main`
  min-height: 100%;
`;
const FormDiv = styled.div`
  position: absolute;
  display: flex;
  float: right;
  width: 350px;
  height: 396px;
  flex-direction: column;
  border: 1px solid #c7c2c2;
  margin: 0 0 10px;
  margin-top: 12vh;
  right: 31vw;
`;
const ImgDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 12px;
`;
const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
const WrapDiv = styled.div`
  margin: 0 auto;
`;
const LoginDiv = styled.div`
  position: relative;
  height: 38px;
  margin-top: 5px;
`;
const Label = styled.label`
  display: block;
  width: 258px;
  height: 36px;
  z-index: 1;

  border-radius: 3px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
`;
const Input = styled.input`
  display: block;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  width: 100%;
  height: 100%;
  padding: 9px 0 7px 8px;
  font-size: 12px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;
const Button = styled.button`
  width: 258px;
  height: 30px;
  margin: 8px auto;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;
