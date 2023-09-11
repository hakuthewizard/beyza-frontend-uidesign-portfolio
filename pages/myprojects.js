import React,{useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/myprojects.module.css';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import magic2 from '@/public/magic2.png'
import adv2 from '@/public/adv2.png'
import organizer1 from '@/public/organizer1.png'
import github from '@/public/github.png';

const myProjects = () => {
  const [openPreview, setOpenPreview] =useState(false);

  const previewHandler = () => {
    setOpenPreview(!openPreview)
  }
  return (
    <><Navbar/>
    <div className={styles.projectContainer}>
    <ul className={styles.projectslist}>
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Adventure and Exploration Guide </p>
      <a className={styles.projectlink} href="https://adventures-exploration-guide.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/adventures-exploration-guide">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
     
      </div>
    </li>
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Magic Shop E-commerce</p>
      <a className={styles.projectlink} href="https://magic-shop-e-commerce-website-react-app.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/MagicShop-ECommerceWebsite-React-App">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
     
    
     
     
      </div>
    </li>

    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Peachpuff Digital Organizer</p>
      <a className={styles.projectlink} href="https://react-organization-app.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/react-organization-app">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>

    
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Art Gallery/Portfolio</p>
      <a className={styles.projectlink} href="https://beyzaballi-artportfolio.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/beyza-balli-art-portfolio">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>
  
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Food Ordering Web App</p>
      <a className={styles.projectlink} href="https://food-ordering-webapp-one.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/food-ordering-webapp">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>

    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Daily News Website</p>
      <a className={styles.projectlink} href="https://daily-news-website-nextjs.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/daily-news-website-nextjs">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>Daily Astrology/Horoscope</p>
      <a className={styles.projectlink} href="https://daily-horoscope-astrology-react-app.vercel.app/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="https://github.com/hakuthewizard/Daily-Horoscope-Astrology-React-App">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>
    <li className={styles.projectitem}>
      <div className={styles.projectlinks}>
      <p className={styles.projecttitle}>UI Dev/Front-End Portfolio</p>
      <a className={styles.projectlink} href="/">
        Go to Website</a>
        <div>
      <a className={styles.projectlink} href="/">
        <Image className={styles.icon} src={github}/>View Code</a>
        </div>
      </div>
      <div className={styles.projectimages}>
  
      </div>
    </li>
   </ul>
   
    </div>
    </>
  )
}

export default myProjects;