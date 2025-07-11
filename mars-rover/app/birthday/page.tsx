import React from 'react'
import parseJSON from './parseJSON'
import Image from "next/image";
import ServerSide from './serverSide';

export default async function Birthday() {
    const photo = await parseJSON();
    return (
        <div>
            <ServerSide />
            <img src={photo.img_src} alt={"Your birthday"} width={300} height={300}/>
        </div>
    );
}

// <ScratchToReveal width={300} height={300} minScratchPercentage={50} className={styles.scratch}>
//     <img src ={photo.img_src} className={styles.scratch}/>
// </ScratchToReveal>


