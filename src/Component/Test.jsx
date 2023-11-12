import React from 'react'

class Welcome extends React.Component {
    state ={
        name:"Sarra"
    }
    render(){
        return (
            <h1>Hello{this.state.name}</h1>

        )
          
    }

}
export default Welcome;