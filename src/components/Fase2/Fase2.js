import React, {Component} from 'react';
import './Fase2.css'
import {Link} from "react-router-dom";

class Fase2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: []
        }
    }

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
                <div className="fase2-container">

                <div className="fase-name">
                    <h2 className="titulo-fase2">FASE 2</h2>
                </div>
                <div className="acts-container">
                    <div className="acts">
                        <h2 className="act-title-uno">21</h2>
                        <img className="activity-image" src="https://i.ibb.co/QcWRw5J/FUT.jpg" alt="21"/>
                    </div>
                    <div className="acts">
                        <h2 className="act-title-dos">Saltar lazo</h2>
                        <img className="activity-image" src="https://i.ibb.co/3k07xxR/clipart175591.png" alt="Saltar lazo"/>
                    </div>
                    <div className="acts">
                        <h2 className="act-title-tres">JumperJacks</h2>
                        <img className="activity-image" src="https://i.ibb.co/MVWXh9X/kisspng-jumping-jack-exercise-physical-activity-obesity-st-jumping-jacks-5b57d95b5956d6-378079971532.png" alt="JumperJacks"/>
                    </div>
                </div>
                </div>
                <div className="boton-upload">
                    <Link className="btn-solid-lg3 page-scroll" to="/">Subir video</Link>
                </div>

            </>
        );
    }
}

export default Fase2;
