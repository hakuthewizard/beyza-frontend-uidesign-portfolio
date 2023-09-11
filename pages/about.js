import React from 'react'
import styles from '@/styles/about.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const About = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.main}>
      <div className={styles.card}>
    
      <div className={styles.leftside}>
        <h1>About Me</h1>
        <p>
        I am a self-taught web developer and an industrial<br/>
        design student. My professional work combines <br/>
        the set of creative skills I have acquired as a<br/> 
        design student throughout my design education<br/>
        and my dedication and passion for web development
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