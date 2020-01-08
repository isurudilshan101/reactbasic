 import React from 'react';

//  function Greet()
//  {
//      return <h1>Hello isuru</h1>
//  }

const Greet =props =>{
     return  (
 <div>
<h1> hello  {props.name} my hero{props.hero}</h1>

{props.children}
           
</div>);
}
      

       
        //<h2>my name</h2>
        


    

 export default Greet