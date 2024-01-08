import { React } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../src/Enavo/Envanto.css"

function App() {
    return (
        <div className="App">
            <Row style={{ paddingTop: "10px" }}>
                <Col xs={12} sm={2} md={2}>Avada:</Col>
                <Col style={{ display: "flex", justifyContent: 'space-evenly' }} xs={12} sm={8} md={8} >
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Avada</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1" style={{ fontSize: '14px', color: "black" }}>Avada For</NavDropdown.Item>
                    </NavDropdown>

                    <Button variant="secondary" size="lg" style={{ fontSize: "14px", color: "black" }} >Hosting</Button>

                    <Button variant="secondary" size="lg" style={{ fontSize: "14px" }}>Customization</Button>

                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Avada For</NavDropdown.Item>

                    </NavDropdown>
                </Col>
                <Col xs={12} > <Button variant="outline-secondary">My Avada</Button></Col>
            </Row>
        </div>
    );
}

export default App;
