import { configureStore } from '@reduxjs/toolkit';
import chatbotReducer from '../reducers/chatbotSlice';

export default configureStore({
  reducer: {
    chatbot: chatbotReducer,
  },
});
