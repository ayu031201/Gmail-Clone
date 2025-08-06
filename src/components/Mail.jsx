import { Archive, ArrowBack, Delete, MarkAsUnread, More, MoveToInbox, Print, Window, Report } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Mail() {
    const navi = useNavigate();
    const location = useLocation();
    
    const emailData = location.state;

    return (
        <div className='mt-3 ml-3 w-full'>
            <div className='flex gap-2 h-8 items-center'>
                
                <IconButton onClick={() => navi("/")}>
                    <ArrowBack/>
                </IconButton>

                <IconButton>
                    <Archive/>
                </IconButton>

                <IconButton>
                    <Report/>
                </IconButton>

                <IconButton>
                    <Delete/>
                </IconButton>

                <span className='text-gray-400 relative -top-0.5'>{"|"}</span>

                <IconButton>
                    <MarkAsUnread/>
                </IconButton>

                <IconButton>
                    <MoveToInbox/>
                </IconButton>

                <IconButton>
                    <More/>
                </IconButton>

            </div>
            
            <div className='ml-11 mt-6'>
                {emailData ? (
                    <>
                        <div className='flex w-full justify-between mb-5'>
                            <span className='text-2xl font-semibold'>{emailData.subject}</span>
                            <div className='flex gap-3'>
                                <Print/>
                                <Window/>
                            </div>
                        </div>

                        <div className="text-gray-600 mb-1 text-sm">
                            From: <strong>{emailData.sender}</strong>
                        </div>
                        <div className="text-gray-600 mb-1 text-sm">
                            Time: <strong>{emailData.time}</strong>
                        </div>
                        <div className="mt-4 text-base">
                            {emailData.description}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-400">No email selected.</p>
                )}
            </div>
        </div>
    )
}

export default Mail