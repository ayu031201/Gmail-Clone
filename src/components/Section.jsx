import React from 'react'

function Section({Icon,title, selected}) {
  return (
    <div className={`flex items-center w-50 h-full ${selected ? ' pl-1 bg-def text-blue-500 font-bold' : 'text-gray-800'}`}>
        <Icon className="mr-4" />
        <span>{title}</span>
    </div>

  )
}

export default Section