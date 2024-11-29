import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/review`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                Heading={'Testimonials'}
            ></SectionTitle>
            <div className="container mx-auto">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map(review => <SwiperSlide className="text-center px-16 pt-12 pb-24" key={review._id}>
                            <Rating className="mx-auto mb-12" style={{ maxWidth: 250 }} value={review.rating} />
                            <FaQuoteLeft className="text-8xl mx-auto mb-12"></FaQuoteLeft>
                            <p className="mb-3">{review.details}</p>
                            <h2 className="uppercase text-3xl text-[#CD9003]">{review.name}</h2>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;