import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import beyza from '@/public/beyza.png'
import Head from 'next/head';
import Navbar from '@/components/Navbar';

const Home = () => {
  
  return (
<>
<Head>
  <title>Beyza Ballı UI Dev. & Front End Portfolio</title>
</Head>
<Navbar/>
    <div className={styles.main}>
      <div className={styles.card}>
      <div className={styles.leftside}>
        <h1>UI Design & <br/>
          Front-End Portfolio</h1>
        <p>Welcome to my portfolio, I am Beyza Ballı,<br/>
          design student & aspiring web developer
        </p>
<Link href='/myprojects' className={styles.projectsBtn}
>My Projects</Link>
</div>
<div className={styles.rightside}>
        <Image  src={beyza} className={styles.beyza}/>
        </div>

        </div>
        </div>
        </>
   
  )
}

export default Home;