import React, {Component} from 'react';
import {Button, Jumbotron} from 'reactstrap';
import './HomeComponent.css'
import axios from 'axios'
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.npoint.io/4529b70a8255f93d8392`, {})
            .then(res => {
                this.setState({tareas: res.data})
            })
            .catch((error) => {
                console.log(error)
            })
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
                <div className="fases-container">
                    <div className="fases">
                        <h2 className="fase-title-uno">FASE 1</h2>
                        <p className="progres">Progreso</p>
                        <p className="incompleto">Incompleto</p>
                        <Link className="btn-solid-lg2 page-scroll" to="/">Ingresar</Link>
                    </div>
                    <div className="fases">
                        <h2 className="fase-title-dos">FASE 2</h2>
                        <p className="progres">Progreso</p>
                        <p className="incompleto">Incompleto</p>
                        <Link className="btn-solid-lg2 page-scroll ingresar" to="/">Ingresar</Link>
                    </div>
                    <div className="fases">
                        <h2 className="fase-title-tres">FASE 3</h2>
                        <p className="progres">Progreso</p>
                        <p className="incompleto">Incompleto</p>
                        <Link className="btn-solid-lg2 page-scroll ingresar" to="/">Ingresar</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
