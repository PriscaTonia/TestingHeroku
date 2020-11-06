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

  editItem =(id,index)=>{
    let newTodo = prompt("Edit your Todo", '')
    newTodo = newTodo.trim();
    if(!newTodo.length)return;

    let list = this.state.list
    list[index].todo =  newTodo
    // for(let item of list){
    //   if(item.id === id){
    //     item.todo = newTodo
    //     break;
    //   }
    // }

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
        <header>
          <h1>My checklist</h1>
        </header>
        <AddItem addItem ={this.addItem}  />
        <DisplayList list = {this.state.list} count= {this.state.count} deleteItem ={this.deleteItem} editItem = {this.editItem}/>
        <div className='quote'>
          <q>The humblest tasks get beautified if loving hands do them...</q>
        </div>
      </div>
    )
  }
}


export default App;