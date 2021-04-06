import React,{useEffect,useState} from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import {slotSardCover} from "../../assets/img/images";
import {play} from "../../assets/img/icons/icons";
import _ from 'lodash'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const  Carousel = (props) =>{
    const [data,setData]= useState(props.data)
    const [count,setCount] = useState(props.count || 5)
    useEffect(()=> {
       setCount(props.count)
    },[props.count])

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={count}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                _.map(data, (v,index)=>{
                    return  (
                        <SwiperSlide key={index}>
                            <div className="slot-card">
                                <a href="#" className="slot-card-hover">
                                    <img
                                        src={v.icon}
                                        alt=""
                                        className="slot-card-cover"
                                    />
                                    <img src={play} alt="" className="play-btn"/>
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Carousel;