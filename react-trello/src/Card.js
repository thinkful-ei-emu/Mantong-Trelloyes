import React from 'react';
import STORE from './store';
function Card(props){
  
    return(

    <div className={`Card`}>
        <h3> {props.card.title} </h3>
        <p> {props.card.content} </p>
        
    </div>
   )
}
export default Card;
/* <div class="Card">
            <button type="button">delete</button>
            <h3>Eleventh card</h3>
            <p>lorem ipsum</p>
</div> */