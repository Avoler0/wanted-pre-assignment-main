import { configureStore, createSlice } from '@reduxjs/toolkit';

const isComments = createSlice({
  name: 'commentViewState',
  initialState: {
    view: false,
    comments: [],
  },
  reducers: {
    isCommentView: (state, action) => {
      state.view = action.payload.view;
      state.comments = action.payload.comments;
    },
  },
});

const commentView = configureStore({ reducer: isComments.reducer });

export const { isCommentView } = isComments.actions;

export default commentView;
