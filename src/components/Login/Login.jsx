import React,{useState}  from 'react'
import styles from '../Login/Login.module.css'
import Lock from '../../assets/Login/Lock.svg'
import Mail from '../../assets/Login/Mail.svg'
import Logo from '../../assets/Login/Logo.svg'
import Ellipse from '../../assets/Login/Ellipse.svg'
import Vector from '../../assets/Login/Vector.svg'
import Eye from '../../assets/Login/Eye.svg'
import EyeClose from '../../assets/Login/EyeClose.svg'
import {Form} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'


function Login() {
	const [passwordType, setPasswordType] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");
	const [goToHome, setGoToHome] = useState(false);
	const [goToRegister, setGoToRegister] = useState(false);

	const [goToRestorePassw, setGoToRestorePassw] = useState(false);

	if(goToHome){
    return <Navigate to='/home/advertisements'/>
	}
	if(goToRegister){
		return <Navigate to='/register'/>
	}
	if(goToRestorePassw){
		return <Navigate to='/restorepassword'/>
	}

	const handlePasswordChange =(evnt)=>{
			setPasswordInput(evnt.target.value);
	}
	const togglePassword =()=>{
		if(passwordType==="password")
		{
		 setPasswordType("text")
		 return;
		}
		setPasswordType("password")
	}
	return (
		<div>
			<div className={`${styles.login}`}>
				<div className="container py-3">
					<div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', position:'relative', top:'1rem', left:'2.5rem'}}>
						<div>
							<img style={{width:'70%'}} src={Ellipse} alt="menu" />
						</div>
						<div style={{position:'absolute', right:'25px'}}>
							<img style={{width:'75%'}} src={Vector} alt="vector" />
						</div>
					</div>
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col col-xl-10 pt-3">
							<div className="card" style={{border:'none', borderRadius: '1rem', height: '460px', width:'700px', margin:'auto', background: 'linear-gradient(to right, #ffff 0%, #ffff 65%, #107ACC 65%, #1870ca 100%)'}}>
								<div className="row g-0">
									<div className="col-md-7 col-lg-7 d-flex align-items-center">
										<div className="card-body">
											<Form className='pt-4'>
												<h2 style={{color: "#107ACC", fontWeight:"600", fontSize:'37px'}}>Login</h2>
												<p style={{fontWeight: '300', fontSize: '1.5rem'}}>Welcome back!</p>
												<Form.Group className="form-outline mt-4" controlId='formEmail'>                                            
													<Form.Label className="form-label">
														<span style={{display:'flex', fontWeight:'500'}}>
															<img style={{paddingRight:'10px'}} src={Mail} alt="email" />
															Email
														</span>
													</Form.Label> 
													<Form.Control type="email" className="form-control bg-light" 			 placeholder="Your email address" name="username" style={{borderRadius:'2rem', color:'#B3B1B4', opacity:'.5'}}/>
												</Form.Group>
												<Form.Group className="form-outline mt-4" controlId='formPassword' 
													style={{position:'relative'}}>
													<Form.Label  className="form-label">
														<span style={{display:'flex', fontWeight:'500'}}>
															<img style={{paddingRight:'10px'}} src={Lock} alt="lock" />
															Password
														</span>
													</Form.Label> 
													<Form.Control onChange={handlePasswordChange} type={passwordType} value={passwordInput} className="form-control bg-light" placeholder="Enter your password" name="password" style={{opacity:'.5', borderRadius:'2rem', color:'black'}}/>
													<button type='button' onClick={togglePassword} style={{position:'absolute', right:'1rem', bottom:'9px', border:'none', background:'none'}}>
														{passwordType === 'password' ? <img src={EyeClose} alt="eye close"/> : <img src={Eye} alt="eye"/>}
													</button>
												</Form.Group>
												<div className="d-flex align-items-baseline" style={{gap:'1rem', width:'110%', marginTop:'10px'}}>
												<button type='button' style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', marginTop:'2rem', border:'none', justifyContent:'none', gap:'1rem'}} onClick={() => setGoToHome(true)} >LOGIN</button>
													<span>Forgot your password? 
														<a
															onClick={ () => { setGoToRestorePassw(true) } }
															style={{fontWeight:'500', cursor:'pointer'}} className="text-decoration-none ms-1"
															>
																Click here
														</a>
													</span>
												</div>
											</Form>
										</div>
									</div>
									<div className="col-md-5 col-lg-5 d-flex align-items-start">
										<div className="card-body pt-5" style={{marginLeft:'5rem'}}>
											<h2 className="text-white fw-bold" style={{fontSize:'37px'}}>Geen lid!</h2>
											<p style={{color:"#f6f6f6", paddingTop:'1rem', fontSize:'1.3rem', fontWeight:'300'}}>Maak een gratis account ann krijg toegang tot alle  functies!</p>
											<button type='button' className="btn" style={{padding:'1rem', border: "2px white solid", marginTop: "56%", width: "140px", height:'52px', lineHeight:'0px', fontSize:'14px', borderRadius:'4rem', backgroundColor:"#107ACC", color:'white'}} onClick={()=>setGoToRegister(true)}>
											REGISTER</button>
										</div>                        
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<div className={`${styles.footer}`} style={{background:'#1870ca'}}>
				<div className="col-12 d-flex justify-content-center py-4">
					<img style={{width:'20%'}} src={Logo} alt="logo" />
				</div>
				<div className="col-12 d-flex justify-content-center py-3 mb-1">
					<div style={{borderRight: '1px white solid'}}>
						<span style={{color: '#f6f6f6', paddingRight: '11px',
					paddingLeft: '25px', fontSize:'14px'}} 
					> Privacy Policy</span>
					</div>
					<div style={{borderRight: '1px white solid'}}>
						<span style={{color: '#f6f6f6', paddingRight: '11px',
						paddingLeft: '15px', fontSize: '14px'}}> Terms of Use</span>
					</div>
					<span className="" style={{color: '#f6f6f6', paddingRight: '11px',
					paddingLeft: '25px', fontSize: '14px'}}>Cookies Policy</span>
				</div>
				<div className="row" style={{background:'#00007c', width:'101%'}}>
					<div className=" text-center text-white " style={{width:'50%', margin:'auto'}}>
						<p className="my-2" style={{backgroundColor: '#00007c', fontSize:'15px'}}>Copyright © 	2022 WorkConnect 2022. Alle reachten voorbeh ouden</p>
					</div>
				</div>
      </div>
		</div>
	)
}

export default Login
