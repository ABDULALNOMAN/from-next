import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const link = <>
        <li><Link href={"/"}>home</Link></li>
        <li><Link href={"/about"}>about</Link></li>
        <li><a>another</a></li>
    </>

  return (
    <div className="navbar bg-slate-900">
        <div className="navbar-start">
            <Link href={"/"} className="btn btn-ghost text-xl capitalize gap-0"><span className='text-yellow-600 pr-1 inline-block'>from </span>next.<sub className=''>js</sub></Link>
        </div>
        <div className="navbar-end">
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="dropdown md:hidden block">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52 right-0">
                    {link}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
