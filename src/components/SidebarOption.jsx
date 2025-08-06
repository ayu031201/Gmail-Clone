import React from 'react';

function SidebarOption({ Icon, title, selected }) {
  return (
    <div className="-mt-3.5 flex flex-col w-68 p-2 space-y-2">
      <div
        className={`ml-2 flex items-center space-x-2 p-2 rounded-2xl cursor-pointer ${selected ? 'bg-blue-200 font-semibold text-black' : ''
        }`}
      >
        <Icon />
        <span className="ml-3">{title}</span>
      </div>
    </div>
  );
}

export default SidebarOption;
