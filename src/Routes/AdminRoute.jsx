import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading]= useAdmin()
    const { user, loader } = useAuth()
        const location = useLocation()
        if (loader || isAdminLoading) {
            return <span className="loading loading-bars loading-lg text-[#1abc9c] text-center h-[500px] flex items-center mx-auto"></span>
        }
        if (user && isAdmin) {
            return children
        }
        
        return <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
   
};

export default AdminRoute;