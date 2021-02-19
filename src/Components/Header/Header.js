import React, { useContext } from 'react';
import "./Header.css";
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="#home" className="px-4 m-auto"><img src="https://i.ibb.co/X3M1MM5/Group-1329.png" height="60px" width="203px" alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
            
                <ul  className="navbar-nav m-auto">
                    <li className="nav-item mx-3"><Link to="/main" className="mx-2">Home</Link></li>
                    <li className="nav-item mx-3"><Link to="/main" className="mx-2">Donation</Link></li>
                    <li className="nav-item mx-3"><Link to="/reglist" className="mx-2">Events</Link></li>
                    <li className="nav-item mx-3"><Link to="/main" className="mx-2">Blog</Link></li>
                    {loggedInUser.name ? <div className="mx-2 buttonStyle" variant="primary">{loggedInUser.name}</div> : <Link to='/login'><Button className="mx-2 buttonStyle" variant="primary">Register</Button></Link>}
                    <Button variant="dark buttonStyle">Admin</Button>
                     
                </ul>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          
        </div>
    );
};

export default Header;