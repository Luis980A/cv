import React from "react";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import './Projects.css';
import { Header } from '../../components/Header/Header';
import { Pie } from "../../components/Pie/Pie";

export const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <Row>
                <Col xs={9}>
                    <Table className="proyecto" responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    Nombre del proyecto
                                </th>
                                <th>
                                    Descripcion
                                </th>
                                <th>
                                    Lenguaje de programacion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://github.com/Luis980A" className="link">
                                        Plantilla
                                    </a>
                                </td>
                                <td>
                                    plantilla de formulario de datos con coneccion a la base de datos
                                </td>
                                <td>
                                    Java
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://github.com/Luis980A" className="link">
                                        plantilla-de-datos-basico
                                    </a>
                                </td>
                                <td>
                                    plantilla de base de datos practica con coneccion a la base de datos
                                </td>
                                <td>
                                    Java
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://github.com/Luis980A" className="link">
                                        rest-angular-y-spring-boot
                                    </a>
                                </td>
                                <td>
                                    app de registro de alumnos con rest y fronted
                                </td>
                                <td>
                                    Java Spring y Angular js
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://github.com/Luis980A" className="link">
                                        chat-basico
                                    </a>
                                </td>
                                <td>
                                    app de chat basico con websockets
                                </td>
                                <td>
                                    Java Spring
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col xs={3}>
                    <p>Lista de Proyectos Personales</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>
                        <small className="text-muted">Nota los proyectos estan subidos github</small>
                        {' '}
                        <BsGithub size={25} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Pie />
            </Row>
        </div>
    )
}