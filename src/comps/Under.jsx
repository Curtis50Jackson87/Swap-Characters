import React from 'react';
let data = require('./jsonData/data.json');

class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: data[0].name, from: data[0].from, year: data[0].year, pic: data[0].pic }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    this.setState({ name: data[6].name, from: data[6].from, year: data[6].year, pic: data[6].pic });
    setTimeout( () => { this.setState({ name: data[0].name, from: data[0].from, year: data[0].year, pic: data[0].pic }) } , 2000 );
  }

  render(){
    const cont1 = { border: "5px solid white", backgroundColor: "rgb(112, 246, 255)", marginBottom: "10px", padding: "10px 0px", color: "black" }
    const imgSt = { border: "4px solid white" }
    return(
      <div style={cont1}>
        <img style={imgSt} src={this.state.pic} alt="Missing Pic."/>
        <div><strong>Name: </strong>{this.state.name}</div>
        <div><strong>From: </strong>{this.state.from}</div>
        <div><strong>Year: </strong>{this.state.year}</div>
        <br/>
        <button onClick={this.onButtonClick} >Click for new Character</button>
      </div>
    )
  }

}

export default Character;
