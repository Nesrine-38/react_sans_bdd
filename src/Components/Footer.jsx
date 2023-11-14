import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

const Footer = () => {
    return (
        <Navbar fixed="bottom" className="bg fw-bolder">
          <div className="container">
            <span className="text text-center">
              © {new Date().getFullYear()} Communauté utilisateur - Tous droits réservés
            </span>
          </div>
        </Navbar>
      );
}

export default Footer
