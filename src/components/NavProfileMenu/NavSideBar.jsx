import React from 'react'
import styles from './NavSideBar.module.css'
import CVSVG from './NavSideBarSvg/CvSvg'
import WorkSVG from './NavSideBarSvg/WorkSvg'
import EducationSVG from './NavSideBarSvg/EducationSvg'
import LanguageSVG from './NavSideBarSvg/LanguageSvg'
import {NavLink, Outlet} from 'react-router-dom'




export default function NavSideBar() {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'white' : '#001A24',
            backgroundColor: isActive ? '#142157' : 'white'
        }
    } 

  return (
    <div>
        <div className={`${styles.navSection}`}>
            <div className={`${styles.navbar}`} >
                <NavLink style={navLinkStyle} to='work' className={`${styles.itemTop}`}>
                    {({isActive}) => (
                        <div className={`${styles.tagNav}`}>
                            <div >
                                <WorkSVG fill={isActive ? 'white' : 'black'} />
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
                                <EducationSVG fill={isActive ? 'white' : 'black'} />
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
                                <LanguageSVG fill={isActive ? 'white' : 'black'} />
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
                                <CVSVG fill={isActive ? 'white' : 'black'} />
                            </div>
                            <div className={`${styles.title}`}>
                                <p style={{marginBottom:'0'}}>Curriculum Vitae</p>
                            </div>
                        </div>
                    )}
                </NavLink>
            </div>
            <div className={`${styles.outletNavSideBar}`}>
                <Outlet />
            </div>
            {/* <Routes>
                <Route path='work' element={<Work />}/>
                <Route path='education' element={<Education />}/>
                <Route path='curriculum' element={<Curriculum />}/>
                <Route path='language' element={<Language />}/>  
            </Routes> */}
        </div>

    </div>
  )
}
