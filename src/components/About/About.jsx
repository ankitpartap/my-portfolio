import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/about1.png")} alt="me sitting with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web.png")} alt="cursor icon" />
            <div className={styles.aboutItemtext}>
              <h3>Web Development</h3>
              <p>I made various project and provide training to college students. Also provide web based solutions to the clients</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/teaching.png")} alt="server icon" />
            <div className={styles.aboutItemtext}>
              <h3>Teaching</h3>
              <p>Having an year of experience in teaching computer & coding to stuff to the stduents of schools and colleges</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/services.png")} alt="UI icon" />
            <div className={styles.aboutItemtext}>
              <h3>IT Service</h3>
              <p>I help different businesses by providing different type of service to make their presence online</p>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  )
}
