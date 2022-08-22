import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import './Experience.css'
import { Header } from '../../components/Header/Header';
import { Pie } from "../../components/Pie/Pie";

const array = [
    {
        "empresa": "Compu Mayoristas",
        "puesto": "Encargado de Bodega",
        "inicio": "2015",
        "fin": "2019",
    },
    {
        "empresa": "Codigo-go",
        "puesto": "programador",
        "inicio": "2021",
        "fin": "2022",
    }
];

export const Experience = () => {
    return (
        <div className="experience">
            <Header />
            <Row>
                <Col xs={6}>
                    <div>
                        <p>Esta es una lista de las empresas donde en laborado</p>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="cardExperiencia">
                        <Table responsive striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Empresa</th>
                                    <th>Puesto</th>
                                    <th>Desde Año</th>
                                    <th>Hasta Año</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.empresa}</td>
                                                <td>{item.puesto}</td>
                                                <td>{item.inicio}</td>
                                                <td>{item.fin}</td>
                                            </tr>
                                        );
                                    })
                                }
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