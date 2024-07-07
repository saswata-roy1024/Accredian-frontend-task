import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import authSignin from "../assets/trail-banner.svg";

function Signup() {
    const [form, setForm] = useState(false);
    const navigate = useNavigate();

    const [signinFields, setSigninFields] = useState({
        email: "",
        password: "",
    });

    const [signupFields, setSignupFields] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        number: "",
        referral_code: ""
    });

    const handleSigninChange = (event) => {
        const { name, value } = event.target;
        setSigninFields(values => ({ ...values, [name]: value.trim() }));
    };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;
        setSignupFields(values => ({ ...values, [name]: value.trim() }));
    };

    const handleSignin = async (event) => {
        event.preventDefault();
        if (signinFields.email && signinFields.password) {
            axios.post('/api/auth/signin', signinFields)
                .then(response => {
                    if (response.status === 200) {
                        window.localStorage.setItem("isAuthenticated", true);
                        navigate('/');
                    }
                })
                .catch(error => {
                    toast.error("Something went wrong!!", { position: 'top-center' });
                });
        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        const { name, email, password, confirm_password, number, referral_code } = signupFields;

        // Validation
        if (name === "" || email === "" || password === "" || number === "") return toast.error("Empty required Fields!!", { position: 'top-center' });
        else if (password !== confirm_password) return toast.error("Password and confirm password do not match!!", { position: 'top-center' });
        else if (!/^\d+$/.test(number)) return toast.error("Invalid phone number!!", { position: 'top-center' });

        try {
            const response = await axios.post('/api/auth/signup', { name, email, password, number, referral_code });
            if (response.status === 200) {
                window.localStorage.setItem("isAuthenticated", true);
                navigate('/');
            }
        } catch (err) {
            if (err.response && err.response.data.errors) {
                err.response.data.errors.forEach((error) => {
                    toast.error(error.msg, { duration: 5000, position: 'bottom-right' });
                });
            } else {
                toast.error("An unexpected error occurred", { position: 'bottom-right' });
            }
        }
    };


    return (
        <div className='max-w-screen flex justify-center items-center h-screen bg-[var(--bg-color)]'>
            <div className="max-w-screen sm:w-[50%] min-h-[40%] hidden lg:flex items-center justify-center">
                <img src={authSignin} className='w-[60%]  m-2 lg:w-[90%]' />
            </div>

            <div className='max-w-screen lg:w-[50%] h-[65vh] sm:h-screen flex justify-center items-center *:border *:p-8 *:rounded-lg *:shadow-md'>
                {!form ? (
                    <div className="flex flex-col justify-center space-y-6 w-full mx-10 max-w-[25rem] sm:mb-12 bg-white">
                        <div className="space-y-2">
                            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight w-full text-center">Login</h2>
                        </div>

                        <form onSubmit={handleSignin} className="space-y-8">
                            <input name="email" value={signinFields.email} onChange={handleSigninChange} placeholder="Enter your Email" required type="email" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border border-slate-400" />
                            <div className="space-y-2">
                                <div className="w-full">
                                    <input name="password" value={signinFields.password} onChange={handleSigninChange} placeholder="Enter your Password" required type="password" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border border-slate-400" />
                                    <div className='flex items-center justify-between'>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full h-12 text-lg font-extrabold rounded-lg bg-[var(--base-color)] hover:bg-[var(--hover-color)] text-indigo-50 shadow-xl" type="submit">
                                Sign in
                            </button>
                        </form>
                        <hr />

                        <div>
                            <h3 className='text-sm'>
                                Create an Account? <span onClick={() => setForm(true)} className='font-bold text-[var(--base-color)] hover:text-[var(--hover-color)] hover:underline underline-offset-4 cursor-pointer'>Click here</span> to register
                            </h3>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center space-y-2 w-full mx-10 max-w-[27rem] sm:mb-12 bg-white">

                        <h1 className="text-3xl lg:text-3xl font-extrabold tracking-tight w-full text-center mb-4">Create Account</h1>

                        <div className="space-y-4 w-full">
                            <input name="name" value={signupFields.name} onChange={handleSignupChange} placeholder="Enter your Name" required type="text" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <hr />
                            <input name="email" value={signupFields.email} onChange={handleSignupChange} placeholder="Enter your Email" type="email" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <input name="number" value={signupFields.number} onChange={handleSignupChange} placeholder="Enter your Number" required type="text" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <input name="password" value={signupFields.password} onChange={handleSignupChange} placeholder="Enter your Password" required type="password" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <input name="confirm_password" value={signupFields.confirm_password} onChange={handleSignupChange} placeholder="Confirm Password" required type="password" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <input name="referral_code" value={signupFields.referral_code} onChange={handleSignupChange} placeholder="Referral Code" type="text" className="h-12 px-4 w-full rounded-lg shadow-sm text-base border" />
                            <button className="w-full h-12 text-lg font-extrabold rounded-lg bg-[var(--base-color)] hover:bg-[var(--hover-color)] text-indigo-50 shadow-xl" onClick={handleSignup}>
                                Sign up
                            </button>
                            <h3 className="text-sm"
                                onClick={() => setForm(false)}>
                                Already have an Account? <span className='font-bold text-[var(--base-color)] hover:text-[var(--hover-color)] hover:underline underline-offset-4 cursor-pointer'>Signin</span>
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Signup;
