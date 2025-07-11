import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import React from 'react'

import mars from '../../public/mars.png';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Birthday",
        url: "/birthday",
    },
    {
        id: 4,
        title: "Explore",
        url: "/explore",
    }
]

export default async function Navbar() {
    return (
        <div className={styles.container}>
            <Link href='/'>
                <Image src={mars} alt={'mars'} className={styles.logo} />
            </Link>
            <div className={styles.links}>
                {links.map(link=>(
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
}
