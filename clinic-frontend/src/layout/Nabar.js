import React from 'react'
import {Navbar,Container,Nav,Form,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Nabar() {
  return (
    
    <div>
    <Navbar bg="dark" variant={"dark"} expand="lg">
   <Container fluid>
   <Navbar.Brand href="#">Logo  </Navbar.Brand>
   <Navbar.Toggle aria-controls="navbarScroll" />
   <Navbar.Collapse id="navbarScroll">
     {/* <Nav
       className=" mx-auto my-2 my-lg-0"
       style={{ maxHeight: '100px' }}
       navbarScroll > */}
        <Nav className="justify-content-end flex-grow-1 pe-3 navx">
        <Nav.Link className='navbare' as={Link} to={"/"}>Trang Chủ</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/about"}>Giới Thiệu</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/blog"}>Dịch Vụ</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/news"}>Tin Tức</Nav.Link>
       <Nav.Link  className='navbare' as={Link} to={"/blog"}>Liên Hệ</Nav.Link>

       
      
     </Nav>
      <Form className="d-flex">
       {/* <FormControl
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
       />  */}
       <Button variant="outline-success" className='onli'> 
       <Nav.Link  className='navbare' as={Link} to={"/signIn"}>Login</Nav.Link>
       </Button>
      
     </Form>
   </Navbar.Collapse>
 </Container>
</Navbar>

   </div>
   
  )
}

export default Nabar