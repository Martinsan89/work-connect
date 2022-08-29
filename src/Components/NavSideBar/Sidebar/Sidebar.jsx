import React from 'react'
import styles from './Sidebar.module.css'
import Settings from '../../../assets/Sidebar/Settings'
import Advertisements from '../../../assets/Sidebar/Advertisements'
import Profile from '../../../assets/Sidebar/Profile'
import Logout from '../../../assets/Sidebar/Logout'
import Inbox from '../../../assets/Sidebar/Inbox'
import Notifications from '../../../assets/Sidebar/Notifications'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div>
        <div className={styles.divContenedor}>
            <div className={styles.logo}>
                {/* <img src={vector} alt="home icon" className={styles.iconLogo} />
                <p>App Name</p> */}
            </div>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Advertisements fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Advertisements</p>
                </div>
                )}
            </NavLink>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Notifications fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Notifications</p>
                </div>
                )}
            </NavLink>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Inbox fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Inbox</p>
                </div>
                )}
            </NavLink>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Profile fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Profile</p>
                </div>
                )}
            </NavLink>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Settings fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Settings</p>
                </div>
                )}
            </NavLink>
            <NavLink> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Logout fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p>Log Out</p>
                </div>
                )}
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar