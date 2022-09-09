import React, {useState, useReducer} from 'react'
import styles from '../Language/Languages.module.css'
import English from '../../../assets/Flags/English.svg'
import Holland from '../../../assets/Flags/Holland.svg'
import Belgian from '../../../assets/Flags/Belgian.png'
import Chinese from '../../../assets/Flags/Chinese.png'
import Danish from '../../../assets/Flags/Danish.png'
import Dutch from '../../../assets/Flags/Dutch.png'
import French from '../../../assets/Flags/French.png'
import German from '../../../assets/Flags/German.png'
import Italian from '../../../assets/Flags/Italian.png'
import Norwegian from '../../../assets/Flags/Norwegian.png'
import Russian from '../../../assets/Flags/Russian.png'
import Spanish from '../../../assets/Flags/Spanish.png'
import Swedish from '../../../assets/Flags/Swedish.png'
import Turkish from '../../../assets/Flags/Turkish.png'
import StarFull from '../../../assets/Stars/StarFull.svg'
import StarEmpty from '../../../assets/Stars/StarEmpty.svg'
import Edit from '../../../assets/Buttons/Edit.svg'
import Pen from '../../../assets/Edit/Pen.svg'
import Trash from '../../../assets/Edit/Trash.svg'
import ModalLanguage from './ModalLanguage'
import UpdateLanguage from './UpdateLanguage'
import { useSelector, useDispatch } from 'react-redux'
import {deleteLanguage} from '../../../features/LanguageFeature'

export default function Languages() {

  const languageList = useSelector((state) => state.languages.value);
  const disp = useDispatch();

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleEdit":
        return{showEditIcons: state.showEditIcons = true, showEdit: !state.showEdit, showEditButtons: state.showEditButtons = true}
      case "closeEdit": 
        return{showEditIcons: !state.showEditIcons, showEdit: state.showEdit = true, showEditButtons: !state.showEditButtons}
      default: 
        return state;    
    }
  }

  const [modalShow, setModalShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [id, setId] = useState(0);
  const [state, dispatch] = useReducer(reducer, {showEditIcons:false, showEdit:true, showEditButtons:false })
  const [language, setLanguage] = useState('')

  return (
    <div style={{position:'relative', bottom:'2rem'}}>
      {languageList.map((language) => {
        return (
          <div className={`${styles.tagLanguage}`} key={language.id}>
            <div style={{width:'34%', display:'flex', marginTop:'1rem'}}>
            {language.language === 'Belgian' && <img src={Belgian} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Chinese' && <img src={Chinese} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Danish' && <img src={Danish} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Dutch' && <img src={Dutch} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'English' && <img src={English} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'French' && <img src={French} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'German' && <img src={German} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Holland' && <img src={Holland} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Italian' && <img src={Italian} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Norwegian' && <img src={Norwegian} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Russian' && <img src={Russian} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Spanish' && <img src={Spanish} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Swedish' && <img src={Swedish} alt="flag" className={`${styles.flag}`} />}
            {language.language === 'Turkish' && <img src={Turkish} alt="flag" className={`${styles.flag}`} />}
            <div className={`${styles.text}`}>
              <div>
                <p className={`${styles.flagName}`}>{language.language}</p> 
              </div>
              <div>
                <p className={`${styles.flagLevel}`}>{language.level}</p>
              </div>
            </div>
            </div>
            <div>
              {language.level === 'Basic' && <div>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
              </div>}
              {language.level === 'Intermediate' && <div>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
              </div>}
              {language.level === 'Conversational' && <div>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
              </div>}
              {language.level === 'Nativ' && <div>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
              </div>}
              {state.showEditIcons && <div style={{display: 'flex', justifyContent: 'flex-end', width: '28%', alignContent: 'center',
                position: 'relative', left: '72%', gap: '2rem', marginBottom:'-1rem', bottom:'-.5rem'}}><button style={{border:'none', background:'none'}} onClick={() => {setUpdateShow(true), setId(language)}}><img style={{backgroundColor:'white'}} src={Pen} /></button>
                  <button style={{border:'none', background:'none'}} onClick={() => {
                  disp(deleteLanguage({id: language.id}))
                }}><img style={{backgroundColor:'white'}} src={Trash} /></button></div> }
            </div>
          </div>
        )
      })}
      <div className={`${styles.buttonSet}`}>
        {state.showEdit && <button variant="primary" style={{backgroundColor: '#ffff',
        border: 'none'}}  onClick={() => dispatch({type:"toggleEdit"})}>
            <img className={`${styles.imgButton}`} src={Edit} alt="Chatbutton" /> 
        </button>}
        {state.showEditButtons && <div style={{position: 'fixed', top:'46rem', width:'60%', left:'72%'}}>
          <button onClick={() => {setModalShow(true), setLanguage('')}} style={{padding:'1rem', backgroundColor:'#142157', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white'}}>ADD</button>
          <button style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', marginLeft:'10px', border:'none'}} onClick={() => dispatch({type:"closeEdit"})} >SAVE</button>
        </div> }
          <ModalLanguage show={modalShow} onHide={() => {setModalShow(false), setLanguage('')}} language={language}/>
          <UpdateLanguage show={updateShow} onHide={() => setUpdateShow(false)} id={id}/>
      </div>
    </div>
  )
}
