import React, {useEffect, useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import Vector from '../../../assets/Edit/Vector.svg'
import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { addCV} from '../../../features/CVFeature'

function ModalCurriculum(props) {

  const cvList = useSelector((state) =>state.cvs.value)
  const dispatch = useDispatch();

  const [files, setFiles] = useState({});
  
  // console.log(files)

  useEffect(()=>{
    setFiles(files.name)
  },[])

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) =>
        acceptedFiles.reduce(
          (acc, file) => ({
            ...acc,
            [file.name]: {
              file
            }
          }),
          prevFiles
        )
      );
    },
    accept: {
      'application/pdf': []
    },
    maxFiles:1
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ));
  

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
    {file.path} 
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  

  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{margin: 'auto', borderBottom:'none'}}>
        <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter">
          Add CV
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section style={{border:'2px dashed #B3B1B4', borderRadius: '18px', width:'750px', height:'350px', margin:'auto'}} className="container">
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'1rem'}} {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()}/>
        <img src={Vector} alt="vector" />
        <p style={{marginTop:'1rem'}}>Drag 'n' drop it here</p>
        <p> or <a style={{color:'blue', cursor:'pointer'}}>Browse Files</a></p>
        <em>(Only .pdf doc will be accepted)</em>
      </div>
      <aside style={{marginTop:'2rem', paddingLeft:'1rem'}}>
        <h6>Accepted files</h6>
        <ul>{acceptedFileItems}</ul>
        <h6>Rejected files</h6>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
        {/* <div style={{border:'2px dashed #B3B1B4', borderRadius: '18px', width:'750px', height:'217px', margin:'auto'}}>
          <div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <img src={Vector} alt="vector" />
              <p style={{color:'#B3B1B4', fontWeight:'600', fontSize:'24px', paddingTop:'1rem'}}>Drop it here</p>
              <div style={{display:'flex'}}>
                <p style={{color:'#B3B1B4'}}>or</p><a style={{textDecoration:'none', paddingLeft:'10px'} } href='#' type='file'>Browse Files</a>
              </div>
            </div>
          </div>
        </div> */}
        <div style={{marginLeft:'1.5rem'}}>
          <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', border:'none', margin:'2rem 0'}} type="submit"
          onClick={() => { 
            dispatch(addCV({id: cvList[cvList.length - 1].id + 1,
            files})), dispatch(props.onHide)
          }}>ADD</Button>
          <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={props.onHide}>CANCEL</Button>
          </div>
      </Modal.Body>
    </Modal>
      
    </div>
  )
}



export default ModalCurriculum
