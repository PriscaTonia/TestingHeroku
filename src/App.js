import React from 'react';



class App extends React.Component{

  state ={
    name: "Prisca",
    age: 30
  }
  handleClick = (e) =>{
    //console.log(e.target);
    console.log(this.state.age)
    this.setState({
      name: "Florence",
      age: 18
    })
  }
  handleMouseOver =(e) =>{
    console.log(e.target, e.pageX);
  }
  render(){
    return(
      <div className='myApp'>
        <h1>Hi, Welcome!</h1>
        <p> My name is: {this.state.name} and I am {this.state.age}</p>
        <button onClick = {this.handleClick}>Click me</button>
        <button onMouseOver={this.handleMouseOver}>Hover me</button>
      </div>
    )
  }
}


export default App;