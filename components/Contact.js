import React from 'react'
import styles from '@/styles/contact.module.css'
import linkedin from '@/public/linkedin.png'
import github from '@/public/github.png'
import behance from '@/public/behance.png'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.smlinks}>
      <a href='https://www.linkedin.com/in/beyza-b-014882177/'><Image className={styles.smicon} src={linkedin}/></a>
      <a href='https://github.com/hakuthewizard'><Image className={styles.smicon} src={github}/></a>
      <a href='https://www.behance.net/beyzaball1'><Image className={styles.smicon} src={behance}/></a>
    </div>
  )
}

export default Contact;