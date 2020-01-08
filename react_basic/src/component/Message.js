import React,{Component} from 'react';

class Message extends Component{

        constructor(){

            super()

            this.state={
                message: 'Welcome visitor'
            }
        }

        render()
            {
                return(
                    <div>
                        <h1>{this.state.massage}</h1>
                        <button>Subcribe</button>
                    </div>
                )
            }

}

export default Message