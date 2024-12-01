import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { createUser, googleLogIn, facebookLogIn, githubLogIn, user, setUser, updateUserProfile } = useAuth()

    const handleSocialSignIn = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    console.log(result.user)
                    
                    navigate(from)
                }
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,photoURL,email, password)
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            Swal.fire({
                title: 'OOPS!',
                text: 'Password is week',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
            return
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL)
                    .then(res => {
                        setUser({ ...user, photoURL: photoURL, displayName: name })
                        console.log(res);
                        navigate('/')
                    })
                Swal.fire({
                    title: 'Congrats!',
                    text: 'Registered successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="md:py-28 bg-[url('https://i.postimg.cc/LsVXK5Kx/authentication.png')] bg-no-repeat bg-cover lg:h-screen flex  items-center">
            <Helmet>
                <title>BistroBoss | Register</title>
            </Helmet>
            <div className="py-8 container mx-auto bg-[url('https://i.postimg.cc/LsVXK5Kx/authentication.png')] bg-no-repeat bg-cover shadow-2xl flex flex-col md:flex-row items-center">

                <div className="mx-auto md:w-3/4 lg:w-1/2">
                    <div className="hero md:min-h-96 w-full">
                        <div className="hero-content rounded-lg p-5 w-full">
                            <div className=" shrink-0 w-full ">
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div>
                                        <h3 className="text-4xl text-[#444444] roboto font-semibold mb-6">Register</h3>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input bg-white mb-2"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input type="text" name="photoURL" placeholder="Enter URL" className="input bg-white mb-2"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email address" className="input bg-white mb-2"
                                        />
                                    </div>
                                    <div className="form-control mb-6">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative ">
                                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input w-full bg-white"
                                            />
                                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6 mb-4">
                                        <button className="btn text-white bg-[#D1A054cb] hover:bg-[#D1A05457] border-none text-lg">Register</button>
                                    </div>
                                </form>

                                {/* Social icons */}
                                <div className="flex items-center justify-center">
                                    <p className="text-[#D1A054]">ALready Registered?</p>
                                    <Link to="/login"><button className=" text-[#D1A054]  hover:text-[#D1A054B3] px-4 py-2 rounded-full border-none font-bold">Go to log in</button></Link>
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
                <div className="hidden lg:block ">
                    <img className="mx-auto" src="https://i.postimg.cc/pLJhxqKQ/authentication2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;