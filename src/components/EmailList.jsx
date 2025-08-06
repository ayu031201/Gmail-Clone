import React from 'react'
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  MoreVert,
  Person,
  Refresh,
  ChevronLeft,
  ChevronRight,
  Image,
  Label
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Section from './Section'
import EmailRow from './EmailRow'

function EmailList({ emails }) {

  return (
    <div className='w-full max-h-screen overflow-hidden rounded-xl bg-white p-2 mt-3 ml-2'>

      <div className='flex items-center justify-between'>
        <div className='flex h-10 ml-1 mt-1'>
          <CheckBoxOutlineBlank className='mt-2' />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="flex items-center space-x-2 h-6 mt-1">
          <span className="text-sm">1-50 of {emails?.length || 0}</span>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </div>

      <div className='flex items-center mt-2 h-12 gap-4 text-left bg-white'>
        <Section Icon={Image} title="Primary" selected={true}/>
        <Section Icon={Label} title="Promotions" selected={false} />
        <Section Icon={Person} title="Social" selected={false}/>
      </div>

      <div className='flex bg-def flex-col overflow-ellipsis max-h-[calc(100vh-200px)]'>
        {emails && emails.length > 0 ? (
          emails.map(({ id, to, subject, message, timestamp }) => {
            
            let formattedTime = 'Few Seconds Ago';
            try {
              if (timestamp?.toDate) {
                formattedTime = timestamp.toDate().toLocaleString();
              } else if (timestamp instanceof Date) {
                formattedTime = timestamp.toLocaleString();
              } else if (timestamp) {
                formattedTime = new Date(timestamp).toLocaleString();
              }
            } catch (error) {
              console.error('Error formatting timestamp:', error);
            }

            return (
              <EmailRow
                key={id}
                id={id}
                sender={to}
                title={''}
                subject={subject}
                description={message}
                time={formattedTime}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading emails...</div>
          </div>
        )}
      </div>

    </div>
  )
}

export default EmailList