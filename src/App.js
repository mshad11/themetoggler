import React from 'react';
import './App.css';
import { Themecontext } from './Themeprovider';
import { Context } from './Themeprovider';
function App() {
  //const context = React.useContext(Themecontext)
  const {toggle, toggleFunction} = Context()
  console.log(toggle)
  
  return (
    
    // <div> my name is {context} </div>
   <div className='theme-changer' style={{backgroundColor: toggle ? 'black' : 'white' }}>
   <h1>Context API</h1>
   <button onClick={toggleFunction}>ThemeChanger</button>


   </div>

  );
}

export default App;
