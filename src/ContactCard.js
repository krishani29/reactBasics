import React from'react';
 
function ContactCard(props){
   return(
       <div className="contact-card">
           <img src={props.contact.imgUrl} height="250" width="325"/>
               <h3>{props.contact.name}</h3>
               <p>Phone: {props.contact.phone}</p>
               <p>Email: {props.contact.email}</p>
           
       </div>

   );
}
//propes is parameter given to  module to access user input________strong convention to call it as (propes)
export default ContactCard;