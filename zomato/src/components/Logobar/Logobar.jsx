import React, {useState} from 'react'
import Modal from 'react-modal';
import CSS from './logobar.css';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Logobar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  return (
    <div>
        
        <div className="header">
            <div className='logo-background'>
        <span className="logo">R</span>
        </div>
        <button className="login" onClick={()=>setIsLoginModalOpen(true)}>Login</button >
        <button className="create" onClick={()=>setIsCreateModalOpen(true)}>Create an account</button>
    </div>
    <Modal isOpen={isCreateModalOpen} className="modalCreate">
      <div className='createForm'>
        <h3 id='create-heading'> Creat an account
          <button onClick={()=>setIsCreateModalOpen(false)} className="btn float-end"><b>x</b></button>
        </h3>
        <form className='form'>
          <fieldset>
            <label>Name: </label>
            <label>
          <input type={"text"} required  placeholder={"Enter your name"}/>
          </label>
          <br />
          <label>Email: </label>
          <label>
          <input type={'email'} required  placeholder="Enter Your Email"/>
          </label>
          <br />
          <label>Phone:</label>
          <label>
          <input type={Number} required  placeholder="Phone Number" />
          </label>
          <br/>
          <label>Password:</label>
          <label>
          <input type={"password"} required  placeholder="Create Password"/>
          </label>
          <br/>
          <button id='create-btn' value={"submit"} type='sumbit' >Create</button>
          </fieldset>
        </form>
      </div>
    </Modal>
    <Modal className="modalLogin" isOpen={isLoginModalOpen} style={customStyles}>
      <div>
        <h3 id='login-heading'>Login
      <button onClick={()=>setIsLoginModalOpen(false)}  className="btn float-end"><b>x</b></button>
      </h3>
      <form id='loginForm'>
        <fieldset>
          <label >Email: </label>
          <label>
          <input className='loginInput' type="email" placeholder='Enter your Email' />
          </label>
          <label>Password: </label>
          <label>
          <input className='loginInput' type="password" placeholder='Enter your password'/>
          </label>
          <button id='login-btn'>Login</button>
        </fieldset>
      </form>
      {/* <div>
        <FacebookLogin
        appId="1124482858371534"
        autoLoad={true}
        fields="name,email,picture"
        textButton='Continue with facebook'
        cssClass='btn btn-primary'
        />
      </div>
      <div>
      <GoogleLogin
    clientId="977464933844-86ub2807vaipnhklrtm8e0vn9ko8s78h.apps.googleusercontent.com"
    buttonText="Login"
    // onSuccess={responseGoogle}
    // onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} cssClass="btn btn-primary"
  />
      </div> */}
      </div>
    </Modal>
    
    </div>
  )
}
