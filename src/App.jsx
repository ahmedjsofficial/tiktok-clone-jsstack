import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Error } from './routes/Error'
import { Followings } from './routes/Followings'
import { ForYou } from './routes/ForYou';


const App = () => {
  return (
   <>
      <div className='flex flex-col relative'>
        <Navbar />
        <main className='flex items-start justify-between flex-row mt-14 w-10/12 m-auto gap-14'>
          <section className={`max-w-[19rem] h-[92vh] overflow-y-scroll scroll-smooth w-full scroll-hidden`}><Sidebar/></section>
          <section className='w-full border h-[92vh] overflow-y-scroll scroll-smooth scroll-hidden'>
            <Routes>
              <Route index path='/' element={<ForYou/>} />
              <Route path='/followings' element={<Followings/>} />
              <Route path='*' element={<Error/>} />
            </Routes>
          </section>
        </main>
      </div>
   </>
  )
}

export default App