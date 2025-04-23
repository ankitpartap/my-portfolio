import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { FileUser, Github, Linkedin, Mail } from 'lucide-react';


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankit</h1>
        <p className={styles.description}>
          Passionate about learning new technologies, sharing my knowledge with
          others and helping businesses to grow by providing tech-based
          solutions. I'm open to job opportunities where I can contribute,
          learn, and grow.
        </p>

        {/* social links */}
        <ul className={styles.links}>
          <li >
            <a href="mailto:ankitpartap47@gmail.com" target='new'>
              <Mail size={48} strokeWidth={1.75} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ankitpartap/" target='new'>
              <Linkedin size={48}  strokeWidth={1.5} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ankitpartap" target='new'>
              <Github size={48}  strokeWidth={1.5}/>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1oNgb_wh2z5zicT79mQzfba1HvT8c_2WT/edit?usp=sharing&ouid=114567035590124468487&rtpof=true&sd=true" target='new'>
            
              <FileUser size={48} strokeWidth={1.75} />
            </a>
          </li>
        </ul>
      </div>
      <img
        src={getImageUrl("hero/picofme2.png")}
        className={styles.heroImg}
        alt="image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
