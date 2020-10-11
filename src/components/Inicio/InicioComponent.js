import React, { Component } from 'react';
import './InicioComponent.css';
import './header-teamwork.svg';
import { Link } from 'react-router-dom';

class Inicio extends Component {
render(){
  return (
    <div id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text-container">
                            <h1>Menos hambre MAS alegria</h1>
                            <p className="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel augue est. Aliquam sagittis ligula erat, eget pulvinar massa condimentum quis. Sed dignissim scelerisque nisi, id luctus odio maximus at. Nulla lorem libero, aliquet eget tempor ut, bibendum eu turpis. Ut ac accumsan risus. Quisque rhoncus mauris dui, a fringilla tortor blandit et. Cras eget turpis dignissim libero fringilla dictum sed eu metus. Donec sit amet turpis non orci hendrerit suscipit. Integer volutpat erat quam, quis pellentesque tortor sodales at. Nam iaculis erat purus, sit amet facilisis ipsum placerat sit amet. Praesent sit amet mi dolor. Phasellus vitae dui tempor, imperdiet ex ut, tristique lectus. </p>
                        </div>
                    </div>
                    <div className="line-division"></div>
                    <div className="col-lg-4 register-zone">
                        <img src="www.google.com" alt="AQUI VA EL LOGO"/>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Registrate</Link>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
}
export default Inicio
