import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { GiKnifeFork } from "react-icons/gi";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure= useAxiosSecure()
    const onSubmit = async(data) => {
        console.log(data);
        const imageFile= {image: data.image[0]}
        const res= await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuInfo = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes= await axiosSecure.post('/menu', menuInfo)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            }
        }
    }
    return (
        <div className="mt-12">
            <SectionTitle Heading='add an item' subHeading="What's mew?"></SectionTitle>
            <form className="bg-slate-100 lg:w-[1000px] mx-auto p-12" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p className=" font-semibold mb-2">Recipe Name*</p>
                    <input type="text" placeholder="Recipe Name" {...register("name", { required: true })} className="w-full h-12 rounded-lg text-[15px] pl-4 mb-6" />
                </div>
                <div className="flex justify-between gap-6">
                    <div className="flex-1">
                        <p className=" font-semibold mb-2">Category*</p>
                        <select {...register("category", { required: true })} className="w-full select select-bordered">
                            <option disabled selected>Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drink</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <p className=" font-semibold mb-2">Price*</p>
                        <input type="number" placeholder="Price" {...register("price", { required: true })} className="w-full h-12 rounded-lg text-[15px] pl-4 mb-6" />
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-2">Recipe Details*</p>
                    <textarea type="text" placeholder="Recipe Details" {...register("recipe", { required: true })} className="w-full h-12 rounded-lg text-[15px] pl-4 pt-4 mb-5" ></textarea>
                </div>
                <div className="mb-8">
                    <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                </div>
                <button class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span class="absolute top-0 left-0 w-48 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span class="relative text-white flex items-center gap-2">Add Item<GiKnifeFork className="text-white text-xl"></GiKnifeFork></span>
                </button>
            </form>
        </div>
    );
};

export default AddItems;