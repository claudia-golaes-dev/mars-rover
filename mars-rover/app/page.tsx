
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import mars from '../public/mars.png';
import { motion } from "motion/react";
import { ReactNebula } from "@flodlc/nebula";
import Button from "@/components/button/button"

export default async function Page() {
  return(
      <div className={styles.container}>
          <div className={styles.item}>
          <h1 className={styles.title}>LEARNING IS EASY WITH US</h1>
          <p className={styles.description}>Go beyond what's possible. gitjkfhvbjwgbfdshfukerhern grefwjhioejior</p>
          <Button url='/about' text='About Us' />
        </div>
        <div className={styles.item}>
          <Image src={mars} alt={'mars'} className={styles.image} />
        </div>
      </div>
  )
}


{/*<ReactNebula config={{*/}
{/*    "starsCount": 820,*/}
{/*    "starsColor": "#FFFFFF",*/}
{/*    "starsRotationSpeed": 18.8,*/}
{/*    "cometFrequence": 10,*/}
{/*    "nebulasIntensity": 0,*/}
{/*    "bgColor": "rgb(8,8,8)",*/}
{/*    "sunScale": 0,*/}
{/*    "planetsScale": 0,*/}
{/*    "solarSystemOrbite": 0,*/}
{/*    "solarSystemSpeedOrbit": 0*/}
{/*}}/>*/}

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>
//
//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
