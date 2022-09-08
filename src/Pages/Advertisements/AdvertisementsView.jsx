// import styles from '../../Pages/Advertisements/Advertisements.module.css'
import {Form} from 'react-bootstrap'
import {PopularData} from '../../data/Avertisements/PopularData'
import {SearchData} from '../../data/Avertisements/SearchData'
import Search from '../../assets/Advertisements/Search.svg'
import Location from '../../assets/Advertisements/Location.svg'
import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'
import ModalAdvertisement from './Modal/ModalAdvertisement'


const Advertisements = () => {
  
  const [results, setResults] = useState(false)
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      {results ? 
      <Outlet/> :
      <div>
        <div style={{backgroundColor:'white', margin:'auto', marginBottom:'2rem', boxShadow: '4px 4px 16px rgba(0.06, 0.06, 0.06, 0.06)', borderRadius: '0px 0px 16px 16px', padding:'2rem'}}>
          <div style={{margin:'auto'}}>
            <p style={{color:'#107ACC', fontWeight:'800', fontSize:'42px', textAlign:'center'}}>Find job offers near you!</p>
          </div>
          <Form style={{width:'70%', margin:'auto'}}>
            <Form.Group style={{display:'inline-flex', width:'100%', gap:'1rem', alignItems:'center', position:'relative'}}>
              <img style={{position:'absolute', left:'10px'}} src={Search} alt="search" />
              <Form.Control type="text" className="form-control bg-light" 			 placeholder="Search jobs, skills, etc." name="username" style={{borderRadius:'2rem', color:'#B3B1B4', opacity:'.5', height:'52px', paddingLeft:'3rem'}}/>
              <NavLink to='results' type='button' style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', border:'none', justifyContent:'none', gap:'1rem', textDecoration:'none', paddingLeft:'2rem'}} onClick={()=>setResults(true)}>SEARCH</NavLink>
            </Form.Group>
          </Form>
        </div>
        {/* Popular Categories */}
        <div style={{display:'flex', gap:'1rem', height:'58vh'}}>
          <div style={{width:'30%', height:'58vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)'}}>
            <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'20%'}}>
              <div style={{color:'white', textAlign:'center', padding:'1rem', fontSize:'24px', fontWeight:'600'}}>
                <p style={{fontSize:'22px', marginTop:'1rem'}}>Popular categories</p>
              </div>
            </div>
            <div style={{height:'44vh', backgroundColor:'white', borderRadius:'1rem', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)', overflowY:'scroll'}}>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingTop:'1rem'}}>
                  {PopularData.map((i) => (
                      <div style={{padding:'10px 4px'}} key={i.id}>
                        <label style={{backgroundColor:'white', color:'#B3B1B4', border:'1px solid #B3B1B4', padding:'10px', height:'1rem', fontSize:'14px', borderRadius:'1rem', textAlign:'center', lineHeight:'2px'}}>{i.titulo}</label>
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
          {/* Search by */}
          <div style={{width:'80%', height:'52vh', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)'}}>
            <div style={{backgroundColor:'#107ACC', borderRadius:'1rem 1rem 0 0', height:'22%'}}>
              <div style={{color:'white', textAlign:'center', padding:'1rem', fontSize:'24px', fontWeight:'600'}}>
                <p style={{fontSize:'22px', marginTop:'1rem'}}>Search by Location</p>
              </div>
            </div>
            <div style={{height:'46vh', backgroundColor:'white', borderRadius:'1rem', display:'flex', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)', overflowY:'scroll'}}>
              {/* 1st column */}
              <div style={{display:'flex', paddingTop:'1rem', flexDirection:'column', width:'50%', borderRight:'1px solid black', margin:'12px 0', height:'fit-content'}}>
                {SearchData.map((i) => (
                  <div style={{width:'100%', fontSize:'14px'}} key={i.id}>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'0 1rem' }}>
                      <a style={{textDecoration:'none'}} href="#"><img src={Location} alt="location" /> {i.city}</a>
                      <p>{i.results} Results</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* 2nd column */}
              <div style={{display:'flex', paddingTop:'24px', flexDirection:'column', width:'50%'}}>  
                {SearchData.map((i) => (
                  <div style={{width:'100%', fontSize:'14px'}} key={i.id}>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'0 1rem', alignItems:'flex-start'}}>
                      <a style={{textDecoration:'none'}} href="#"><img src={Location} alt="location" /> {i.city}</a>
                      <p>{i.results} Results</p>
                    </div>
                  </div>
                ))}
              </div>  
            </div>
          </div>
        </div>
        {/* Results */}
        <div style={{marginTop:'2rem'}}>
          <div style={{display:'flex', justifyContent:'center', backgroundColor:'white', boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.06)', padding:'1rem', borderRadius:'2rem'}}>
            <p style={{marginTop:'0.8rem', padding:'0 1rem', color:'#001A24'}}>Are you a company? Make an advertisement and find professionals ner you!</p>
            <button style={{padding:'1rem', backgroundColor:'#142157', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', border:'none', justifyContent:'none', gap:'1rem'}} onClick={()=>setModalShow(true)}>CREATE</button>
          </div>
        </div>
      </div>
      }
    <ModalAdvertisement show={modalShow} onHide={() => setModalShow(false)}/>  
    </div>
  )
}

export default Advertisements