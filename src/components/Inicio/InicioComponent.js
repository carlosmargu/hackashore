import React, { Component } from 'react';
import './InicioComponent.css';
import './header-teamwork.svg';
import { Link } from 'react-router-dom';
import carrusel from "../Comunicados/carrusel";
import {Swiper, SwiperSlide} from "swiper/swiper-react";
class Inicio extends Component {

render(){
    const I = {
        imagen:{
            width:"50%",
            height: "75vh",
        },
    };
  return (
    <div id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay:4000 }}
                                onSlideChange={() => console.log("slide change")}
                                onSwipper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img style={I.imagen} src="https://i.ibb.co/Y79Ndnr/1.png" alt=""/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img style={I.imagen} src="https://i.ibb.co/GpSfcfb/2.png" alt=""/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img style={I.imagen} src="https://i.ibb.co/Pj62Sch/3.png" alt=""/>
                                </SwiperSlide>
                            </Swiper>
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
