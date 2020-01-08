import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './component/Greet';
//import Welcome from './component/Welcome'; 
import Hello from './component/Hello';


class App extends Component 
{
  render()
    {
      return(
        <div className="App">
          {/*<Greet/>*/}
          { /*<Welcome/>*/}
          <Hello/>
        </div>
      );
    }
}

export default App;
