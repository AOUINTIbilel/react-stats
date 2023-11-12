import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {  
      show : true,
    fullName: "AKON",
    bio :  "de son vrai nom Alioune Badara Thiam, est un chanteur et producteur de RnB américain, né le 16 avril 1973 à Saint-Louis, dans le Missouri",
     imgSrc : "https://images.lesindesradios.fr/fit-in/1100x2000/filters:format(webp)/radios/activ/import/2014/03/akon.jpg", 
     profession : "Singer and Producer",
     count: 0
    }  
   }
  handleClick=()=>this.setState((currentState) => ({show: !currentState.show}));

 render() {
    if (this.state.show)
      return (
  
    <>
    <div style={{alignItems:"center"}}>
       <Card className='Cdr' style={{ alignContent:"center", width: '18rem' }}>
      <Card.Img style={{width : "90%"}}variant="top" src={this.state.imgSrc} />
      <Card.Body>
      <Card.Title><h1 style={{textAlign:"center"}}> {this.state.fullName}</h1></Card.Title>
        <Card.Text>
        <h5> Bio : {this.state.bio}</h5>
            <h3> Profession : {this.state.profession} </h3>
        </Card.Text>
        </Card.Body>
    </Card>
      </div>
<div>


<button onClick={this.handleClick}> Click Me </button>



</div>
    </>
  ); 
else return(
<div>
<button onClick={this.handleClick}> ClickMe </button>



</div>
)
}
}
export default App;


// 

    //