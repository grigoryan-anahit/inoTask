
import React from 'react';
import s from './screenTwo.module.css';
import axios from 'axios';

class ScreenTwo extends React.Component{
    constructor(props){
        super(props)
         this.state={
         token:JSON.parse(localStorage.getItem('response')).message,
         channelList:[],
         urlImg:''
  }
}
 
       componentDidMount(){
       axios.post(' http://185.223.125.144:4000/admin/channels/get ', this.state )
       .then(response=>{
        console.log(response.data);
        localStorage.setItem('channels', JSON.stringify(response.data));
        this.setState(prevState=>({
            ...prevState,
            channelList:response.data.message.rows
        }))
    })
    .catch(error=>{
        console.log(error)
    })
 
       }
       handleClick=(e)=>{
          e.preventDefault();
         let lc=JSON.parse(localStorage.getItem('channels')).message.rows;
         for(let i=0;i<lc.length;i++){
            if(e.target['src']===lc[i].image){
                console.log(lc[i].url);
                const url=localStorage.setItem('urls',JSON.stringify(lc[i].url));
                this.setState(prevState=>({
                    ...prevState,
                   urlImg:url
                }))
            }
        }
        
       }
       render(){
       const message= this.state.channelList;
       let channelListJsx=[];
       if(message.length){
           channelListJsx=message.map(item=>{
               return (
                   <div key={item.id} className={s.channelDiv} onClick={this.handleClick} data-id='5'>
                       <img src={item.image} alt='chanelImage' />
                       <p>{item.name}</p>
                   </div>
               )
           })
           
       }
       
        return(
            <div className={s.screenTwoPage}>
             {channelListJsx }
              
            </div>
        )
       }
       
    
}
export default ScreenTwo;

