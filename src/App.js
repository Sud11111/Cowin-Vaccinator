import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import StateCity from './statecity';
import LoginAuthentiction from './authentication.js';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">CO-WIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to= '/'>Home</Nav.Link>
            <Nav.Link as={Link} to= '/certificate'>Download Certificate</Nav.Link>
            <Nav.Link as={Link} to= '/sessions'>Find Sessions</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to= '/certificate'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
        <Route path='/certificate' element={<LoginAuthentiction />}/>
        <Route path='/sessions' element={<StateCity />}/>
        <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
