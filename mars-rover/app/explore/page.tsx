import styles from "./page.module.css";
import {promises as fs} from 'fs';
import React from 'react'
import {ScratchToReveal} from "@/components/magicui/scratch-to-reveal";
import parseJSON from '../birthday/parseJSON'


export default async function Explore() {
    const file = await fs.readFile('/Work/Training/mars-rover/mars-rover/app/assets/photo.json', 'utf8');
    const data = JSON.parse(file);
    const arrayData = Array.from(data.photos)
    const photo = await parseJSON();
    return (
         <ul>
            {arrayData.map((photo) => (
                <li key={photo.id}>
                    <h3>Date: {photo.earth_date}</h3>
                    <img src = {photo.img_src} />
                </li>
            ))}
        </ul>
    );
}


// <ScratchToReveal width={300} height={300} minScratchPercentage={50} className={styles.scratch}>
//     <img src ={photo.img_src} className={styles.scratch}/>
// </ScratchToReveal>
