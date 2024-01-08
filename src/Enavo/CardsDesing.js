import React from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import Image1 from "../Images/for-beginners@2x.jpg";
import Image2 from "../Images/for-marketers@2x.jpg";
import Image3 from "../Images/for-pro-2@2x.jpg";
import "../Enavo/Envanto.css"


const CardsDesing = () => {
    return (
        <div >
            <Row style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px', fontFamily: 'sans-serif', }}>
                <Col xs={1}></Col>
                <Col xs={1}></Col>
                <div className="card_div">
                    <Col className="hovering" xs={3}>
                        <Card style={{ display: 'flex', justifyContent: 'center', width: '18rem', backgroundColor: "#ffe979", height: '470px', width: '350px', borderRadius: '10px' }} >
                            <Card.Body>
                                <Card.Title ><p>For Beginners</p>
                                </Card.Title>
                                <Card.Text>
                                    <h2>Lunch Your First<br /> Website</h2>
                                </Card.Text>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <img src={Image1} alt="images" height={150} />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Col xs={1}>
                                    <div className="buttons1stcard m-4">
                                        <div>
                                            <Button>Visual Builder</Button>
                                            <Button>Documentation</Button>
                                        </div>
                                        <Button>Support</Button>
                                        <Button>Prebuilt Website</Button>
                                    </div>
                                </Col>

                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="card_div">
                    <Col xs={3}>
                        <Card className="hovering" style={{ display: 'flex', justifyContent: 'center', width: '18rem', backgroundColor: '#b7f598', height: '470px', width: '350px', borderRadius: '10px' }} >
                            <Card.Body>
                                <Card.Title ><p>For Marketers</p>
                                </Card.Title>
                                <Card.Text>
                                    <h2>Generate Leads and <br /> Conversations</h2>
                                </Card.Text>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <img src={Image2} alt="images" height={150} />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Col xs={1}>
                                    <div className="buttons1stcard">
                                        <Button>Design</Button>
                                        <Button>SEO</Button>
                                        <Button>Shop Builder</Button><br />
                                        <Button>Form Builder</Button>
                                    </div>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="card_div">
                    <Col xs={2}>
                        <Card className="hovering" style={{ display: 'flex', justifyContent: 'center', width: '18rem', backgroundColor: '#7ed5f0', height: '470px', width: '350px', borderRadius: '7px' }} >

                            <Card.Body style={{ padding: "10px", }}>
                                <Card.Title><p>For Professionals</p>
                                </Card.Title>
                                <Card.Text>
                                    <h2>Take Your Projects<br /> To The Next Level</h2>
                                </Card.Text>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <img src={Image3} alt="images" height={150} />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Col xs={1}>
                                    <div className="buttons1stcard">
                                        <Button>All-In-One</Button>
                                        <Button>Patcher</Button><br />
                                        <Button>WACG</Button><br />
                                        <Button>Dynamic Data</Button>
                                    </div>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <Col xs={1}></Col>
                <Col xs={1}></Col>
            </Row>
        </div>
    )
}
export default CardsDesing;