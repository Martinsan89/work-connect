import React, {useState, useReducer} from 'react'
import styles from '../Work/Work.module.css'
import Edit from '../../../assets/Buttons/Edit.svg'
import Pen from '../../../assets/Edit/Pen.svg'
import Trash from '../../../assets/Edit/Trash.svg'
import ModalWork from '../Work/ModalWork'
import UpdateWork from '../Work/UpdateWork'
import { useSelector, useDispatch } from 'react-redux'
import {deleteWork} from '../../../features/WorkFeatures'

export default function Work() {

  const workList = useSelector((state) => state.works.value);
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

  return (
    <div style={{position:'relative', bottom:'2rem'}}>
      {workList.map((work) => {
        // console.log(work)
        return (
          <div className={`${styles.educationTag}`} key={work.id}>
            <div className={`${styles.educationTitle}`}>
              <div className={`${styles.tagTitle}`}>
                <p>{work.title}</p>
              </div>
              <div className={`${styles.tagDate}`}>
                <p>From {work.dateInicio}</p> <p>to {work.dateFin ? work.dateFin : work.stillWorkin}</p>
              </div>
            </div>
            <div>
              <div className={`${styles.subtitle}`}>
                <p>{work.subtitle}</p>
              </div>
              {state.showEditIcons && <div style={{display: 'flex', justifyContent: 'flex-end', width: '28%', alignContent: 'center',
                position: 'relative', left: '72%', gap: '2rem', marginBottom:'-1rem', bottom:'2rem'}}><button style={{border:'none', background:'none'}} onClick={() => {setUpdateShow(true), setId(work)}}><img style={{backgroundColor:'white'}} src={Pen} /></button>
                  <button style={{border:'none', background:'none'}} onClick={() => {
                  disp(deleteWork({id: work.id}))
                }}><img style={{backgroundColor:'white'}} src={Trash} /></button></div> }
              <div className={`${styles.text}`}>
                <p>{work.text}</p>
              </div>
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
          <button onClick={() => setModalShow(true)} style={{padding:'1rem', backgroundColor:'#142157', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white'}}>ADD</button>
          <button style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', marginLeft:'10px', border:'none'}} onClick={() => dispatch({type:"closeEdit"})} >SAVE</button>
        </div> }
        <ModalWork show={modalShow} onHide={() => setModalShow(false)}/>
        <UpdateWork show={updateShow} onHide={() => setUpdateShow(false)} id={id}/>
      </div>
    </div>
  )
}
