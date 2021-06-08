import axios from 'axios';
import React, {Component} from 'react'
import ScreenTwo from './screenTwo';
import {Redirect} from "react-router-dom";

class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            screenTwo:false
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault();
        
        //console.log(this.state);
        axios.post(' http://185.223.125.144:4000/admin/login',this.state)
        .then(response=>{
            //console.log(response)
         localStorage.setItem('response', JSON.stringify(response.data));
        if(response.data.error===false){
            this.setState({ screenTwo:true});
           console.log(this.state.screenTwo);
    
         
        }else {
            const err=document.querySelector('.errorText');
            err.textContent='Wrong username or password';
        }
        })
        .catch(error=>{
            console.log(error)
        })
      this.setState({
        email:'',
        password:'',
      })
    }
    render(){
        const {email,password}=this.state;
         

        return(
            <div>
                <form onSubmit={this.submitHandler} className='form'  >
                    {this.state.screenTwo &&      <Redirect to="/second" />}
                    <div>
                        <input type='email' 
                        name='email' 
                        placeholder='username' 
                        value={email}
                        onChange={this.changeHandler}
                        className='fGroup'/> 
                    </div>
                    <div>
                        <input type='text' 
                        name='password' 
                        placeholder='password' 
                        value={password} 
                        onChange={this.changeHandler} 
                        className='fGroup' />
                    </div>
                    <button type='submit' className='fbtn'>Login</button>
                    <p className='errorText'></p>
                </form>
                
           
           
         
            </div>
           
           
        )
        
    }
    
}
export default PostForm;