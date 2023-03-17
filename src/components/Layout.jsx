import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Container, Col } from 'reactstrap'
import Header from './Header'
import '../assets/styles/layout.css'
import SideNav from './Sidebar'
import { Sidebar } from 'react-pro-sidebar'

const Layout = () => {
  return (
    <>
     <main>
         <div className='pageWrapper d-flex'>
                 <SideNav />
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