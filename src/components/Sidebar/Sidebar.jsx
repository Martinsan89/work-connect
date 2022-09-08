import React from 'react'
import styles from './sidebar.module.css'
import Settings from './icons/Settings'
import Advertisements from './icons/Advertisements.jsx'
import Profile from './icons/Profile.jsx'
import Logout from './icons/Logout.jsx'
import Inbox from './icons/Inbox.jsx'
import Notifications from './icons/Notifications.jsx'
import { NavLink, Outlet } from 'react-router-dom'


const Sidebar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'white' : '#001A24',
            backgroundColor: isActive ? '#107ACC' : 'white'
        }
    } 
 
  return (
    <div>
        <div className={`${styles.divContenedor}`}>  {/* className={`${styles.divFlex}`} */} 
            <div className={styles.logo}>
                {/* <img src={vector} alt="home icon" className={styles.iconLogo} />
                <p>App Name</p> */}
            </div>
            <NavLink style={navLinkStyle} to='advertisements' className={styles.navLinkTop}>    
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Advertisements fill={isActive ? 'white' : 'black'} className={styles.camila} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Advertisements</p>
                </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='notifications' className={styles.navLink}> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Notifications fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Notifications</p>
                </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='inbox' className={styles.navLink}> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Inbox fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Inbox</p>
                </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='profile' className={styles.navLink}> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Profile fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Profile</p>
                </div>
                )}
            </NavLink>
            {/* <NavLink style={navLinkStyle} to='settings' className={styles.navLink}> 
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Settings fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Settings</p>
                </div>
                )}
<<<<<<< HEAD
            </NavLink> */}
            <NavLink style={navLinkStyle} to='/' className={styles.navLinkBottom}> 
=======
            </NavLink>
            <NavLink style={navLinkStyle} to='logout' className={styles.navLinkBottom}> 
>>>>>>> refs/remotes/origin/main
                {({isActive}) => (
                    <div className={styles.divFlex}>
                    <div className={styles.icons}>
                        <Logout fill={isActive ? 'white' : 'black'} />
                    </div>
                    <p style={{color: isActive ? 'white' : '#001A24' }}>Log Out</p>
                </div>
                )}
            </NavLink>
        </div>
<<<<<<< HEAD
        <div style={{width:'75%', marginLeft:'18rem'}}>
=======
        <div className={`${styles.outlet}`}>
>>>>>>> refs/remotes/origin/main
            <Outlet />
        </div>
    </div>
  )
}

export default Sidebar