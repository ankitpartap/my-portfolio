import React from 'react'
import { getImageUrl } from '../../utils'
import history from '../../data/history.json'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id)=>{
                        return(
                            <li key={id} className={styles.historyItems}>
                                <img 
                                src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    {/* <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3> */}
                                    <h3>{`${historyItem.role}`}</h3>
                                    <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id)=>{
                                            return(
                                                <li key={id}>{experience}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        
    </section>
  )
}
