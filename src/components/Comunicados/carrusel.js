import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

class carrusel extends Component {
  render (){
    const I = {
      imagen:{
        width:"50%",
        height: "75vh",
      },
    };
    return(
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
    );
  }
}

export default carrusel;