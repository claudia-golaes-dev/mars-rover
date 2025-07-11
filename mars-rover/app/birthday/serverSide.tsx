import styles from "./page.module.css";
import {promises as fs} from 'fs';
import React from 'react'
import {ScratchToReveal} from "@/components/magicui/scratch-to-reveal";
import parseJSON from './parseJSON'
import Image from "next/image";
import Birthday from "@/app/birthday/page";


export default async function ServerSide() {
    const photo = await parseJSON();
    return (
        <div>
            <Birthday />
            <Image src={photo.img_src} alt={"Your birthday"} width={200} height={200}/>
        </div>
    );
}

// <ScratchToReveal width={300} height={300} minScratchPercentage={50} className={styles.scratch}>
//     <img src ={photo.img_src} className={styles.scratch}/>
// </ScratchToReveal>
