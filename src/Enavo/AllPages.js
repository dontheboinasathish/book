import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Member from "../Images/live-visual.jpg"

const AllPages = () => {
    return (
        <div style={{ fontFamily: "Basier semi bold", height: '100vh', width: '100%', margin: '0' }}>

            <header style={{ color: "#282828", fontSize: '25px', display: 'flex', justifyContent: 'space-evenly', margin: '20px', fontFamily: 'sans-serif', }}>
                <div>
                    <h2>Design Anything, Build Everything</h2>
                    <p>Design and launch your website fast & no coding knowledge is required.</p>
                </div>
            </header>
            <div>
                <Container>
                    <Row style={{ fontFamily: "Basier semi bold", display: 'flex', justifyContent: 'space-evenly', padding: '40px', margin: '20px' }}>
                        <Col xs={2}>
                            <div style={{ borderRadius: '10px' }}>
                                <ul>
                                    <Button>Live Visual Builder</Button>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <Col xs={2}>
                            <img src= {Member} alt="imagevisivle" height={550} /></Col>
                        <Col xs={2}></Col>
                        <Col xs={2}></Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>


            </div>
        </div>
    )

}
export default AllPages;