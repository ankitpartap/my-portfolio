import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ankit</h1>
            <p className={styles.description}>Passionate about learning new technologies, sharing my knowledge with others and helping businesses to grow by providing tech-based solutions. I'm open to job opportunities where I can contribute, learn, and grow.</p>
            <a href="https://wa.me/917888912043?text=Hi!%20I'm%20found%20your%20profile%20intersted.%20Would%20you%20please%20tell%20me%20more%20about%20youself?" className={styles.contactBtn}>Let's Talk</a>
        </div>
        <img src={getImageUrl("hero/picofme2.png")} className={styles.heroImg} alt="image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        
    </section>
    
  )
}
