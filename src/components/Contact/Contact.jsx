import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:ankitpartap47@gmail.com" target='new'>ankitpartap47@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedIn" />
                <a href="https://www.linkedin.com/in/ankitpartap/" target='new'>linkedin.com/in/ankitpartap</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                <a href="https://github.com/ankitpartap" target='new'>github/ankitpartap</a>
            </li>
        </ul>
    </footer>
  )
}
