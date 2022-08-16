import React from 'react'
import styles from '../Pages/Curriculum.module.css'
import PDF from '../assets/CV/PDF.svg'
import eye from '../assets/CV/Eye.svg'

export default function Curriculum() {
  return (
    <div>
      <div className={`${styles.tagCV}`}>
        <div>
          <img src={PDF} alt="cv" className={`${styles.cv}`} />
        </div>
        <div className={`${styles.textCV}`}>
          <div>
            <p className={`${styles.cvName}`}>CV - English</p> 
          </div>
          <div>
            <p className={`${styles.cvLevel}`}>PDF</p>
          </div>
        </div>
        <div className={`${styles.tagEye}`}>
          <img src={eye} alt="starFUll" className={`${styles.eye}`}/>
          <a href="#" className={`${styles.eyeText}`}>VIEW FILE</a>
        </div>
      </div>
      <div className={`${styles.tagCV}`}>
        <div>
          <img src={PDF} alt="cv" className={`${styles.cv}`} />
        </div>
        <div className={`${styles.textCV}`}>
          <div>
            <p className={`${styles.cvName}`}>CV - Dutch</p> 
          </div>
          <div>
            <p className={`${styles.cvLevel}`}>PDF</p>
          </div>
        </div>
        <div className={`${styles.tagEye}`}>
          <img src={eye} alt="starFUll" className={`${styles.eye}`}/>
          <a href="#" className={`${styles.eyeText}`}>VIEW FILE</a>
        </div>
      </div>
    </div>
  )
}
