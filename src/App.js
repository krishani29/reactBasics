import React from "react";
import logo from "./logo.svg";
import "./style.css";
 import MyHeader from './MyHeader';
import MyContent from './MyContent';
import MyFooter from './MyFooter';
import ToDo from "./ToDo";
import ContactCard from "./ContactCard";
import ProductApp from './ProductApp';
import JokeApp from './JokeApp';


function App() {
  return (
    <>
     <MyHeader/>
     <MyContent/>
     <ProductApp />
     <JokeApp />
    <div className="Contacts">
      <ContactCard
        contact={{
          name: "Krishani Bhavsar",
          imgUrl: "./demo/lp1.jpg",
          phone: "7896541230",
          email: "kk@gmail.com",
        }}
      />

      <ContactCard
        contact={{
          name: "John Doe",
          imgUrl: "./demo/lp3.jpeg",
          phone: "9632014587",
          email: "jh@gmail.com",
        }}
      />

      <ContactCard
        contact={{
          name: "robort wills",
          imgUrl: "./demo/lp1.jpg",
          phone: "654789330",
          email: "rb@gmail.com",
        }}
      />
      {/* above code used as JSX may be consist JSON Data file for user data*/}
    </div>
    <div className="todoList">
    <ToDo />
    <ToDo />
    <ToDo />
    </div>
    <MyFooter/>
    </>
  );
}

export default App;
