import Image from "next/image";
import styles from "./page.module.css";
import photos from './assets/photos.json'
import { promises as fs } from 'fs';
import Link from 'next/link'
import React from 'react'
import { VideoText } from "@/components/magicui/video-text";
import Button from "@/components/button/button"

export default async function About() {
    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <VideoText src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Dissected_Wall_of_Mojave_Crater_%2846781902385%29.webm">MARS</VideoText>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.description}>Part of NASA's Mars Science Laboratory mission, Curiosity, was the largest and most capable rover ever sent to Mars when it launched in 2011. Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Where is Curiosity?</h1>
                    <p className={styles.description}>NASA’s Curiosity rover landed on Mars on Aug. 5, 2012 inside Gale Crater, which lies on the boundary between Mars' cratered southern highlands and its smooth, northern plains. Follow Curiosity’s latest location as it explores areas that can help answer questions about whether Gale Crater was habitable in the distant past.
                    <br/>
                    <br/>
                        <Button url="https://science.nasa.gov/mission/msl-curiosity/location-map/#map" text= "Live Map" />
                    </p>
                </div>
            </div>
        </div>
    );
}
