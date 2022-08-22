import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Header } from '../../components/Header/Header';
import { Pie } from '../../components/Pie/Pie';
import './bebe-yoda.css';
import './Home.scss';

const Home = () => {
    const mensaje = ["Bienvenido!!!", "Mi nombre es ", "Luis Ramirez"];

    return (
        <div>
            <div className="home">
                <Header />
                <Row>
                    <div className="homeContainer">
                        <div className="baby-yoda-container">
                            <div className="ship">
                                <div className="force-container">
                                    <div className="baby-yoda">
                                        <div className="head">
                                            <div className="face">
                                                <div className="ears">
                                                    <div className="ear left"></div>
                                                    <div className="ear right"></div>
                                                </div>
                                                <div className="eyes">
                                                    <div className="eye"></div>
                                                    <div className="eye"></div>
                                                </div>
                                                <div className="nose"></div>
                                            </div>
                                        </div>
                                        <div className="scarf"></div>
                                    </div>
                                    <div className="front-ship">
                                        <div className="top"></div>
                                        <div className="bottom">
                                            <h2 className="title">
                                                <div id='texto'>
                                                    <ul>
                                                        {
                                                            mensaje.map((item, index) => {
                                                                return <li key={index}>{item}</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ship-shadow"></div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="texto">
                        <p>
                            Bienvenido visitante, esta es una pagina web para mostrar mi cv.
                        </p>
                    </div>
                </Row>
            </div>
            <Pie />
        </div >
    );
}

export default Home;