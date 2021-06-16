import React from 'react';
import { render } from '@testing-library/react';
 
function Jokes(props){
    return(
      <div class="content">
          <h3 style={{display: props.question ? "block" :"none"}}>Question: {props.question}</h3>
          <h3 style={{color: !props.question && "red" }}>Answer:{props.answer} </h3>
          <hr/>
      </div>

    )
}





export default Jokes;