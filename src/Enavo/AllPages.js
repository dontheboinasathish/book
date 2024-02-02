import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LiveVisual from "../Images/live-visual.jpg";
import LayoutBuilder from "../Images/layout-builder-4.jpg";
import HeaderBuilder from "../Images/header-builder-5.jpg";
import MegaMenu from "../Images/mega-menu-feature.jpg";
import FooterBuilder from "../Images/footer-builder-5.jpg";
import FormBuilder from "../Images/form-builder.jpg";
import Canvas from "../Images/off-canvas-feature.jpg";
import setup from "../Images/setup-wizard-1.jpg";
import performance from "../Images/performance-wizard.jpg";
import { FaAdn } from "react-icons/fa";

const AllPages = () => {
    const [listOfImages, setListOfImages] = useState([
        { id: 1, url: LiveVisual, text: "Live Visual Builder", Icon: <FaAdn /> },
        { id: 2, url: LayoutBuilder, text: "Layout Builder" },
        { id: 3, url: HeaderBuilder, text: "Header Builder" },
        { id: 4, url: MegaMenu, text: "Mega Menu" },
        { id: 5, url: FooterBuilder, text: "Footer Builder", },
        { id: 6, url: FormBuilder, text: "Form Builder", },
        { id: 7, url: Canvas, text: "Canvas", },
        { id: 7, url: setup, text: "setup-Wizrad", },
        { id: 7, url: performance, text: "performance-Wizrad", },
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    const getImage = () => {
        return listOfImages.filter((e, i) => i == currentIndex && e)
    }
    console.log(getImage(), "uuuuu")
    return (
        <div style={{ fontFamily: "Basier semi bold", height: '100vh', width: '100%', margin: '0' }}>

            <header style={{ color: "#282828", fontSize: '25px', display: 'flex', justifyContent: 'space-evenly', margin: '20px', fontFamily: 'sans-serif', }}>
                <div>
                    <h1>Design Anything, Build Everything</h1>
                    <p>Design and launch your website fast & no coding knowledge is required.</p>
                </div>
            </header>
            <div>
                <Container>
                    <Row style={{ fontFamily: "Basier semi bold", display: 'flex', justifyContent: 'space-evenly', padding: '40px', margin: '20px' }}>
                        <Col xs={2}></Col>
                        <Col xs={2}>
                            <div style={{ borderRadius: '10px' }}>
                                <ul style={{ listStyleType: "none" }}>
                                    {
                                        listOfImages.map((e, i) => {
                                            return (
                                                <li style={{ margin: '35px', padding: "8px", fontSize: "20px", fontWeight: 500, display: "flex", alignItems: "center", backgroundColor: currentIndex == i && "#F6F6F6", cursor: "pointer" }} onClick={() => setCurrentIndex(i)}>{e.Icon}{e.text}</li >
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <Col xs={4}>
                            <img src={getImage()?.[0]?.url} height="800px" />
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
export default AllPages;