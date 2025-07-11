import styles from "./page.module.css";
import React from 'react'
import Link from 'next/link'


export default async function Button({text, url}) {
    return (
        <Link href={url}>
            <button className={styles.container}>
                {text}
            </button>
        </Link>
    );
}
