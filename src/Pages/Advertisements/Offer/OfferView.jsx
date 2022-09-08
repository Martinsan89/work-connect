import {Form, Button} from 'react-bootstrap'
import Search from '../../../assets/Advertisements/Search.svg'
import {ResultsData} from '../../../data/ResultsData'
import styles from '../../../Pages/Advertisements/Offer/OfferView.module.css'
import Clock from '../../../assets/Results/Clock.svg'
import Marker from '../../../assets/Results/Marker.svg'
import Work from '../../../assets/Results/Work.svg'
import Chat from '../../../assets/Results/Chat.svg'



const OfferView = () => {
  return (
    <div>
      <Form style={{width:'70%', margin:'2rem 0'}}>
            <Form.Group style={{display:'inline-flex', width:'100%', gap:'1rem', alignItems:'center', position:'relative'}}>
              <img style={{position:'absolute', left:'10px'}} src={Search} alt="search" />
              <Form.Control type="text" className="form-control bg-light" placeholder="Search jobs, skills, etc." name="username" style={{borderRadius:'2rem', color:'#B3B1B4', opacity:'.5', height:'52px', paddingLeft:'3rem'}}/>
              <button to='results' type='button' style={{padding:'1rem', backgroundColor:'#142157', width:'190px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', border:'none', justifyContent:'none', gap:'1rem'}}>SEARCH</button>
            </Form.Group>
      </Form>
      {/* Accordion */}
      <div style={{display:'flex', gap:'1rem', flexDirection:'column', marginTop:'43.5rem', width:'30%',  height:'12vh', justifyContent:'flex-end', position:'relative', left:'43rem'}}>
        <div style={{width:'87%', height:'23vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)'}}>
          <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'24%'}}>
            <div style={{color:'white', textAlign:'center', padding:'5px 0', fontSize:'24px', fontWeight:'600'}}>
              <p style={{fontSize:'22px'}}>Categories</p>
            </div>
          </div>
          <div style={{height:'14vh', backgroundColor:'white', borderRadius:'1rem'}}>
              <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingTop:'1rem'}}>
                <div style={{padding:'10px 4px'}}>
                  <label style={{backgroundColor:'white', color:'#B3B1B4', border:'1px solid #B3B1B4', padding:'10px', height:'1rem', fontSize:'14px', borderRadius:'1rem', textAlign:'center', lineHeight:'2px'}}>Offer Type</label>
                </div>
              </div>
          </div>
        </div>
        <div style={{width:'87%', height:'23vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)'}}>
          <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'24%'}}>
            <div style={{color:'white', textAlign:'center', padding:'5px 0', fontSize:'24px', fontWeight:'600'}}>
              <p style={{fontSize:'22px'}}>Offer Type</p>
            </div>
          </div>
          <div style={{height:'14vh', backgroundColor:'white', borderRadius:'1rem'}}>
              <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingTop:'1rem'}}>
                <div style={{padding:'10px 4px'}}>
                  <label style={{backgroundColor:'white', color:'#B3B1B4', border:'1px solid #B3B1B4', padding:'10px', height:'1rem', fontSize:'14px', borderRadius:'1rem', textAlign:'center', lineHeight:'2px'}}>Developer</label>
                </div>
              </div>
          </div>
        </div>
        <div style={{width:'87%', height:'23vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)'}}>
          <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'24%'}}>
            <div style={{color:'white', textAlign:'center', padding:'5px 0', fontSize:'24px', fontWeight:'600'}}>
              <p style={{fontSize:'22px'}}>Apply Now</p>
            </div>
          </div>
          <div style={{height:'25vh', backgroundColor:'white', borderRadius:'1rem'}}>
              <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingTop:'1rem'}}>
                <div style={{padding:'10px 4px'}}>
                  <p>Project Manager for Development Team</p>
                  <a style={{textDecoration:'none'}} href="#">Sample Tech, Inc</a>
                  <Button  style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', border:'none', margin:'2rem 0' }}> <img src={Chat} alt="chat" /> START CHART</Button>
                </div>
              </div>
          </div>
        </div>
        <div style={{width:'87%', height:'23vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)', marginTop:'5rem'}}>
          <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'24%'}}>
            <div style={{color:'white', textAlign:'center', padding:'5px 0', fontSize:'24px', fontWeight:'600'}}>
              <p style={{fontSize:'22px'}}>Popular categories</p>
            </div>
          </div>
          <div style={{height:'14vh', backgroundColor:'white', borderRadius:'1rem'}}>
              <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingTop:'1rem'}}>
                <div style={{padding:'10px 4px'}}>
                  <label style={{backgroundColor:'white', color:'#B3B1B4', border:'1px solid #B3B1B4', padding:'10px', height:'1rem', fontSize:'14px', borderRadius:'1rem', textAlign:'center', lineHeight:'2px'}}>Developer</label>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* Display jobs */}
      <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', width:'70%', height:'4rem', position:'relative', bottom:'49rem'}}>
        <div style={{color:'white', paddingLeft:'2px', padding:'1px', fontSize:'24px', fontWeight:'600'}}>
          <p style={{fontSize:'22px', margin:'1rem'}}>Job Offer Summary</p>
        </div>
        {ResultsData.map((result) => {
          return (
            <div className={`${styles.educationTag}`} key={result.id}>
              <div className={`${styles.educationTitle}`}>
                <div className={`${styles.tagTitle}`}>
                  <p>{result.title}</p>
                </div>
              </div>
              <div>
                <div className={`${styles.subtitle}`}>
                  <p>{result.text}</p>
                </div>
                <div className={`${styles.text}`}>
                  <span style={{display:'flex', alignItems:'flex-start', gap:'3px'}}>
                    <img style={{width:'17px'}} src={Work} alt="work" /> 
                    <p style={{fontSize:'14px'}}>{result.work}</p></span>
                    <span style={{display:'flex', alignItems:'flex-start', gap:'3px'}}>
                      <img style={{width:'17px'}} src={Marker} alt="marker" />
                      <p style={{fontSize:'14px'}}>{result.place}</p>
                    </span>
                  <span style={{display:'flex', alignItems:'flex-start', gap:'3px'}}>
                    <img style={{width:'17px'}} src={Clock} alt="marker" />
                    <p style={{fontSize:'14px'}}>{result.month}</p>
                  </span>
                  <p>{result.day}</p>
                  <p>{result.year}</p>
                  <p>{result.time}</p>
                </div>
              </div>
            </div>
          )
        })}
        <div style={{padding:'10px 4px'}}>
          <div style={{backgroundColor:'white', color:'#B3B1B4', padding:'10px', fontSize:'14px', borderRadius:'5px', lineHeight:'2px'}}>
            <div style={{borderBottom:'1px solid', padding:'1rem'}}>
              <h4>Job Information</h4>
              <span style={{display:'flex', gap:'6rem', paddingTop:'10px'}}>Categories: <p>Software, Development, Management</p></span>
              <span style={{display:'flex', gap:'7rem'}}>Journey: <p>Full Time</p></span>
              <span style={{display:'flex', gap:'4rem'}}>Type of Journey: <p>Remote</p></span>
              <span style={{display:'flex', gap:'6.5rem'}}>Publisher: <p>Jessie Doe</p></span>
            </div>
            <div style={{borderBottom:'1px solid', padding:'1rem'}}>
              <h4 style={{paddingBottom:'10px'}}>Description</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, praesentium necessitatibus sint magni distinctio officiis animi est, enim commodi quibusdam alias possimus eaque voluptatum quidem optio unde ipsa tenetur doloremque recusandae! Iure nisi illum quidem!</h6>
            </div>
            <div style={{padding:'1rem'}}>
              <h4>Requirements</h4>
              <ul style={{paddingTop:'1rem'}}>
                <li style={{height:'17px'}}>Fluent or conversational English</li>
                <li style={{height:'17px'}}>Master's degree</li>
                <li style={{height:'17px'}}>At least 4 years of experience in development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferView
