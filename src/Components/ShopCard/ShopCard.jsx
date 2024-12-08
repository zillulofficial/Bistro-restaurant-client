import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const ShopCard = ({ items }) => {
    const { _id, name, recipe, image, price } = items
    const axiosSecure= useAxiosSecure()
    const navigate= useNavigate()
    const {user}= useAuth()
    const location= useLocation()
    const [, refetch]= useCart()

    const handleAddProduct= ()=>{
        
        if(user && user?.email){
            const cartInfo= {
                menuId: _id,
                email: user.email,
                name,
                image,
                recipe,
                price
            }
            axiosSecure.post('/carts', cartInfo)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} Added successfully`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    // refetch the cart
                    refetch()
                }
            })

        }
        else{
            Swal.fire({
                title: "You Are not Logged in",
                text: "Please login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="relative card mx-auto bg-base-100 w-[350px] shadow-xl hover:scale-[.95] duration-200 transition-all ease-in">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className="absolute top-2 right-2 font-Cinzel font-semibold text-white bg-black bg-opacity-70 w-12 text-center rounded-sm">${price}</p>
                <div className="card-body text-center">
                    <h2 className="text-2xl mb-2">{name}</h2>
                    <p className="mb-6">{recipe}</p>
                    <div className="text-center">
                        <button onClick={handleAddProduct} class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#BB8506] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#BB8506] group-hover:bg-[#1F2937] group-hover:h-full"></span>

                            <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-[#BB8506] font-Cinzel">ADD TO CART</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;