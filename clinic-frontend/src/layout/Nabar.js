import React from 'react'
import {Navbar,Container,Nav,Form,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css';
import {BsCalendarCheck} from 'react-icons/bs'
function Nabar() {
  return (
    // variant={"dark"}
    <div>
    <Navbar  expand="lg" className='Navbar-container'>
   <Container fluid >
   <Navbar.Brand href="/" >
   <Nav.Link className='navbare' as={Link} to={"/"} className='Navbar-logo' >LOGO</Nav.Link>
      </Navbar.Brand>
   <Navbar.Toggle aria-controls="navbarScroll" />
   <Navbar.Collapse id="navbarScroll">
     
        <Nav className="justify-content-end flex-grow-1 pe-3 navx">
        <Nav.Link className='navbare' as={Link} to={"/rangsu"}>RĂNG SỨ THẨM MỸ</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/blog"}>CHỈNH NHA-NIỀNG RĂNG</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/news"}>TRỒNG RĂNG IMPLANT</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/contac"}>NHA KHOA TỔNG QUÁT</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/list"}>BẢNG GIÁ</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/about"}>VỀ CHÚNG TÔI</Nav.Link>

       
      
     </Nav>
      <Form className="d-flex">
       
       <Button variant="outline-success" className='onli'> 
       <Nav.Link  className='navbare' as={Link} to={"/signIn"}>Login</Nav.Link>
       </Button>
     </Form>
     <a href='đgghg' className='Navbar-datlich'><BsCalendarCheck/></a>
   </Navbar.Collapse>
 </Container>
</Navbar>

   </div>
   
  )
}

export default Nabar