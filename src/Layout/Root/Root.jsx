import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* Outlet section */}
            <div className="min-h-[calc(100vh-343px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;