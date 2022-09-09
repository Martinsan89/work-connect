import React from 'react'
import styles from './chat.module.css'
import man from '../../assets/Img/imageman.png'
import woman from '../../assets/Img/imagewoman.png'
import lupa from '../../assets/Img/Search.svg'
import logo from '../../assets/Img/Logo.png'
import send from '../../assets/Img/Send.svg'
import report from '../../assets/Img/Report.svg'

const Chat = () => {
  return (
    <div className={styles.flex}>
        <div className={styles.divOne}>
            <div className={styles.title}>
                <p>Messages</p>
            </div>
            <div className={styles.search}>
                <input className={styles.inputMessage} type="text" placeholder='Search in messages' />
                <img src={lupa} alt="" className={styles.buscar} />
            </div>
            <div style={{backgroundColor:'white', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)', height:'77.5vh'}}>
                <div className={styles.flexMessages}> 
                    <div>
                        <img src={man} alt="" className={styles.image} />
                    </div>
                    <div>
                        <div className={styles.flexName}>
                            <p className={styles.name}>Camila Pagie</p>
                            <p className={styles.date}>22/07/1995</p>
                        </div>
                        <div>
                            <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flexMessages}> 
                    <div>
                        <img src={woman} alt="" className={styles.image} />
                    </div>
                    <div>
                        <div className={styles.flexName}>
                            <p className={styles.name}>Nico Pagie</p>
                            <p className={styles.date}>22/07/1995</p>
                        </div>
                        <div>
                            <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flexMessages}> 
                    <div>
                        <img src={woman} alt="" className={styles.image} />
                    </div>
                    <div>
                        <div className={styles.flexName}>
                            <p className={styles.name}>Martín Pagie</p>
                            <p className={styles.date}>22/07/1995</p>
                        </div>
                        <div>
                            <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div className={styles.divTwo}>
            <div className={styles.flex}>
                <img src={woman} alt="" className={styles.image} />
                <p>Walter James</p>
            </div>
            <div>
                <div>
                    <div className={styles.message}>
                        <p className={styles.one}>ascdacfadcfsdcsdcsdc dcsdacdcsdcsdcsd</p>
                        <p className={styles.two}>22:47</p>
                    </div>
                    <div className={styles.messageWhite}>
                        <p className={styles.one}>ascdacfadcfsdcsdcsdc dcsdacdcsdcsdcsd</p>
                        <p className={styles.two}>22:47</p>
                    </div>
                    <div className={styles.message}>
                        <p className={styles.one}>ascdacfadcfsdcsdcsdc dcsdacdcsdcsdcsd</p>
                        <p className={styles.two}>22:47</p>
                    </div>
                    <div className={styles.messageWhite}>   
                        <p className={styles.one}>ascdacfadcfsdcsdcsdc dcsdacdcsdcsdcsd</p>
                        <p className={styles.two}>22:47</p>
                    </div>
                </div>
                <div className={styles.divInput}>
                    <input className={styles.inputTwo} type="text" placeholder='Este es el placeholder' />
                    <img src={send} alt="" className={styles.image} />
                </div>
            </div>
        </div>

        <div className={styles.flexColumn}>
            <div className={styles.divThree}>
                <div className={styles.divImg}>
                    <img src={woman} alt="" className={styles.image} />
                </div>
                <div className={styles.divName}>
                    <p className={styles.name}>Walter James</p>
                    <p className={styles.job}>IT Recruiter</p>
                </div>
                <div className={styles.divLogo}>
                    <img src={logo} alt="" className={styles.logo} />
                </div>
                <div className={styles.divButton}>
                    <button>VIEW PROFILE</button>
                </div>
            </div>
            <br />
            <div className={styles.flex}>
                <img src={report} alt="" />
                <a href='#'>Report abuse of scam</a>
            </div>
        </div>
        
    </div>
  )
}

export default Chat