import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    const Location= useLocation()
    const noHeaderFooter= Location.pathname.includes('login')
    return (
        <div>
            {/* navbar */}
            {noHeaderFooter || <Navbar></Navbar>}

            {/* Outlet section */}
            <div className="min-h-[calc(100vh-343px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;