import React, {Component} from 'react';
import './fase1.css';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

class Fase1 extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row row-header">
                        <div className="image-container">
                            <img src="https://i.ibb.co/w4BR7fN/logoHS.png" alt="LogoHS" className="image"/>
                        </div>
                    </div>
                </div>
                <div className="fase1-container">

                    <div className="fase-name">
                        <h2 className="titulo-fase1">FASE 1</h2>
                    </div>
                    <div className="fase1-container">
                        <p className="texto-guia">Se impartiran las jornadas de
                            sensibilización estudiantil a través de los
                            contenidos vistos en clase durante las siguientes 3 fases.</p>
                        <ReactPlayer
                            url={'https://www.youtube.com/watch?v=Pnp_7IaqW74&t=2734s'}
                            width='600px'
                            height='250px'
                        />
                        <h3>HAZ COMPLETADO LA FASE 1</h3>

                    </div>
                </div>
                <div className="boton-upload">
                    <Link className="btn-solid-lg3 page-scroll" to="/">Continuar</Link>
                </div>


            </>
        );
    }
}

export default Fase1;
