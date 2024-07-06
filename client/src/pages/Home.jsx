import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ReferForm from './ReferForm'
import image from '../assets/image.svg'
import user from '../assets/user.svg'
import clipBoard from '../assets/clip_board.svg'
import wallet from '../assets/wallet.svg'
import contactUs from '../assets/contact-us.png'
import { ChevronRight } from 'lucide-react';
import Footer from '../Components/Footer'
import CustomTable from '../Components/Table'

function Home() {
    const [tab, setTab] = useState('refer');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<>
        <header className='fixed bg-white w-screen z-10'>
            <Navbar />
            <hr />
        </header>

        {open && <ReferForm onClose={handleClose} />}

        <main className='h-full w-screen'>
            <nav className='py-14 pt-32'>
                <ul className="py-4 px-10 text-slate-700 rounded-[36px] flex w-fit mx-auto justify-center items-center bg-[var(--bg-color)] gap-10 font-bold text-lg">
                    <li className={tab === 'refer' ? 'text-[--base-color] cursor-pointer' : 'cursor-pointer'} onClick={() => setTab('refer')}>Refer</li>
                    <li className={tab === 'benefit' ? 'text-[--base-color] cursor-pointer' : 'cursor-pointer'} onClick={() => setTab('benefit')}>Benefit</li>
                    <li className={tab === 'faqs' ? 'text-[--base-color] cursor-pointer' : 'cursor-pointer'} onClick={() => setTab('faqs')}>FAQs</li>
                    <li className={tab === 'support' ? 'text-[--base-color] cursor-pointer' : 'cursor-pointer'} onClick={() => setTab('support')}>Support</li>
                </ul>
            </nav>

            <section className="w-full sm:pb-20 lg:px-14 xl:px-32">
                <div className="w-full px-4 md:px-6 lg:px-16 xl:py-18 shadow-xl bg-[var(--bg-color)] rounded-2xl relative">
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
                        <div className='space-y-8 md:space-y-12'>
                            <div className='space-y-6 md:space-y-12 text-center lg:text-left'>
                                <h1 className=" font-bold tracking-tighter text-5xl  md:text-6xl xl:text-7xl text-[#1A202C]">
                                    Let's  Learn & Earn
                                </h1>
                                <p className="w-full lg:max-w-[600px] text-gray-500 text-3xl md:text-4xl xl:text-5xl ">
                                    Get a chance to win up-to <span className='font-bold text-[var(--base-color)]'>Rs. 15,000</span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                                <button
                                    onClick={handleOpen}
                                    className="flex h-12 items-center justify-center rounded-md bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-8 text-lg font-bold text-gray-100"
                                >
                                    Refer Now
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                alt="main"
                                className="mx-auto overflow-hidden rounded-sm rounded-bl-3xl rounded-tr-3xl object-bottom w-full max-w-[50rem] lg:max-w-[37rem] lg:order-last bg-inherit"
                                src={image}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--bg-color)] py-12">
                <div className="px-4 md:px-6 bg-inherit">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16 bg-inherit ">
                        <div className="space-y-2 bg-inherit">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 bg-inherit">How Do I <span className='bg-inherit text-[var(--base-color)]'>Refer</span></h2>
                        </div>
                    </div>

                    <div className='w-full grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 xl:px-20 bg-inherit'>

                        <div className='w-[19rem] h-[19rem] shadow-lg p-5 rounded-full border'>
                            <div className='pb-5 pl-[6.5rem] sm:pl-[6rem]'>
                                <img src={user} alt="user" className='h-auto w-[6rem]' />
                            </div>
                            <div className='w-full text-center'>
                                <h1 className='text-2xl font-bold pb-2'>Step 1</h1>
                                <p className='text-xl'>
                                    Submit referrals easily via our website's referral section
                                </p>
                            </div>
                        </div>

                        <div className='w-[19rem] h-[19rem] shadow-lg p-6 rounded-full border my-6'>
                            <div className='pb-5 pl-[6.5rem] sm:pl-[6rem]'>
                                <img src={clipBoard} alt="user" className='h-auto w-[4.5rem]' />
                            </div>
                            <div className='w-full text-center'>
                                <h1 className='text-2xl font-bold pb-2'>Step 2</h1>
                                <p className='text-xl'>
                                    Earn rewards once your referral joins an Accredian program
                                </p>
                            </div>
                        </div>


                        <div className='w-[19rem] h-[19rem] shadow-lg p-6 rounded-full border my-6'>
                            <div className='pb-5 pl-[6rem] sm:pl-[5.5rem]'>
                                <img src={wallet} alt="user" className='h-auto w-[4rem]' />
                            </div>
                            <div className='w-full text-center'>
                                <h1 className='text-2xl font-bold pb-2'>Step 3</h1>
                                <p className='text-xl'>
                                    Both parties receive a bonus 30 days after program enrollment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-inherit mt-10">
                    <button onClick={handleOpen}
                        className="flex h-12 items-center justify-center rounded-md bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-8 text-lg font-bold text-slate-100"
                        to={"#"}
                    >
                        Refer Now
                    </button>
                </div>
            </section>

            <section className='py-24 px-5'>
                <div className="space-y-2 bg-inherit w-full text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 bg-inherit">What are The <span className='bg-inherit text-[var(--base-color)]'>Referral Benefits?</span></h2>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-8 xl:gap-20 py-20'>
                    <div className='w-full md:w-fit'>
                        <ul className='btn-shadow flex flex-col gap-4 font-bold text-sm xl:text-base rounded-xl *:px-8 pb-8'>
                            <li className='rounded-t-xl bg-[var(--base-color)] py-5 text-base xl:text-lg text-slate-100 flex justify-between gap-4'>
                                ALL PROGRAMS
                                <ChevronRight className='h-auto w-6 bg-inherit' />
                            </li>
                            <li className='py-1.5 flex justify-between'>PRODUCT MANAGEMENT <ChevronRight className='h-auto w-5 bg-inherit ml-8' /></li>
                            <hr />
                            <li className='py-1.5 flex justify-between'>STRATERGY & LEADERSHIP <ChevronRight className='h-auto w-5 bg-inherit' /></li>
                            <hr />
                            <li className='py-1.5 flex justify-between'>FINTECH <ChevronRight className='h-auto w-5 bg-inherit' /></li>
                            <hr />
                            <li className='py-1.5 flex justify-between'>SENIOR MANAGEMENT <ChevronRight className='h-auto w-5 bg-inherit' /></li>
                            <hr />
                            <li className='py-1.5 flex justify-between'>DATA SCIENCE <ChevronRight className='h-auto w-5 bg-inherit' /></li>
                            <hr />
                            <li className='py-1.5 flex justify-between'>DIGITAL TRANSFORMATION <ChevronRight className='h-auto w-5 bg-inherit' /></li>
                        </ul>
                    </div>
                    <CustomTable />
                </div>
                <div className="flex justify-center bg-inherit mt-10">
                    <button
                        onClick={handleOpen}
                        className="flex h-12 items-center justify-center rounded-md bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-8 text-lg font-bold text-slate-100"
                        to={"#"}
                    >
                        Refer Now
                    </button>
                </div>
            </section>

            <hr />

            <section className="w-full py-14 px-5 lg:px-20">
                <div className="px-4 md:px-6 bg-inherit">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16 bg-inherit ">
                        <div className="space-y-2 bg-inherit">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 bg-inherit">Frequently Asked <span className='bg-inherit text-[var(--base-color)]'>Questions</span></h2>
                        </div>
                    </div>

                    <div className='w-full md:flex items-center gap-12'>
                        <div className='flex flex-col gap-5 my-10'>
                            <Link
                                className="btn-shadow flex h-14 items-center justify-center rounded-md text-[var(--base-color)]  px-24 text-lg font-bold"
                                to={"#"}
                            >
                                Eligibility
                            </Link>
                            <Link
                                className="flex h-14 items-center justify-center rounded-md px-8 text-lg font-bold text-gray-500 border-[2px] border-gray-400"
                                to={"#"}
                            >
                                How To Use?
                            </Link>
                            <Link
                                className="flex h-14 items-center justify-center rounded-md px-8 text-lg font-bold text-gray-500 border-[2px] border-gray-400"
                                to={"#"}
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h1 className='text-xl font-bold text-[var(--base-color)]'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h1>
                            <p className='text-lg'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any fields of work.</p>
                            <h2 className='text-xl font-bold'>What is the minimum system configuration required?</h2>
                        </div>

                    </div>

                </div>
            </section>

            <section className='p-8 px-14 mb-20'>
                <div className='bg-[var(--base-color)] flex flex-col  md:flex-row gap-6 justify-between items-center w-full border px-14 md:h-60 rounded-xl py-10 md:py-0'>
                    <div className='flex flex-col sm:flex-row items-center gap-6 bg-inherit h-full'>
                        <div className='p-1 rounded-lg bg-blue-400'>
                            <img src={contactUs} alt="contact us" className='bg-slate-100 h-auto max-w-20 p-2 rounded-xl' />
                        </div>
                        <div className='space-y-2 bg-inherit text-center sm:text-left'>
                            <h1 className='bg-inherit  text-2xl lg:text-3xl font-bold text-slate-100'> Want to delve deeper into the program? </h1>
                            <p className='bg-inherit  text-lg font-bold text-slate-100'>Share your details to receive expert insights from our program team!</p>
                        </div>
                    </div>
                    <div className="bg-inherit min-w-fit">
                        <Link
                            className="bg-slate-100 flex gap-1 h-12 items-center justify-center rounded-lg px-8 text-lg font-bold text-[var(--base-color)] hover:text-[var(--hover-color)]"
                            to={"#"}
                        >
                            Get in touch
                            <ChevronRight className='h-auto w-5 bg-inherit' />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>)
}

export default Home