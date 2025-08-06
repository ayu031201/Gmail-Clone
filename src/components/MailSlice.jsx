// MailSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: "mail",

  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    // Action to store the currently selected mail
    openMail: (state, action) => {
      state.selectedMail = action.payload;
    },

    // Action to open the compose window
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    // Action to close the compose window
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
