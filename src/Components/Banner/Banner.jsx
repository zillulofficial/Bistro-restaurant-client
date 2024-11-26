import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel
            infiniteLoop
            autoPlay
            interval={2500}
            className="text-center mb-20"
        >
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/RZfDQj3d/01.jpg" />
            </div>
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/xjxh0GDv/02.jpg" />
            </div>
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/xTX7qknW/03.png" />
            </div>
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/02h4S8Nr/04.jpg" />
            </div>
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/GpCSMqGC/05.png" />
            </div>
            <div className="lg:h-[800px]">
                <img src="https://i.postimg.cc/R0Lp2KLn/06.png" />
            </div>
        </Carousel>
    );
};

export default Banner;