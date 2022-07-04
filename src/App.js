import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import PreAssignmentGuide from './pages/PreAssignmentGuide';
import Login from './pages/Login';
import Main from './pages/Main';
function App() {
  return (
    <>
      <Selection>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<PreAssignmentGuide />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Selection>
    </>
  );
}

export default App;

const Selection = styled.section`
  min-height: 100vh;
  overflow: hidden;
`;
