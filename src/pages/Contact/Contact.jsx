import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import './Contact.css';
import { Header } from '../../components/Header/Header';
import { Pie } from "../../components/Pie/Pie";

export const Contact = () => {
    return (
        <div className="contact">
            <Header />
            <Row>
                <Col xs={12}>
                    <div>
                        <h1>Medios de contacto</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th><AiOutlineWhatsApp size={35} /></th>
                                    <th><FiSmartphone size={35} /></th>
                                    <th><AiOutlineMail size={35} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Whatsapp</td>
                                    <td>Celular</td>
                                    <td>Email</td>
                                </tr>
                                <tr>
                                    <td>+50250828951</td>
                                    <td>+50250828951</td>
                                    <td>ramirez.luis980@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>FaceBook</th>
                                    <th>Instagram</th>
                                    <th>Twitter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <BsFacebook size={25} />
                                    </td>
                                    <td>
                                        <BsInstagram size={25} />
                                    </td>
                                    <td>
                                        <FiTwitter size={25} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row>
                <Pie />
            </Row>
        </div>
    )
}