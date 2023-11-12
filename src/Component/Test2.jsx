import React from 'react'

class Welc extends React.Component {
    stat ={
        name:"Bilel"
    }
    handleClick =() =>this.setSate({name : "Arya"})
    render()
    {
  return (
    <>
    <h1>Hello {this.state.name}</h1>
    <button onClick={this.handleClick}> Click Me</button>
    </>
  )
}
}

export default Welc