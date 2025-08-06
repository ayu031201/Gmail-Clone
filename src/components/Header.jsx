import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { ContactSupport, Search } from '@mui/icons-material';
import { Tune } from '@mui/icons-material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Settings } from '@mui/icons-material';
import { Apps } from '@mui/icons-material';

function Header() {
  return (
    <div className="flex bg-def items-center px-4 py-2 border-b border-gray-200">

      <div className="flex items-center w-50">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="gmail-icon.png"
          alt="Gmail"
          className="ml-3 h-6 w-auto object-contain"
        />
        <h1 className="ml-3 text-bold text-3xl">Gmail</h1>
      </div>

      <div className="flex items-center w-200 mx-19">
        <IconButton className='absolute left-10 z-10'>
          <Search className="text-gray-500" />
        </IconButton>
        <input
          type="text"
          placeholder="Search Mail"
          className="w-300 h-12 bg-zinc-100 rounded-full py-2 pl-12 pr-12 focus:outline-none focus:bg-white focus:shadow-md"
        />
        <IconButton className='absolute right-10 z-10'>
          <Tune className="text-gray-500" />
        </IconButton>
      </div>

      <div className="flex ml-48 items-center space-x-2">
        <IconButton>
          <ContactSupportIcon className="text-gray-500" />
        </IconButton>
        <IconButton>
          <Settings className="text-gray-500" />
        </IconButton>
        <IconButton>
          <Apps className="text-gray-500" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;