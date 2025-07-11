'use client'

import styles from "./page.module.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from 'react';

export default function ServerSide() {
    const [value, onChange] = useState(new Date());
    const [locale, setLocale] = useState('en-US');

    useEffect(() => {
        const userLocale = navigator?.language || 'en-US';
        setLocale(userLocale);
    }, []);

    return (
        <div className={styles.textContainer}>
            <div className={styles.item}>
                <h1>Choose your birthday</h1>
                <Calendar onChange={onChange} value={value} locale={locale}/>
                <p>Selected: {value.toDateString()}</p>
            </div>
            <div className={styles.item}>
                <h1 className={styles.h1}>A picture that Curiosity took on: {value.toDateString()}</h1>
            </div>
        </div>

    );
}
