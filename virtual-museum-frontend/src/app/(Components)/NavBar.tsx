import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="global__nav">
        <Link href={"/"} className="nav__links">Home</Link>
        <Link href={"/about"} className="nav__links">About</Link>
        <Link href={"/personal_gallery"} className="nav__links">Personal Gallery</Link>
    </nav>
  )
}

export default NavBar