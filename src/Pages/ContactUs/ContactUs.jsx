import { Helmet } from "react-helmet-async";
import SharedHeader from "../../Components/Shared/SharedHeader";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";


const ContactUs = () => {
    return (
        <div className="mb-24">
            <Helmet>
                <title>BistroBoss | Contact Us</title>
            </Helmet>
            <SharedHeader
                Title={'Contact Us'}
                SubTitle={'Would you like to try a dish'}
                image={'https://i.postimg.cc/RFWhNbSj/banner.jpg'}
            ></SharedHeader>
            <SectionTitle
                Heading={'Our Location'}
                subHeading={'Visit Us'}
            ></SectionTitle>

            {/* information section */}
            <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 mb-20">
                <div className="lg:w-[424px] hover:scale-[.95] duration-200 transition-all ease-in">
                    <div className="bg-[#D1A054] ">
                        <FaPhoneVolume className="mx-auto text-white text-xl h-12"></FaPhoneVolume>
                    </div>
                    <div className="bg-[#F3F3F3] h-[164px] py-10 text-center">
                        <h2 className="text-xl mb-2">PHONE</h2>
                        <p>+88012345678910</p>
                    </div>
                </div>
                <div className="lg:w-[424px] hover:scale-[.95] duration-200 transition-all ease-in">
                    <div className="bg-[#D1A054] ">
                        <FaLocationDot className="mx-auto text-white text-lg h-12"></FaLocationDot>
                    </div>
                    <div className="bg-[#F3F3F3] h-[164px] py-10 text-center">
                        <h2 className="text-xl mb-2">ADDRESS</h2>
                        <p>Mohammadpur, Dhaka</p>
                    </div>
                </div>
                <div className="lg:w-[424px] hover:scale-[.95] duration-200 transition-all ease-in">
                    <div className="bg-[#D1A054] ">
                        <IoTime className="mx-auto text-white text-2xl h-12"></IoTime>
                    </div>
                    <div className="bg-[#F3F3F3] h-[164px] py-10 text-center">
                        <h2 className="text-xl mb-2">WORKING HOURS</h2>
                        <p>Mon - Fri: 8:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <SectionTitle
                Heading={'Contact Form'}
                subHeading={'Send Us a Message'}
            ></SectionTitle>
            <div className="bg-[#F3F3F3] container mx-auto">
                <form className="mb-16 p-20">
                    <div className="flex justify-center gap-6">
                        <div className="w-full">
                            <p className="mb-2">Name*</p>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered  w-full mb-8" />

                        </div>
                        <div className="w-full">
                            <p className="mb-2">Email*</p>
                            <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered  w-full mb-8" />

                        </div>
                    </div>
                    <p className="mb-2">Phone*</p>
                    <input type="text" name="email" placeholder="Enter Your Phone Number" className="input input-bordered  w-full mb-8" />

                    <p className="mb-2">Elaborate You Concerns</p>
                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder=""></textarea>

                    <div className="mt-24 text-center">
                        <a href="#_" class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span class="absolute top-0 left-0 w-56 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span class="absolute bottom-0 left-0 w-28 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                <span class="absolute bottom-0 right-0 w-28 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span class="relative text-white flex items-center gap-2">Send Message<FaPaperPlane className="text-white text-xl"></FaPaperPlane></span>
                        </a>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default ContactUs;