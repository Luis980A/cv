import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillLinkedin } from "react-icons/ai";
import "./Pie.css";

export const Pie = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Row>
                    <Col md={12}>
                        <div className="text-center">
                            <span className="text-muted">
                                <small>
                                    <strong>
                                        <a href="https://www.linkedin.com/in/luis-ram%C3%ADrez-a29630135/" target="_blank">
                                            <AiFillLinkedin size={50} />
                                        </a>
                                    </strong>
                                </small>
                            </span>
                        </div>
                    </Col>
                </Row>
            </footer>
        </React.Fragment>
    )
}