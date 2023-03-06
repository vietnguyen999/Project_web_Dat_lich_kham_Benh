import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { removeToken } from '../helpers';
import { useNavigate } from "react-router-dom";
import './Nabar.css'

function Nabar() {
  const { user, setUser } = useAuthContext();
  console.log(user)
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };
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
       {/* <FormControl
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
       />  */}
       {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline-success" className='onli'> 
            <Nav.Link  className='navbare' as={Link} to={"/signIn"}>Login</Nav.Link>
            </Button>
          </>
        )}
       
   </Navbar.Collapse>
 </Container>
</Navbar>

   </div>
   
  )
}

export default Nabar