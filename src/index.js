import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import commentView from './CommentState'
import App from './App';
import GlobalStyles from './styles/globalStyles';
import GNB from './pages/GNB';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
    <Provider store={commentView}>
      <GNB />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
