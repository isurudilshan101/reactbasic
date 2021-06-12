import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './component/Greet';
//import Welcome from './component/Welcome'; 
//import Hello from './component/Hello';
//import Message from './component/Message';
import Counter from './component/Counter';


class App extends Component 
{
  render()
    {
      return(
        <div > 
         {/* <Message/>*/}
         <Counter/>
         
         {/* <Greet name="isuru" hero="batman">
          <p> this is chilren</p>

            </Greet>
          <Greet name="dilshan"  hero="superman">
            <button>Action</button>
            </Greet>
          <Greet name="herath"  hero="spiderman"/>

          <Welcome name ="dilshan"  hero="supxcxan"/>
          <Welcome name= "dcxhan"  hero="sucxman">
            <button>Action</button>
            </Welcome>
          <Welcome name ="dicvxlshan"  hero="sxsdman">
            <p>bcv dsgfv </p>
      </Welcome> */}
        </div>
      );
    }
}

export default App;
