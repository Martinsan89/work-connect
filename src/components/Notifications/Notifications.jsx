import React from 'react'
import { NavLink } from 'react-router-dom'
import Inbox from '../Sidebar/icons/Notifications'
import Work from './Icons/Work'
import eye from '../../assets/Img/PinkEye.png'
import styles from './notifications.module.css'

const Notifications = () => {
  return (
    <div style={{width:'94%'}}>
        <div className={styles.flexTitle}>
            <Inbox fill='white' />
            <h5>Notifications</h5>
        </div>
        <div className={styles.flexItems}>
            <div className={styles.flex}>
                <Work w={'40px'} h={'40px'} className={styles.icon} />
                <div className={styles.description}>
                    <p className={styles.pOne}>The advertisments has been updated</p>
                    <p className={styles.pTwo}>Project Manager for Development Team</p>
                </div>
            </div>
            <div className={styles.flexItems2}>
                <div className={styles.flex}>
                    <img src={eye} className={styles.eye} />
                    <p>VIEW</p>
                </div>
                <div>
                    <p>08/20/22</p>
                </div>
            </div>
        </div>
        <div className={styles.flexItems}>
            <div className={styles.flex}>
                <Work w={'40px'} h={'40px'} className={styles.icon} />
                <div className={styles.description}>
                    <p className={styles.pOne}>The advertisments has been updated</p>
                    <p className={styles.pTwo}>Project Manager for Development Team</p>
                </div>
            </div>
            <div className={styles.flexItems2}>
                <div className={styles.flex}>
                    <img src={eye} className={styles.eye} />
                    <p>VIEW</p>
                </div>
                <div>
                    <p>08/20/22</p>
                </div>
            </div>
        </div>
        <div className={styles.flexItems}>
            <div className={styles.flex}>
                <Work w={'40px'} h={'40px'} className={styles.icon} />
                <div className={styles.description}>
                    <p className={styles.pOne}>The advertisments has been updated</p>
                    <p className={styles.pTwo}>Project Manager for Development Team</p>
                </div>
            </div>
            <div className={styles.flexItems2}>
                <div className={styles.flex}>
                    <img src={eye} className={styles.eye} />
                    <p>VIEW</p>
                </div>
                <div>
                    <p>08/20/22</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notifications