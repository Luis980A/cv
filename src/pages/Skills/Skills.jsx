import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { DiJava } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiPython } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiOracle } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import Carousel from 'react-bootstrap/Carousel';
import "./Skills.css";
import { Header } from '../../components/Header/Header';
import { Pie } from "../../components/Pie/Pie";

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skills">
                <Header />
                <Row>
                    <Col xs={12}>
                        <h1>Mis habilidades son:</h1>
                        <Carousel>
                            <Carousel.Item>
                                <Row>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Lenguaje de Progracion'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><DiJava size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <ProgressBar now={80} label={`${80}%`} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{'framework Spring'}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Lenguaje de Progracion'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><SiPython size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{'framework Django'}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Lenguaje de Progracion'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><TbBrandJavascript size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{'framework Angular'}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Base de Datos Relacional'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><SiMysql size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{''}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Base de Datos Relacional'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><SiOracle size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{''}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Base de Datos Relacional'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><SiMicrosoftsqlserver size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{''}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col sm={4}>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>{'Base de Datos No Relacional'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><SiMongodb size={75} /></td>
                                                </tr>
                                                <tr>
                                                    <td><ProgressBar now={80} label={`${80}%`} /></td>
                                                </tr>
                                                <tr>
                                                    <td>{''}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Pie />
                </Row>
            </div>
        );
    }
}