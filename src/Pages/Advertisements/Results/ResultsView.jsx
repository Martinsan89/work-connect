import {Form} from 'react-bootstrap'
import Search from '../../../assets/Advertisements/Search.svg'
import Accordion from 'react-bootstrap/Accordion';
import {ResultsData} from '../../../data/ResultsData'
import eye from '../../../assets/CV/Eye.svg'
import styles from '../../../Pages/Advertisements/Results/ResultsView.module.css'
import Clock from '../../../assets/Results/Clock.svg'
import Marker from '../../../assets/Results/Marker.svg'
import Work from '../../../assets/Results/Work.svg'



const ResultsView = () => {
  return (
    <div>
      <Form style={{width:'70%', margin:'2rem 0'}}>
            <Form.Group style={{display:'inline-flex', width:'100%', gap:'1rem', alignItems:'center', position:'relative'}}>
              <img style={{position:'absolute', left:'10px'}} src={Search} alt="search" />
              <Form.Control type="text" className="form-control bg-light" 			 placeholder="Search jobs, skills, etc." name="username" style={{borderRadius:'2rem', color:'#B3B1B4', opacity:'.5', height:'52px', paddingLeft:'3rem'}}/>
              <button to='results' type='button' style={{padding:'1rem', backgroundColor:'#142157', width:'190px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', border:'none', justifyContent:'none', gap:'1rem'}}>SEARCH</button>
            </Form.Group>
      </Form>
      {/* Accordion */}
      <Accordion defaultActiveKey={['0']} alwaysOpen style={{width:'24%', position:'absolute', right:'47px', top:'2rem'}}>
      <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'15%'}}>
        <div style={{color:'white', textAlign:'center', padding:'1px', fontSize:'24px', fontWeight:'600'}}>
          <p style={{marginTop:'1rem'}}>Filter</p>
        </div>
      </div>  
      <Accordion.Item eventKey="0">
        <Accordion.Header>Date</Accordion.Header>
        <Accordion.Body>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Since yesterday</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 3 Days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last week</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 15 days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last month</label>
            <Form.Check type="switch" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Location</Accordion.Header>
        <Accordion.Body>
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 15 days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last month</label>
            <Form.Check type="switch" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Industry</Accordion.Header>
        <Accordion.Body>
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 15 days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last month</label>
            <Form.Check type="switch" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Journey</Accordion.Header>
        <Accordion.Body>
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 15 days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last month</label>
            <Form.Check type="switch" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Employment Type</Accordion.Header>
        <Accordion.Body>
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last 15 days</label>
            <Form.Check type="switch" />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'auto'}}>
            <label> Last month</label>
            <Form.Check type="switch" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      {/* Display jobs */}
      {ResultsData.map((result) => {
        return (
          <div className={`${styles.educationTag}`} key={result.id}>
            <div className={`${styles.educationTitle}`}>
              <div className={`${styles.tagTitle}`}>
                <p>{result.title}</p>
              </div>
              <div className={`${styles.tagDate}`}>
                <a href="#" className={`${styles.eyeText}`}>
                <img src={eye} alt="starFUll" className={`${styles.eye}`}/>
                  APPLY</a>
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
    </div>
  )
}

export default ResultsView
