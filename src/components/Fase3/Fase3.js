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
                    <div className="container-botones">
                      <div >
                          <p>Estimado patrocinador por favor realice el pago correpondiente a su ayuda pactada anteriormenete con el estudiante patrocinado.</p>
                          <Link className="btn-solid-lg3 page-scroll btnasas" to="/">Realizar pago</Link>
                      </div>
                      <div className="separaciona">
                          <p>Una vez realizado el pago de su aporte por favor dar click en el boton formulario de pago el cual le llevara a un formulario donde debera llenar datos personales yadjuntar el comprobante de pago.</p>
                          <Link className="btn-solid-lg3 page-scroll btnasas" to="/">Formulario de apoyo</Link>
                      </div>
                    </div>
                    <div className="container-mango">
                      <img className="mango" src="https://i.ibb.co/qJDy9s1/mango.png" alt="Mani" />
                    </div>
                </div>
              </div>

            </>
        );
    }
}

export default Fase3;
