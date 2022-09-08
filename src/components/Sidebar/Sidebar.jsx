import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'
import Settings from '../../assets/icons/Settings'
import Advertisements from '../../assets/icons/Advertisements.jsx'
import Profile from '../../assets/icons/Profile.jsx'
import Logout from '../../assets/icons/Logout.jsx'
import Inbox from '../../assets/icons/Inbox.jsx'
import Notifications from '../../assets/icons/Notifications.jsx'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../assets/Login/LogoBlue.svg'


const Sidebar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'white' : '#001A24',
            backgroundColor: isActive ? '#142157' : 'white'
        }
    } 
 
  return (
    <div>
        <div className={`${styles.divContenedor}`}>  {/* className={`${styles.divFlex}`} */} 
            <div className={styles.logo}>
                <img src={logo} alt="home icon" style={{marginLeft:'3rem', marginTop:'2rem', width:'75%'}}/>
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
            </NavLink> */}
            <NavLink style={navLinkStyle} to='/' className={styles.navLinkBottom}> 
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
        <div style={{width:'75%', marginLeft:'18rem'}}>
            <Outlet />
        </div>
    </div>
  )
}

export default Sidebar