import styles from "./page.module.css";
import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default async function Footer() {
    return (
        <div className={styles.container}>
            <div>@2025 Mars Rover. All rights reserved.</div>
            <div className={styles.social}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                </a>
            </div>
        </div>
    );
}
