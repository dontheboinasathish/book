
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Member from "../Images/home-hero-20@2x.jpg"
import { FaArrowRight } from "react-icons/fa6";

const AboutPage = () => {
    
    return (
        <div>
            <body>
                <Container >
                    <Row style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px', padding: '40px' }}>
                        <Col xs={3}></Col>
                        <Col xs={3}></Col>
                        <Col xs={2}>
                            <h1 style={{ fontSize: '50px', fontFamily: 'inherit' }}>
                                <span style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px', margin: '20px', }}  ></span>
                                The Ultimate<br />
                                Creative<br />
                                Website Builder
                            </h1>
                            <div>
                                <p style={{ fontSize: '20px', fontFamily: 'unset' }}>
                                    Trusted by beginners, marketers & professionals;<br />
                                    Built with usability and performance in mind.
                                </p>
                            </div>
                            <div>
                                <Button variant="dark" style={{ padding: '10px', fontSize: '30px', borderRadius: '10px', background: 'black', color: 'white', display: 'flex', justifyContent: 'center' }}>Start Building<FaArrowRight /></Button>
                            </div>
                            <div >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h4 style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>925k+<br />
                                        <p style={{ fontSize: '17px', fontFamily: 'sans-serif' }}>People Trust Avada</p></h4>
                                    <div>
                                        <h4 style={{ fontSize: '40px', fontFamily: 'sans-serif' }}>25k+<br /> <p style={{ fontSize: '17px', fontFamily: 'sans-serif' }}>Average 5-Star Reviews</p> </h4>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}>
                            <img src={Member} alt="imagevisivle" height={700} />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
            </body>

        </div>
    )
}
export default AboutPage;
