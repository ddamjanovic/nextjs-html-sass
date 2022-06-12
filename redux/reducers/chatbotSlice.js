import { createSlice } from '@reduxjs/toolkit';

export const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState: {
    infoBotMode: false,
    isChatbotClosed: true,
    infoBotContent:
      'In this info box the explanation text of the corresponding area you have clicked on will be shown. Now you can minimize this popup and click on your area of interest'
  },
  reducers: {
    setInfoBotMode: (state, value) => {
      state.infoBotMode = value.payload;
    },
    setInfoBotContent: (state, value) => {
      state.infoBotContent = value.payload;
    },
    setisChatbotClosed: (state, value) => {
      state.isChatbotClosed = value.payload;
    },

  }
});

export const { setInfoBotMode, setInfoBotContent, setisChatbotClosed } = chatbotSlice.actions;

export default chatbotSlice.reducer;
