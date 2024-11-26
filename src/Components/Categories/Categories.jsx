import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../SectionTitle/SectionTitle';

const Categories = () => {
    return (
        <div className='container lg:w-[1320px] mx-auto mb-24'>
            <div>
                <SectionTitle
                subHeading= "From 11.00 am to 10.00 pm"
                Heading= "Order Online"
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.postimg.cc/fTbMv49Y/slide1.jpg" alt="" />
                    <p className='uppercase font-rancho font-bold text-lg md:text-2xl text-center -mt-16 drop-shadow-lg text-white'>SALADS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/SNtkTZ63/slide2.jpg" alt="" />
                    <p className='uppercase font-rancho font-bold text-lg md:text-2xl text-center -mt-16 drop-shadow-lg text-white'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/t4ZyLhDT/slide3.jpg" alt="" />
                    <p className='uppercase font-rancho font-bold text-lg md:text-2xl text-center -mt-16 drop-shadow-lg text-white'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/g2CddnBK/slide4.jpg" alt="" />
                    <p className='uppercase font-rancho font-bold text-lg md:text-2xl text-center -mt-16 drop-shadow-lg text-white'>Cakes</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/fTbMv49Y/slide1.jpg" alt="" />
                    <p className='uppercase font-rancho font-bold text-lg md:text-2xl text-center -mt-16 drop-shadow-lg text-white'>SALADS</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;