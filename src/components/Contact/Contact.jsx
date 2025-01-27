import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
import { FileUser, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:ankitpartap47@gmail.com" target="new" className={styles.flexContainer}>
                    <Mail size={45} strokeWidth={1.75} />
                    <p>ankitpartap47@gmail.com</p>
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/ankitpartap/" target='new' className={styles.flexContainer}>
                    <Linkedin size={45}  strokeWidth={1.5} />
                    <p>linkedin.com/in/ankitpartap</p>
                </a>
            </li>
            <li className={styles.link}>
                    <a href="https://github.com/ankitpartap" target='new' className={styles.flexContainer}>
                        <Github size={45}  strokeWidth={1.5}/>
                        <p>ankitpartap47@gmail.com</p>
                    </a>
            </li>
        </ul>
    </footer>
  )
}
