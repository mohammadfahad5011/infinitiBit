// import React from 'react';
// import "./Navbar.css"
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function NavbarComponent() {
//   return (
//     <>
//       {['md'].map((expand) => (
//         <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
//           <Container>
//             <Navbar.Brand href="#home" className='logo'>
//                  <img src="/images/logo.png" alt="Brand Logo" className='logo_img'/>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton></Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-start flex-grow-1 ps-3">
//                   <Nav.Link href="#home">Home</Nav.Link>
//                   <Nav.Link href="#timeline">Blog</Nav.Link>
//                   <Nav.Link href="#team" >Team</Nav.Link>
//                   <Nav.Link href="#feature">Features</Nav.Link>
//                   <Nav.Link href="#vedeo">About</Nav.Link>
//                 </Nav>
//                   <Button className='navbarBtn'>Download Whitepaper</Button>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default NavbarComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="md" bg="transparent">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src="/images/logo.png" alt="Brand Logo" className="logo_img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="justify-content-start flex-grow-1 ps-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#timeline">Blog</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#feature">Features</Nav.Link>
            <Nav.Link href="#vedeo">About</Nav.Link>
          </Nav>
          <Button className="navbarBtn" >Download Whitepaper</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;


