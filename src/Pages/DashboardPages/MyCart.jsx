import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)
    // console.log(cart);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="pt-5 text-center">
                <SectionTitle
                    Heading={"Wanna add more?"}
                    subHeading={"My Cart"}
                ></SectionTitle>
            </div>
            <div className="container mx-auto bg-white shadow-xl p-12">
                <div className="flex justify-between mb-4">
                    <p className="font-Cinzel font-bold text-3xl">Total Orders: {cart.length}</p>
                    <p className="font-Cinzel font-bold text-3xl">Total Price: {totalPrice}</p>
                    <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                        <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Pay</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="rounded-t-xl">
                            <tr className="bg-[#D1A054]">
                                <th>#</th>
                                <th className="font-semibold text-white">Item Image</th>
                                <th className="font-semibold text-white pl-32 pr-0">Item Name</th>
                                <th className="font-semibold text-white">Price</th>
                                <th className="font-semibold text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, i) => <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td className="h-16 w-16"><img src={item.image} alt="" /></td>
                                    <td className=" pl-32 pr-0">{item.name}</td>
                                    <td>${item.price}</td>
                                    <td className="flex justify-center">
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error"><RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;