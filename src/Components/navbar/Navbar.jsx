 'use client'
import style from '@/Components/navbar/navbar.module.css'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link className={style.logo} href='/'>Aaa</Link>
            <div className={style.links}>
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <Link href="/dashboard">Dashboard</Link>
            <button className={style.logout}>LogOut</button>
            </div>
        </div>
    );
};

export default Navbar;