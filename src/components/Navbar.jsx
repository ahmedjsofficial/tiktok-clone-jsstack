import React from 'react'
import { NavLink } from 'react-router-dom';
import TikTokLogo from '../assets/tiktok-black.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
   <>
      <header className='flex items-center justify-center h-14 bg-theme-light fixed top-0 left-0 right-0'>
        <nav className='flex items-center justify-between w-10/12 m-auto'>
          <NavLink to={`/`} className="flex items-center">
            <img src={TikTokLogo} alt="tiktok/logo" className='w-28 h-auto object-fill' />
          </NavLink>
          <ul className='flex items-center'>
            <form className='flex items-center relative'>
              <input type={'search'} placeholder='Search Accounts' name='search' className='w-96 border border-rose-400 py-1 px-3 rounded placeholder:text-rose-500 text-rose-500 placeholder:text-sm focus:outline-none' />
              <button type='button' className='absolute right-0 bg-rose-400 h-full w-11 flex items-center justify-center rounded-r active:scale-90'><MagnifyingGlassIcon className='icon-theme text-white' /></button>
            </form>
          </ul>
          <ul className='flex items-center'>
            <li><button type='button' className='button-theme bg-rose-400'>Log In</button></li>
          </ul>
        </nav>
      </header>
   </>
  )
}
