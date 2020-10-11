import React, {Component} from 'react';
import './fase3.css'
import {Link} from "react-router-dom";

class Fase3 extends Component {
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
                        <h2 className="titulo-fase3">FASE 3</h2>
                    </div>
                <div className="acts-container">
                    <div>
                      <div className="botonfase">
                          <Link className="btn btn-secondary btn-sm" to="/">Subir video</Link>
                      </div>
                      <div className="boton-upload">
                          <Link className="btn-solid-lg3 page-scroll" to="/">Subir video</Link>
                      </div>
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

export default Fase3;
