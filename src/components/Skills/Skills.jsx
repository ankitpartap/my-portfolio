import React from 'react'
import skills from '../../data/skills.json'
import styles from './Skills.module.css'
import { getImageUrl } from '../../utils'

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Skillset</h2>
        <div className={styles.mySkills}>
            {
                skills.map((skill, id)=>{
                    return (
                        <div key={id} className={styles.mySkill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
