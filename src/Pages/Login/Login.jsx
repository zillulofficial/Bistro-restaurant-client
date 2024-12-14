import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiCheckFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { login, googleLogIn, facebookLogIn, githubLogIn, user, loader }= useAuth()
    const axiosPublic = useAxiosPublic()
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    console.log(location.state);
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else{
            toast.error("Captcha Not Matched!!", {
                position: "top-center"
            })
            setDisable(true)
        }
    }

    const handleSocialSignIn = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    console.log(result.user)
                    const userInfo= {
                        name: result.user.displayName,
                        photoURL: result.user.photoURL,
                        email: result.user.email,
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res=>{
                        console.log(res.data);
                        navigate(from)
                    })
                }
            })
            .catch(error => console.log(error))
    }

    const onSubmit = data => {
        const email = data.email
        const password = data.password
        // console.log(email, password)
        login(email, password)
            .then((result) => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                if (result.user) {
                    navigate(from)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Logged in successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
                console.log(result)
            })
            .catch(() => {
                Swal.fire({
                    title: 'error!',
                    text: 'There is an error',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            })
    }
    return (
        <div className="md:py-28 bg-[url('https://i.postimg.cc/LsVXK5Kx/authentication.png')] bg-no-repeat bg-cover lg:h-screen flex  items-center">
            <Helmet>
                <title>BistroBoss | Login</title>
            </Helmet>
            <div className="py-8 container mx-auto bg-[url('https://i.postimg.cc/LsVXK5Kx/authentication.png')] bg-no-repeat bg-cover shadow-2xl flex flex-col md:flex-row items-center">
                <div className="hidden lg:block ">
                    <img className="mx-auto" src="https://i.postimg.cc/pLJhxqKQ/authentication2.png" alt="" />
                </div>
                <div className="mx-auto md:w-3/4 lg:w-1/2">
                    <div className="hero md:min-h-96 w-full">
                        <div className="hero-content rounded-lg p-5 w-full">
                            <div className=" shrink-0 w-full ">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div>
                                        <h3 className="text-4xl text-[#444444] roboto font-semibold mb-6">Login</h3>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email"  placeholder="Email address" className="input bg-white mb-2 "
                                        {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-700">Required*</span>}
                                    </div>
                                    <div className="form-control mb-6">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative ">
                                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input w-full bg-white"
                                            {...register("password", { required: true })}
                                            />
                                            {errors.password && <span className="text-red-700">Required*</span>}
                                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="h-14 rounded-lg mb-6">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <div className="flex gap-8">
                                            <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha above" className="input bg-white mb-2"
                                            />
                                            <button onClick={handleValidateCaptcha} className="btn btn-square btn-outline hover:bg-[#D1A054] hover:border-[#D1A054] rounded-full"><RiCheckFill className="text-3xl"></RiCheckFill></button>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6 mb-4">
                                        <button disabled={disable} className="btn text-white bg-[#D1A054cb] hover:bg-[#D1A05457] border-none text-lg">Login</button>
                                    </div>
                                </form>

                                {/* Social icons */}
                                <div className="flex items-center justify-center">
                                    <p className="text-[#D1A054]">New here?</p>
                                    <Link to="/register"><button className=" text-[#D1A054]  hover:text-[#D1A054B3] px-4 py-2 rounded-full border-none font-bold">Create a New Account</button></Link>
                                </div>
                                <p className="text-center mb-3">Or sign in with</p>
                                <div className=' mx-auto flex items-center justify-center gap-6 '>
                                    <p onClick={() => handleSocialSignIn(githubLogIn)} className='bg-[#D1A054] w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer hover:border hover:border-[#00ccee] hover:bg-white duration-300'><TbBrandGithubFilled className='text-white text-xl hover:text-[#00ccee]'></TbBrandGithubFilled></p>
                                    <p onClick={() => handleSocialSignIn(googleLogIn)} className='text-white  font-bold rounded-full duration-300 bg-[#D1A054] w-10 h-10 flex items-center justify-center hover:text-[#cc3333] hover:cursor-pointer hover:border hover:border-[#cc3333] hover:bg-white'>G+</p>
                                    <p onClick={() => handleSocialSignIn(facebookLogIn)} className='text-white text-xl font-bold rounded-full duration-300 bg-[#D1A054] w-10 h-10 flex items-center justify-center hover:text-[#3b5998] hover:cursor-pointer hover:border hover:border-[#3b5998] hover:bg-white'>f</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;