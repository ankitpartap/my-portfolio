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
                <a href="mailto:ankitpartap47@gmail.com" target='new'>
                    <Mail size={40} strokeWidth={1.75} />
                    ankitpartap47@gmail.com
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/ankitpartap/" target='new'>
                    <Linkedin size={40}  strokeWidth={1.5} />
                    linkedin.com/in/ankitpartap
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/ankitpartap" target='new'>
                     <Github size={40}  strokeWidth={1.5}/>
                     github/ankitpartap</a>
            </li>
        </ul>
    </footer>
  )
}
