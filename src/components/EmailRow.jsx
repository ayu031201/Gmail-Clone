import { CheckBox, Star, CheckBoxOutlineBlank } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function EmailRow({id, sender, subject, description, time}) {
    const navi = useNavigate();

    const handleClick = () => {
        navi("/mail", {
            state: { id, sender, subject, description, time }
        });
    };

    return (
        <div onClick={handleClick} className='flex items-center mt-3 pb-2 ml-1 w-full min-h-8 border-b border-gray-300 cursor-pointer'>
            <CheckBoxOutlineBlank />

            <IconButton>
                <Star/>
            </IconButton>

            <div className='flex w-60 truncate'>
                {sender}
            </div>

            <div className='flex items-center w-190 truncate pl-2'>
                <h4 className='truncate'>
                    {subject}
                    <span className='text-gray-400'> – {description}</span>
                </h4>
            </div>

            <div className='flex text-sm w-20 ml-4 truncate'>
                {time}
            </div>
        </div>
    );
}

export default EmailRow