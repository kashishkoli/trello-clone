import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather';

export default function Sidebar() {
  const [collapsed , setCollapsed ] = useState (false);

  return (
    <div 
    className={`bg-[#121417] h-[calc(100vh-3rem)] border-r
       transition-all linear duration-500 border-r-[#9fadbc29] 
         flex-shrink-0 ${collapsed ? "w-[40px]": "w-[280px]"}`}>

      {collapsed &&  <div className=" p-2 ">
        <button 
         onClick={() => setCollapsed(!collapsed)}
         className=" hover:bg-slate-600 rounded-sm">
          <ChevronRight size={18} ></ChevronRight>
        </button>
      </div>}

      {!collapsed && <div className='p-2'>
       
        <button 
        onClick={() => setCollapsed(!collapsed)}
        className=" hover:bg-slate-600 rounded-sm">
          <ChevronLeft size={18} ></ChevronLeft>
        </button>
      </div>}

    </div>
  )
}