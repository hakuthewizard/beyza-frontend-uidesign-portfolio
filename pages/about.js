import React from 'react'
import styles from '@/styles/about.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
export const About = () => {
  return (
    <>
    <Head>
      
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Kosugi&family=Kosugi+Maru&family=M+PLUS+1p:wght@400;700&family=Yuji+Syuku&display=swap" rel="stylesheet"/>
    </Head>
    <Navbar/>
    <div className={styles.main}>
      <div className={styles.card}>
    
      <div className={styles.leftside}>
        <h1>About Me</h1>
        <p>
        I am a self-taught web developer and an industrial<br/>
        design graduate from ITU. My professional work combines <br/>
        the set of creative skills I have acquired as a design<br/> 
        student throughout my design education and  my <br/>
        my dedication and passion for web development
        <br/>and coding.
        </p>
        <Link href='/myprojects' className={styles.projectsBtn}
>My Projects</Link>
    </div>
      </div>
    </div>
    
    </>
  )
}
export default About;