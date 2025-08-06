import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../components/MailSlice';
// import userReducer from '../components/UserSlice';


export const store = configureStore({

  reducer: {
    mail: mailReducer,
  },
  
});