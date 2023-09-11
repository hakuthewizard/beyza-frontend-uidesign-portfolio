import React from 'react'
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import Contact from '@/components/contact';

const Navbar = () => {


  return (
    <div className={styles.navbar}>
        <Link className={styles.heading} href='/'><p>Home</p>
        </Link>
        <div className={styles.leftside}>
        <a className={styles.about} href="/about">About Me</a>
          <Contact/>
        </div>
    
    </div>
  )
}

export default Navbar;