import React from 'react'
import styles from '../Pages/Languages.module.css'
import UK from '../assets/Flags/UK.svg'
import Holland from '../assets/Flags/Holland.svg'
import StarFull from '../assets/Stars/StarFull.svg'
import StarEmpty from '../assets/Stars/StarEmpty.svg'

export default function Languages() {
  return (
    <div >
      <div className={`${styles.tagLanguage}`}>
        <div>
          <img src={Holland} alt="flag" className={`${styles.flag}`} />
        </div>
        <div className={`${styles.text}`}>
          <div>
            <p className={`${styles.flagName}`}>Dutch</p> 
          </div>
          <div>
            <p className={`${styles.flagLevel}`}>Conversational</p>
          </div>
        </div>
        <div >
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
        </div>
      </div>
      <div className={`${styles.tagLanguage}`}>
        <div>
          <img src={UK} alt="flag" className={`${styles.flag}`} />
        </div>
        <div className={`${styles.text}`}>
          <div>
            <p className={`${styles.flagName}`}>English</p> 
          </div>
          <div>
            <p className={`${styles.flagLevel}`}>Conversational</p>
          </div>
        </div>
        <div >
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
          <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
        </div>
      </div>
    </div>
  )
}
