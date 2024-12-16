import { Link, NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { HiMail } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";

const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <div className='flex items-center justify-center pt-12 mb-16'>
                    <Link to='/'><p className="font-bold text-2xl uppercase dms">BISTRO BOSS <br /><span className="font-roboto text-[15px]">R e s t a u r a n t</span></p></Link>
                </div>
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/adminHome'><IoHomeSharp className="text-[#151515] text-xl"></IoHomeSharp>Admin Home</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/addItem'><GiKnifeFork className="text-[#151515] text-xl"></GiKnifeFork>Add Items</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/manageItems'><FaListUl className="text-[#151515] text-xl"></FaListUl>Manage items</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/manageBookings'><MdLibraryBooks className="text-[#151515] text-xl"></MdLibraryBooks>Manage Bookings</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/allUsers'><IoIosPeople className="text-[#151515] text-xl"></IoIosPeople>All Users</NavLink>
                                </li>
                            </> : <>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/home'><IoHomeSharp className="text-[#151515] text-xl"></IoHomeSharp>User Home</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/reservation'><SlCalender className="text-[#151515] text-xl"></SlCalender>Reservation</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/payment'><GiWallet className="text-[#151515] text-xl"></GiWallet>Payment History</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/cart'><IoMdCart className="text-[#151515] text-xl"></IoMdCart>My Cart</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/review'><VscPreview className="text-[#151515] text-xl"></VscPreview>Add Review</NavLink>
                                </li>
                                <li className="menu-title text-center font-Cinzel text-[#151515] font-medium mb-3">
                                    <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/dashboard/booking'><TbBrandBooking className="text-[#151515] text-xl"></TbBrandBooking>My Booking</NavLink>
                                </li></>
                    }

                    {/* shared NavLinks */}
                    <hr className="mb-5 w-60 mx-auto" />

                    {/* navbar contents */}
                    <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                        <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/'><IoHomeSharp className="text-[#151515] text-xl"></IoHomeSharp>Home</NavLink>
                    </li>
                    <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                        <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/menu'><GiHamburgerMenu className="text-[#151515] text-xl"></GiHamburgerMenu>Menu</NavLink>
                    </li>
                    <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                        <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/shop/salad'><FaShoppingBag className="text-[#151515] text-xl"></FaShoppingBag>Shop</NavLink>
                    </li>
                    <li className="menu-title text-center font-Cinzel text-[#151515] font-medium">
                        <NavLink className='px-2 py-2 rounded-md flex items-center gap-3' to='/contactUs'><HiMail className="text-[#151515] text-xl"></HiMail>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;