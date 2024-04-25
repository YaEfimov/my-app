import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';



function App() {
  return (
    <div>
      <AppTitle/>
      <Rating/>
      <Accordion/>
    </div>
  );
}

function AppTitle(){
  return <>This is APP component</>
}

function Rating() {
  
  return(
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Star(){
  return(
    <div>star</div>
  )
}





export default App;
