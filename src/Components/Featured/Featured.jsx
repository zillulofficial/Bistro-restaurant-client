import SectionTitle from "../SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div className="relative">
            <div class="absolute inset-0 bg-black bg-opacity-50 "></div>
            <div className="bg-[url('https://i.postimg.cc/mg7fqJ5X/featured.jpg')] bg-fixed bg-cover bg-no-repeat  pt-20 pb-20 mb-24">
                <SectionTitle
                    subHeading='Check it out'
                    Heading='From our menu'
                ></SectionTitle>
                <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center">
                    <div className="w-full">
                        <img className=" w-[648px] mx-auto" src="https://i.postimg.cc/mg7fqJ5X/featured.jpg" alt="" />
                    </div>
                    <div className="text-white">
                        <p className="flex-1 mb-2">March 10, {new Date().getFullYear()}</p>
                        <h2 className="uppercase text-xl mb-2">Where can i get some?</h2>
                        <p className="mb-6">Discover Bistro Boss Restaurant, where exquisite flavors meet warm hospitality. Explore our diverse menu, crafted with passion,
                            and enjoy an unforgettable dining experience that’s perfect for every occasion.</p>
                        <div>
                            <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-transparent group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                                <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;