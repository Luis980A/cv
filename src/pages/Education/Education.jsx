import { Card, CardBody, Col, Container, Row, Table } from "react-bootstrap";
import React from 'react';
import './Education.css';
import { Header } from '../../components/Header/Header';
import { Pie } from "../../components/Pie/Pie";
const array = [
    {
        "institution": "Escuela Rural Mixta A.P.G",
        "last_degree": "6to grado",
        "year": "2000",
        "state": "Finalizado"
    },
    {
        "institution": "Instituto Guillermo P. Alvarez",
        "last_degree": "Basicos",
        "year": "2015",
        "state": "Finalizado"
    },
    {
        "institution": "Instituto Guillermo P. Alvarez",
        "last_degree": "Bachillerato en Ciencias y Letras",
        "year": "2016",
        "state": "Finalizado"
    },
    {
        "institution": "Universidad Mariano Galvez",
        "last_degree": "Ingenieria de Sistemas",
        "year": "2022",
        "state": "En curso"
    }
];

const mensaje = "Historial Academico";

const Education = () => {
    return (
        <div className="education">
            <Header />
            <Row>
                <Col xs={6}>
                    <div>
                        <p>{mensaje}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Institucion</th>
                                <th>Ultimo grado cursado</th>
                                <th>Año</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                array.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.institution}</td>
                                            <td>{item.last_degree}</td>
                                            <td>{item.year}</td>
                                            <td>{item.state}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Pie />
            </Row>
        </div>
    )
}

export default Education;