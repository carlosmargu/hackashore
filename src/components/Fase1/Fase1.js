import React, { Component } from 'react';
import './fase1.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

class Fase1 extends Component {
    render() {
        return (
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 quien1">
                    <h1>FASE 1</h1>
                  </div>
                  <div className="col-lg-8 video">
                    <h4>Se impartiran las jornadas de
                        sensibilización estudiantil a través de los
                        contenidos vistos en clase durante las siguientes 3 fases.
                    </h4>
                    <ReactPlayer
                      url={'https://www.youtube.com/watch?v=Pnp_7IaqW74&t=2734s'}
                      width='600px'
                      height='250px'
                      />
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-lg">
                    <h3>HAZ COMPLETADO LA FASE 1</h3>
                  </div>
                  <div className="row">
                  <div className="col-lg">
                    <Link className="btn-solid-lg page-scroll" to="/fase2">Continuar</Link>
                  </div>
                  </div>
                </div>

          </div>


        );}
}
export default Fase1;
