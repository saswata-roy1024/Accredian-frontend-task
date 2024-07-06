import React from 'react'
import { Link } from 'react-router-dom'
import accredian from '../assets/accredian.png'
import { ChevronDown, AlignJustify } from 'lucide-react';

function Navbar() {
    return (<>
        <div className="mx-4 py-10 lg:px-6 h-14 flex items-center justify-between">
            <div className='flex items-center gap-6'>
                <Link className="flex items-center justify-center gap-2" to="#">
                    <img src={accredian} alt="logo" className='w-auto h-10' />
                </Link>
                <Link className="hidden md:flex items-center gap-2 text-white text-sm font-bold bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-4 py-2 rounded-md"
                    to={"#"}>
                    <span className='bg-inherit'>Courses</span>
                    <ChevronDown className='bg-inherit w-4 h-5' />
                </Link>
            </div>

            <nav className="ml-auto flex gap-4 sm:gap-6 items-center *:font-bold">
                <div className="ml-auto hidden lg:flex gap-6 items-center *:font-bold ">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Refer & Earn
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Resorces
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        About Us
                    </Link>
                </div>

                <div className='flex gap-3 items-center text-base'>
                    <Link className="text-sm font-bold bg-slate-200 px-4 py-2 rounded-md" to={'auth'}>
                        Login
                    </Link>
                    <Link className="hidden lg:inline-block text-white text-sm bg-[var(--base-color)] hover:bg-[var(--hover-color)] px-4 py-2 rounded-md"
                        to={"#"}>
                        Try for free
                    </Link>
                    <AlignJustify className='lg:hidden h-auto w-9 hover:cursor-pointer'/>
                </div>

            </nav>
        </div>

    </>)
}

export default Navbar