import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ankit</h1>
            <p className={styles.description}>I am passionate about training young minds in technology and dedicated to helping businesses grow by providing innovative tech-based solutions.</p>
            <a href="https://wa.me/917888912043?text=Hi!%20I'm%20found%20your%20profile%20intersted.%20Would%20you%20please%20tell%20me%20more%20about%20you?" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/picofme2.png")} className={styles.heroImg} alt="image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        
    </section>
    
  )
}
