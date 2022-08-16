import React from 'react'
import styles from '../Pages/Education.module.css'
export default function Education() {
  return (
    <div>
      <div className={`${styles.educationTag}`}>
        <div className={`${styles.educationTitle}`}>
          <div className={`${styles.tagTitle}`}>
            <p>Systems Engineer</p>
          </div>
          <div className={`${styles.tagDate}`}>
            <p>From 2015 to 2020</p>
          </div>
        </div>
        <div>
          <div className={`${styles.subtitle}`}>
            <p>United Virtual University</p>
          </div>
          <div className={`${styles.text}`}>
            <p>Master's Degree</p>
          </div>
        </div>
      </div>
      <div className={`${styles.educationTag}`}>
        <div className={`${styles.educationTitle}`}>
          <div className={`${styles.tagTitle}`}>
            <p>Graphic Design</p>
          </div>
          <div className={`${styles.tagDate}`}>
            <p>From 2013 to 2015</p>
          </div>
        </div>
        <div>
          <div className={`${styles.subtitle}`}>
            <p>United Virtual University</p>
          </div>
          <div className={`${styles.text}`}>
            <p>Associate Degree</p>
          </div>
        </div>
      </div>
    </div>
  )
}
