import React, { Component } from 'react';
import './InicioComponent.css';
import './header-teamwork.svg';
import { Link } from 'react-router-dom';
import carrusel from "../Comunicados/carrusel";
import {Swiper, SwiperSlide} from 'swiper/react';


class Inicio extends Component {

render(){
  const I = {
      imagen:{
          width:"100%",
          height: "100%",
      },
  };
  return (
    <div id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="carrusel">
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
                                    <img style={I.imagen} src="https://i.ibb.co/23R5Z77/1.png" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img style={I.imagen} src="https://i.ibb.co/yFzzm3R/2.png" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img style={I.imagen} src="https://i.ibb.co/mCDLbpj/3.png" alt=""/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="line-division"></div>
                    <div className="col-lg-3 register-zone">
                        <img src="https://i.ibb.co/w4BR7fN/logoHS.png" alt="AQUI VA EL LOGO" className="imagen"/>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Registrarse</Link>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Ingresar</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
}
export default Inicio
