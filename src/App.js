import React, {Component} from 'react';
import DisplayList from './displayList';
import AddItem from './AddItem';


class App extends Component{

  state = {
    list:[{todo: "wash my clothes", id: 1}, {todo: " cook my dinner", id: 2}, {todo: "read my books", id: 3}],
    count: 0
  }

  deleteItem = (id) =>{
    let list = this.state.list.filter(item => {
      return item.id !== id
    })
    this.setState({
      list: list
    })
  }

  editItem =(id)=>{
    let newTodo = prompt("Edit your Todo", '')
    let list = this.state.list
    for(let item of list){
      if(item.id === id){
        item.todo = newTodo
      }
    }

    this.setState({
      list: list
    })
  }
 
  addItem = (item) =>{
    item.id = Math.random();
    let list = [...this.state.list, item];
    this.setState({
      list: list
    })
  }
  render(){
    return(
      <div className='myApp'>
        <h1>TODO LIST</h1>
        <DisplayList list = {this.state.list} count= {this.state.count} deleteItem ={this.deleteItem} editItem = {this.editItem}/>
        <AddItem addItem ={this.addItem}  />
      </div>
    )
  }
}


export default App;