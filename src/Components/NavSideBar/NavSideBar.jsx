import React from 'react'
import styles from './NavSideBar.module.css'
import CV from './NavSideBarSvg/CvSvg'
import Work from './NavSideBarSvg/WorkSvg'
import Education from './NavSideBarSvg/EducationSvg'
import Language from './NavSideBarSvg/LanguageSvg'
import {NavLink, Outlet} from 'react-router-dom'
import Profile from './Components/NavSideBar/Profile/Profile'


export default function NavSideBar() {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'white' : '#001A24',
            backgroundColor: isActive ? '#142157' : 'white'
        }
    } 

  return (
    <div className={`${styles.navSection}`}>
        <div>
          <Profile />
        </div>
        <div className={`${styles.navbar}`} >
            <NavLink style={navLinkStyle} to='work' className={`${styles.itemTop}`}>
                {({isActive}) => (
                    <div className={`${styles.tagNav}`}>
                        <div >
                            <Work fill={isActive ? 'white' : 'black'} />
                        </div>
                        <div className={`${styles.title}`}>
                            <p style={{marginBottom:'0'}}>Work Experience</p>
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='education' className={`${styles.items}`}>
            {({isActive}) => (
                    <div className={`${styles.tagNav}`}>
                        <div >
                            <Education fill={isActive ? 'white' : 'black'} />
                        </div>
                        <div className={`${styles.title}`}>
                            <p style={{marginBottom:'0'}}>Education</p>
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='language' className={`${styles.items}`}>
            {({isActive}) => (
                    <div className={`${styles.tagNav}`}>
                        <div >
                            <Language fill={isActive ? 'white' : 'black'} />
                        </div>
                        <div className={`${styles.title}`}>
                            <p style={{marginBottom:'0'}}>Languages</p>
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink style={navLinkStyle} to='curriculum' className={`${styles.items}`}>
            {({isActive}) => (
                    <div className={`${styles.tagNav}`}>
                        <div >
                            <CV fill={isActive ? 'white' : 'black'} />
                        </div>
                        <div className={`${styles.title}`}>
                            <p style={{marginBottom:'0'}}>Curriculum Vitae</p>
                        </div>
                    </div>
                )}
            </NavLink>
        </div>
        <div className={`${styles.outlet}`}>
            <Outlet />
        </div>
    </div>
  )
}
