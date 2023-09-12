import React,{useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/myprojects.module.css';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import magic1 from '@/public/magic1.png'
import adv2 from '@/public/adv2.png'
import organizer1 from '@/public/organizer1.png'
import artgallery1 from '@/public/artgallery1.png'
import news1 from '@/public/news1.png'
import food1 from '@/public/food1.png'
import astro1 from '@/public/astro1.png'
import turn from '@/public/turn.png'
import github from '@/public/github.png';
import Head from 'next/head';


const myProjects = () => {
  const [turnCard1, setTurnCard1] =useState(false);
  const [turnCard2, setTurnCard2] =useState(false);
  const [turnCard3, setTurnCard3] =useState(false);
  const [turnCard4, setTurnCard4] =useState(false);
  const [turnCard5, setTurnCard5] =useState(false);
  const [turnCard6, setTurnCard6] =useState(false);
  const [turnCard7, setTurnCard7] =useState(false);
  const [turnCard8, setTurnCard8] =useState(false);

  const turnCard1Handler = () => {
    setTurnCard1(!turnCard1)
  }
  const turnCard2Handler = () => {
    setTurnCard2(!turnCard2)
  }
  const turnCard3Handler = () => {
    setTurnCard3(!turnCard3)
  }
  const turnCard4Handler = () => {
    setTurnCard4(!turnCard4)
  }
  const turnCard5Handler = () => {
    setTurnCard5(!turnCard5)
  }
  const turnCard6Handler = () => {
    setTurnCard6(!turnCard6)
  }
  const turnCard7Handler = () => {
    setTurnCard7(!turnCard7)
  }
  const turnCard8Handler = () => {
    setTurnCard8(!turnCard8)
  }
  return (
    <div style={{ margin: 0 }}><Head>
    <title>Beyza Ballı UI Dev. & Front End Portfolio</title>
  
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Kosugi&family=Kosugi+Maru&family=M+PLUS+1p:wght@400;700&family=Yuji+Syuku&display=swap" rel="stylesheet"/>
        </Head>
    <Navbar/>
    
    <div className={styles.projectContainer}>
    <p className={styles.heading}>My Projects</p>
    <ul className={styles.projectslist}>

    <li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    
    <button className={styles.turnBtn} onClick={turnCard1Handler}>
  
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard1 ? (
      <div className={styles.backCard}>
          
          <p>This project was created with <em>Next.js</em>. It is a made-up website where the user can look through different adventure/nature related courses.</p>
          
        </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>⛺🌵✨Adventure Guide</p>
          <a className={styles.projectlink} href="https://adventures-exploration-guide.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/adventures-exploration-guide">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
        
      </div>
    )}
  </div>
</li>

<li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    <button className={styles.turnBtn} onClick={turnCard3Handler}>
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard3 ? (
      <div className={styles.backCard}>
          
          <p>This project was created with <em>React.js</em>.This digital organizer allows the user to take notes, create to-do lists and put reminders on a built-in calender</p>
      
    </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>🧩🎯🌟Digital Organizer</p>
          <a className={styles.projectlink} href="https://react-organization-app.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/react-organization-app">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
    
      </div>
    )}
  </div>
</li>
<li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    <button className={styles.turnBtn} onClick={turnCard4Handler}>
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard4 ? (
       <div className={styles.backCard}>
          
          <p>This project was created with <em>Next.js</em>.This digital art gallery showcases various artworks created by me over the years.</p>
       
     </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>🚀🎨💌Art Gallery</p>
          <a className={styles.projectlink} href="https://beyzaballi-artportfolio.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/beyza-balli-art-portfolio">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
      
      </div>
    )}
  </div>
</li>
<li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    <button className={styles.turnBtn} onClick={turnCard2Handler}>
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard2 ? (
      <div className={styles.backCard}>
          
          <p>This project was created with <em>React.js</em>.This imaginary magic shop e-commerce application lists various *magical* items.</p>
      
    </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>✨🪄🔮Magic Shop</p>
          <a className={styles.projectlink} href="https://magic-shop-e-commerce-website-react-app.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/MagicShop-ECommerceWebsite-React-App">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
       
      </div>
    )}
  </div>
</li>
<li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    <button className={styles.turnBtn} onClick={turnCard5Handler}>
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard5 ? (
      <div className={styles.backCard}>
        <p>This project was created with <em>Next.js. </em>Focusing on the technical topics such as API implementation and Next.js Routing, this website showcases real-time news from the "NewsAPI"</p>
      
    </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>📜⌚🌸Daily News Website</p>
          <a className={styles.projectlink} href="https://daily-news-website-nextjs.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/daily-news-website-nextjs">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
  
      </div>
    )}
  </div>
</li>
<li className={styles.projectitem}>
  <div className={styles.cardContainer}>
    <button className={styles.turnBtn} onClick={turnCard6Handler}>
      <Image className={styles.turnBtnIcon} src={turn} alt="Turn Card" />
    </button>

    {turnCard6 ? (
       <div className={styles.backCard}>
          
          <p>This project was created with <em>React.js. </em>For this project, I followed a tutorial made by "Maximilian Schwarzmüller" which helped me learn many important React concepts along the way.</p>
       
     </div>
    ) : (
      <div className={styles.projectContent}>
        <div className={styles.projectlinks}>
          <p className={styles.projecttitle}>🍜🍕🧁Order Food</p>
          <a className={styles.projectlink} href="https://food-ordering-webapp-one.vercel.app/">
            Go to Website
          </a>
          <div>
            <a className={styles.projectlink} href="https://github.com/hakuthewizard/food-ordering-webapp">
              <Image className={styles.icon} src={github} alt="GitHub Icon" />
              View Code
            </a>
          </div>
        </div>
    
      </div>
    )}
  </div>
</li>


   </ul>
   
    </div>
    </div>
  )
}

export default myProjects;