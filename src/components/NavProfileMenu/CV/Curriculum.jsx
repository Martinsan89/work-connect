import React, {useState, useReducer} from 'react'
import styles from '../CV/Curriculum.module.css'
import PDF from '../../../assets/CV/PDF.svg'
import eye from '../../../assets/CV/Eye.svg'
import Edit from '../../../assets/Buttons/Edit.svg'
import Pen from '../../../assets/Edit/Pen.svg'
import Trash from '../../../assets/Edit/Trash.svg'
import ModalCurriculum from '../CV/ModalCurriculum'
import { useSelector, useDispatch } from 'react-redux'
// import {deleteCV} from '../../../features/CVFeature'

export default function Curriculum() {

  const cvList = useSelector((state) => state.cvs.value);
  // const disp = useDispatch();
  
  // console.log(cvList)
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
  const [state, dispatch] = useReducer(reducer, {showEditIcons:false, showEdit:true, showEditButtons:false })

  return (
    <div style={{position:'relative', bottom:'2rem'}}>
      {cvList.map((cv)=>{
        return (
        <div className={`${styles.tagCV}`} key={cv.id}>
        <div style={{width:'34%', display:'flex', gap:'1rem', marginTop:'1rem'}}>
          <img src={PDF} alt="cv" className={`${styles.cv}`} />
        <div className={`${styles.textCV}`}>
          <div>
            <p className={`${styles.cvName}`}>{cv.files.name.file.name}</p> 
          </div>
        </div>
        </div>
        {state.showEditIcons ? 
        <div style={{display: 'flex', justifyContent: 'flex-end', width: '28%', alignContent: 'center', gap: '2rem', marginRight:'1rem'}}><img src={Pen} /><img src={Trash} /> </div> :  <div className={`${styles.tagEye}`}>
            <img src={eye} alt="starFUll" className={`${styles.eye}`}/>
            <a href="#" className={`${styles.eyeText}`}>VIEW FILE</a>
          </div>}
        </div>
        )}
      )}
      <div className={`${styles.buttonSet}`}>
        {state.showEdit && <button variant="primary" style={{backgroundColor: '#ffff',
        border: 'none', background:'none'}}  onClick={() => dispatch({type:"toggleEdit"})}>
            <img className={`${styles.imgButton}`} src={Edit} alt="Chatbutton" /> 
        </button>}
        {state.showEditButtons && <div style={{position: 'fixed', top:'46rem', right:'8%'}}>
          <button onClick={() => setModalShow(true)} style={{padding:'1rem', backgroundColor:'#142157', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white'}}>ADD</button>
          <button style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', marginLeft:'10px', border:'none'}} onClick={() => dispatch({type:"closeEdit"})} >SAVE</button>
        </div> }
          <ModalCurriculum show={modalShow} onHide={() => setModalShow(false)}/>
      </div>
    </div>
  )
}
