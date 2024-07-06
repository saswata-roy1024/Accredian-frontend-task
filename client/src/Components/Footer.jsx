import React from 'react'
import { Link } from "react-router-dom"
import { Plus } from 'lucide-react';
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import footerLogo from '../assets/footer_logo.png'

function Footer() {
    return (
        <footer className="py-10 px-14 bg-[var(--bg-footer)] text-slate-100">
            <div className='flex justify-between bg-inherit'>
                <img src={footerLogo} alt="logo" className='bg-inherit h-11' />
                <div className='bg-inherit flex flex-col'>
                    <Link
                        className="flex h-10 items-center justify-center rounded-md bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-8 text-base font-bold border-2"
                        to={"#"}
                    >
                        Schedule 1-on-1 call Now
                    </Link>
                    <h3 className='bg-inherit text-sm text-center'>Speak with our Learning Advisor</h3>
                </div>


            </div>
            <hr className='my-10' />
            <div className="bg-inherit *:bg-inherit container mx-auto flex flex-col md:flex-row justify-between space-x-10">
                <div className='hidden lg:inline-block *:bg-inherit'>
                    <h2 className="text-xl font-bold mb-4">Programs</h2>
                    <div className='*:bg-inherit flex flex-col gap-6 *:flex *:justify-between font-bold w-72 *:hover:cursor-pointer'>
                        <p>Data Science <Plus className='bg-inherit' /> </p>
                        <p>Product Management <Plus className='bg-inherit' /> </p>
                        <p>Strategy & Leadership <Plus className='bg-inherit' /> </p>
                        <p>Digital Transformation <Plus className='bg-inherit' /> </p>
                        <p>Business Management <Plus className='bg-inherit' /> </p>
                        <p>Project Management <Plus className='bg-inherit' /> </p>
                        <p>Senior Management <Plus className='bg-inherit' /> </p>
                        <p>Fintech <Plus className='bg-inherit' /> </p>
                        <p>Business Analytics <Plus className='bg-inherit' /> </p>
                    </div>
                </div>

                <div className="*:bg-inherit mt-8 md:mt-0 space-y-2">
                    <h2 className="*:bg-inherit text-xl mb-4  font-bold">Contact Us</h2>
                    <p>Email us (For Data Science Queries): admissions@accredian.com</p>
                    <p>Email us (For Product Management Queries): pm@accredian.com</p>
                    <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
                    <p>Product Management Admission Helpline: +91 9625811095</p>
                    <p>Enrolled Student Helpline: +91 7969322507</p>
                    <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                    <p className='text-lg font-bold'>Why Accredian</p>
                    <p className='text-xl'>Follow Us</p>
                    <div className='flex gap-5'>
                        <img src={facebook} className='bg-inherit h-6' />
                        <img src={linkedin} className='bg-inherit h-6' />
                        <img src={twitter} className='bg-inherit h-6' />
                        <img src={instagram} className='bg-inherit h-6' />
                        <img src={youtube} className='bg-inherit h-6' />
                    </div>
                </div>

                <div className="*:bg-inherit mt-8 md:mt-0">
                    <h2 className="text-xl font-bold mb-4">Accredian</h2>
                    <div className='*:bg-inherit flex flex-col gap-4'>
                        <Link to="#" className="hover:underline">About</Link>
                        <Link to="#" className="hover:underline">Career</Link>
                        <Link to="#" className="hover:underline">Blog</Link>
                        <Link to="#" className="hover:underline">Admission Policy</Link>
                        <Link to="#" className="hover:underline">Referral Policy</Link>
                        <Link to="#" className="hover:underline">Privacy Policy</Link>
                        <Link to="#" className="hover:underline">Terms Of Service</Link>
                        <Link to="#" className="hover:underline">Master FAQs</Link>
                    </div>
                </div>

            </div>
            <div className="bg-inherit text-slate-100 text-center mt-10 text-sm">
                © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </footer>
    )
}


export default Footer