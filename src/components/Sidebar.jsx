import React from 'react'
import { IconButton } from '@mui/material'
import { ArrowDropDown, Edit, More } from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import { Inbox, Star, Send, Drafts } from '@mui/icons-material';
import { History } from '@mui/icons-material';
import { useState } from 'react';
import SendMail from './SendMail';

function Sidebar({ addNewEmail }) {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const onComposeClick = () => {
    setIsComposeOpen(true);
  }

  const handleEmailSent = (newEmail) => {
    console.log('Email sent:', newEmail); 

    if (addNewEmail) {
      addNewEmail(newEmail);
    }
    setIsComposeOpen(false);
  };

  const handleClose = () => {
    setIsComposeOpen(false);
  };

  return (
    <div className='bg-def'>
        <button onClick={onComposeClick} className='bg-blue-200 h-15 w-45 rounded-2xl mt-5 ml-2 text-gray-900 shadow-sm mb-6 font-bold'>
          Compose
        </button>

        <IconButton className='flex relative right-43'>
            <Edit/>
        </IconButton>

        <SidebarOption Icon={Inbox} title="Inbox" selected={true}/>
        <SidebarOption Icon={Star} title="Starred" selected={false}/>
        <SidebarOption Icon={History} title="Snoozed" selected={false}/>
        <SidebarOption Icon={Send} title="Sent" selected={false}/>
        <SidebarOption Icon={Drafts} title="Drafts" selected={false}/>
        <SidebarOption Icon={ArrowDropDown} title="More" selected={false}/>

        {isComposeOpen && (
          <SendMail 
            onClose={handleClose} 
            onEmailSent={handleEmailSent}
          />
        )}

    </div>
  )
}

export default Sidebar