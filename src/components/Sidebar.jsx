import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import Suggest from './utils/Suggest';
import Discover from './utils/Discover';

export const Sidebar = () => {
  const links = [
    {text: 'For You', url: '/', icon: <HomeIcon className='icon-theme'/>},
    {text: 'Following', url: '/followings', icon: <UsersIcon className='icon-theme'/>}
  ];
  return (
   <>
      <div className='pt-4 inline-block w-full'>
        <div className='grid items-center gap-1'>
          {links?.map((val, i) => (
            <NavLink to={val.url} key={i} className="flex items-center gap-3 h-11 px-3 rounded hover:shadow active-theme" end="true">
              {val.icon}
              <h1 className='sidebar-text-theme'>{val.text}</h1>
            </NavLink>
          ))}
          <div className='h-[0.1vh] bg-slate-200 my-1'></div>
          <Suggest/>
          <div className='h-[0.1vh] bg-slate-200 mt-3 mb-1'></div>
          <Discover/>
        </div>
      </div>
   </>
  )
}
