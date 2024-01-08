import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavItem } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { TiArrowRight } from "react-icons/ti";
import { GrStar } from "react-icons/gr";
import { IoChevronDownSharp } from "react-icons/io5";
import AboutPage from "./AboutPage";
import CardsDesing from "./CardsDesing";
import AllPages from "./AllPages";
import '../Enavo/Envanto.css'


const Envanto = () => {
    return (
        <div style={{ height: '100vh', margin: '0px', padding: '0px' }}>
            <nav className="navbar">
                <div className="navdiv">
                    <div className="logo">
                        <h3 style={{ color: 'white', fontSize: '20px' }}>enavanto<span className="spanword" style={{ color: " rgb(183, 232, 140)", fontFamily: '' }}>market</span></h3>
                    </div>
                    <ul>
                        <button className="buttonsubnow">Buy now</button>
                    </ul>
                </div>
            </nav>
            <div>
                <header>
                    <Container>
                        <Row style={{ fontWeight: 'inherit', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'space-evenly', padding: '10px', margin: '20px', fontSize: '50px' }}>
                            <Col xs={2}>
                                AVada<span style={{ color: 'green' }}>:</span>
                            </Col>
                            <div >
                                <Col style={{ fontFamily: 'sans-serif', display: 'flex', padding: '10px', margin: '20px', justifyContent: 'space-around', fontSize: '17px', color: 'black', background: 'white', gap: '20px', }} >
                                    <Col xs={2}>
                                        <NavItem href="#action/3.1"  >Avada </NavItem>
                                    </Col>
                                    <div>
                                        <Col xs={2}><NavItem href="#action/3.1" >Avada For </NavItem>
                                        </Col>
                                    </div>
                                    <Col xs={2}>
                                        <NavItem href="#action/3.1">Hosting</NavItem>
                                    </Col>
                                    <Col xs={1}>
                                        <NavItem href="#action/3.1">Customization</NavItem>
                                    </Col>
                                    <Col xs={1}>
                                        <NavItem href="#action/3.1">Resources</NavItem>
                                    </Col>
                                </Col>
                            </div>
                            <Col xs={2}>
                                <Button style={{ font: 'inherit', fontSize: '17px', color: 'black', padding: '10px', margin: '20px', borderRadius: '5px', }} variant="outline-secondary"><GrStar />My Avada </Button>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <div>
                    <AboutPage />
                </div>
                <div>
                    <CardsDesing />
                </div>
                <div>
                    <AllPages/>
                </div>
            </div>
        </div>
    )
}
export default Envanto;