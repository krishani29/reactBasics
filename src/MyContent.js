import React from 'react';

// function MyContent(){ below is use of ES6
    const MyContent = () => {
        const name=prompt("enter your name:","name");
        const sname=prompt("enter your lastname:"," ");
        const date=new Date()
        const hours=date.getHours()%12
        const am=date.getTime().toString().includes("AM")
        // alert(am);
        const style={
            color:"Red",
            backgroundColor:"skyblue",
             fontSize:"50px"};
        let timeOfDay
            if(am == true){
                timeOfDay = "morning";
                style.color="violet";
                style.backgroundColor="peach";
            }else if(hours>=12){
                timeOfDay="afternoon";
                style.color="Orange"
            }else{
                timeOfDay="night"
                style.backgroundColor="black"
                style.color="white"
            }   
            
    return(
        <main>this is Main Content
         <h1>hello {`${name} ${sname} it's ${hours}`} o'clock</h1>
         <h2 style={style}>GOOD {timeOfDay.toUpperCase()}</h2>
         </main>
    )
}
export default MyContent;