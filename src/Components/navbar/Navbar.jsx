 'use client'
import style from '@/Components/navbar/navbar.module.css'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link className={style.logo} href='/'>Aaa</Link>
            <div className={style.links}>
                <Link className={style.link} href="/">Home</Link>
                <Link className={style.link} href="/portfolio">Portfolio</Link>
                <Link className={style.link} href="/blog">Blog</Link>
                <Link className={style.link} href="/contact">Contact</Link>
                <Link className={style.link} href="/about">About</Link>
                <Link className={style.link} href="/dashboard">Dashboard</Link>
            <button className={style.logout}>LogOut</button>
            </div>
        </div>
    );
};

export default Navbar;