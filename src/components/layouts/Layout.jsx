import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from './Header'
import '../../assets/styles/layout.css'
import SideNav from './Sidebar'

const Layout = () => {
  return (
    <>
     <main>
         <div className='pageWrapper d-flex'>
         <aside className='sidebarArea'>
                 <SideNav />
                 </aside>
             <div className='contentArea'>
               <Header />
               <Container className='p-4 wrapper' fluid>
                 <Outlet />
               </Container>
             </div>
         </div>
     </main>
    </>
  )
}

export default Layout