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
                <div className="container" >
                    <div className="row row-header" style={{"justify-content":"center","font-size":"40px", "font-weight":"bold" }}>
                        <div>
                            <p>Selecciona la actividad de tu preferencia:</p>
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
                        <h2 className="act-title-tres">Jumping Jacks</h2>
                        <img className="activity-image" src="https://i.ibb.co/MVWXh9X/kisspng-jumping-jack-exercise-physical-activity-obesity-st-jumping-jacks-5b57d95b5956d6-378079971532.png" alt="JumperJacks"/>
                    </div>
                </div>
                </div>
                <div className="container" >
                    <div className="row row-header" style={{"font-size":"20px",  }}>
                        <div>
                            <p>Haz click en el boton inferior para grabar el video la actividad que seleccionaste, ten en cuenta: Tendras 5 minutos para hacer la
                            mayor cantidad de saltos o repeticiones segun sea la actividad y tendras que compartir tu pasaporte con tus allegados y amigos.


                            </p>

                            <p>
                                        ¡Entre mayor sea la cantidad patrocinadores mas sonrisas daras!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="boton-upload">
                    <Link className="btn-solid-lg3 page-scroll" to="/">Video</Link>
                </div>

            </>
        );
    }
}

export default Fase2;
