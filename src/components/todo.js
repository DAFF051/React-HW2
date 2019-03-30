import React ,{component} from 'react'


function Apptodo(props){
    
   return(
   
       <dev>
           <h1> {props.description}</h1> 
           <h1>{props.deadline}</h1>
           <input type='checkbox' checked={props.done}/>



       </dev>
   )

}

export default Apptodo