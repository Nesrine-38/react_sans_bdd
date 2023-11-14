import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
    <div className='logo'>
    <h2 className='titre'>Communauté Utilisateur</h2>
    </div>
    <Navbar expand="lg" className="bg my-3">
      <Container fluid>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link className='text' href="/"><strong>Accueil</strong></Nav.Link>
            <Nav.Link className='text' href="/users"><strong>Nos utilisateurs</strong></Nav.Link>
            <Nav.Link className='text' href="users/add"><strong>Ajouter un utilisateur</strong> </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
