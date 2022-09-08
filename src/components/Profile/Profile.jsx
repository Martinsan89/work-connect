import { useReducer, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { dataUser } from '../../helpers/dataUser'
import Edit from '../../assets/Profile/Edit.svg'
import styles from './Profile.module.css'
import PersonalDataModal from './PersonalDataModal'

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

const Profile = () => {

  const [modalShow, setModalShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, {showEditIcons: false, showEdit: true, showEditButtons: false })

  return (
    <div style={{width:'100%'}}>
      <div className={ `${ styles.userCard }` } style={ { backgroundColor: '#FFFF' } } >
          <div className={ `text-start card-header ${ styles.userCardHeader_modifier }` }>
              <p className={`${ styles.userName }`}>
                  { `${ dataUser[0].user.name } ${ dataUser[0].user.lastName } | Profile View `} 
              </p>

                <div className={`${styles.buttonSet}`}>

                  {
                    state.showEdit && 
                    
                    <Button className={ styles.buttonWrapper } variant="primary" onClick={() => setModalShow(true)}>
                        <span className='me-2'>Edit</span>
                        <img className = {`${ styles.imgButton }`} src = { Edit } alt="Edit Button" /> 
                    </Button>
                  }

                    <PersonalDataModal show = { modalShow } onHide={ () => setModalShow(false) }/>
                    
                </div>

          </div>
          <div className='text-start ms-3 mt-0'>
              <img className={ styles.userCardImage } src={ dataUser[0].user.img } alt="User Image" />
          </div>

            <div className={ `${ styles.professionText }` }>
                <p>{`${ dataUser[0].user.technology } | ${ dataUser[0].user.technology_2 } | ${ dataUser[0].user.technology_3 }`}</p>
            </div>

            <div className={`${ styles.divPersonalData }`} >
                <p className={ `${ styles.paragraphPersonalData }` }>
                  Name: 
                  <span className={ `${ styles.spanPersonalData }` }> { `${ dataUser[0].user.name }` }</span>
                </p>
                <p className={ `${ styles.paragraphPersonalData }` }>
                  Last Name: 
                  <span className={ `${ styles.spanPersonalData }` }> { `${ dataUser[0].user.lastName }` }</span>
                </p>
                <p className={ `${ styles.paragraphPersonalData }` }>
                  Company: 
                  <span className={ `${ styles.spanPersonalData }` }> { `${ dataUser[0].user.company }` }</span>
                </p>
            </div>
            <hr className={`${ styles.divLine }`}></hr>

          <div className={ `${ styles.contactMainDiv }` }>
            <div className={ `d-flex { styles.contactDiv }` }>
              <img className= { `${ styles.contactIcon }` } src="./src/assets/Profile/phone.svg" alt="" />
              <p className={`mt-3 ms-4 ${ styles.contactInfo }`}>{ `${ dataUser[0].user.phone }` }</p>
            </div>
            <div className={ `d-flex { styles.contactDiv }` }>
              <img className= { `${ styles.contactIcon }` } src="./src/assets/Profile/mail.svg" alt="" />
              <p className={`mt-3 ms-4 ${ styles.contactInfo }`}>{ `${ dataUser[0].user.mail }` }</p>
            </div>
            <div className={ `d-flex { styles.contactDiv }` }>
              <img className= { `${ styles.contactIcon }` } src="./src/assets/Profile/website.svg" alt="" />
              <p className={`mt-3 ms-4 ${ styles.contactInfo }`}>{ `${ dataUser[0].user.website }` }</p>
            </div>
            <div className={ `d-flex { styles.contactDiv }` }>
              <img className= { `${ styles.contactIcon }` } src="./src/assets/Profile/Linkedin.svg" alt="" />
              <p className={`mt-3 ms-4 ${ styles.contactInfo }`}>{ `${ dataUser[0].user.linkedin }` }</p>
            </div>
          </div>
          <hr className={`${ styles.divLine }`}></hr>

          <div>
            <p className={ `${styles.paragraphIntroduction}` }>
            Introduction: <span className={ `${ styles.spanIntroduction }` }> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>
          </div>

      </div>
    </div>
  )
}

export default Profile