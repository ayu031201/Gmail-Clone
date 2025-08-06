import React from 'react';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Draggable from 'react-draggable';
import { useForm } from 'react-hook-form';
import { db } from './Firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function SendMail({ onClose, onEmailSent }) {

  const {register, handleSubmit, reset} = useForm();

  const onSubmit = async (data) => {

    const newEmail = {
      id: Date.now().toString(),
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: { toDate: () => new Date() }
    };

    if (onEmailSent) {
      onEmailSent(newEmail);
    }

    if (onClose) {
      onClose();
    }

    reset();

    addDoc(collection(db, 'emails'), {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp()
    }).then(() => {
      console.log('Email saved to Firebase');
    }).catch((error) => {
      console.error('Error saving to Firebase:', error);
    });
  };
  
  return (

    <div className="fixed w-full max-w-sm sm:max-w-md md:w-96 right-4 top-4 bg-white border border-gray-300 rounded-sm shadow-lg z-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between h-10 items-center mb-2 bg-blue-100 w-full rounded-sm">

          <h2 className="text-lg font-semibold ml-2">New Message</h2>

          <Close onClick={onClose} className='mr-1 cursor-pointer'/>

        </div>

        <div className="p-2">
          <input name='to' {...register('to' , {required:true})} type="email" placeholder="To" className="w-full mb-2 p-2 rounded border-b border-gray-300 focus:outline-none focus:border-blue-500" />

          <input name='subject' {...register('subject', {required:true})} type="text" placeholder="Subject" className="w-full mb-2 p-2 rounded border-b border-gray-300 focus:outline-none focus:border-blue-500" />

          <textarea name='message' {...register('message', {required:true})} rows="5" placeholder="Write your message..." className="w-full p-2 rounded border border-gray-300 resize-none focus:outline-none focus:border-blue-500"></textarea>

          <button type='submit' className="mt-2 bg-red-400 hover:bg-red-500 text-white w-full h-10 rounded transition-colors">Send</button>
        </div>
      </form>
    </div>

  );
}

export default SendMail;