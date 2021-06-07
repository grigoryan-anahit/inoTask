import s from './login.module.css'
import axios from 'axios';
import React from 'react';
import ScreenTwo from '../screenTwo';
import { Button,Form } from 'react-bootstrap';
import img from '../images/img.png';
class  Login extends React.Component{
    state={
        responseObj:{},
        openScreenTwo:false,
        hide:true
       
        
    }
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    handleClick=(e)=>{
        e.preventDefault();
       if(this.emailRef.current.value==='root@inorain.com' && this.passwordRef.current.value==='00002222' ){
        axios.get(' http://185.223.125.144:4000/admin/login')
        .then(response=>{
            const data=response.data;
            
           let lc= localStorage.setItem('resp',JSON.stringify( data));
            this.setState(prevState=> ({
                ...prevState,
                responseObj:lc,
                openScreenTwo:true,
                hide:true
            }))
            
        })
        this.emailRef.current.value='';
        this.passwordRef.current.value=''
        
    }
       else {
           const error=document.querySelector('.errorText');
           error.textContent='wrong username or wrong password';
           error.setAttribute('style','color:red')
          }
   
     
    }
    
    render(){
        
   //console.log(this.state.responseObj.status)
   
        
        return(
            <div className={this.state.hide? s.loginPage:`${s.loginPage} ${s.hidden}` }>
                {this.state.openScreenTwo && this.state.hide && <ScreenTwo  obj={JSON.parse(localStorage.getItem('resp'))}  /> }
                {/* <input type='email' name='email' placeholder='username' ref={this.emailRef}  />
                <input type='password' name='password' placeholder='password'  ref={this.passwordRef} />
                <button onClick={this.handleClick}>Login</button>
                {this.state.openScreenTwo && <ScreenTwo  obj={JSON.parse(localStorage.getItem('resp'))} />} */}
              
               <Form className={s.form}>
                    <img src={img}  alt="img" className={`${s.img} img-fluid `}/>
                    <Form.Group controlId="formBasicEmail"  >
                        <Form.Control type="email" placeholder="username" ref={this.emailRef} className={s.fGroup}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <Form.Control type="password" placeholder="Password" ref={this.passwordRef} className={s.fGroup} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className={s.fbtn}  onClick={this.handleClick}>
                        Login
                    </Button>
                    <p className='errorText'></p>
                </Form>

            </div>
        )
    }

   
    
}
export default Login;