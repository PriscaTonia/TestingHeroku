import React,{Component} from 'react';

class AddItem extends Component{

    state ={
        todo: ''
    }

    handleChange = (e)=>{
        this.setState({
         [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let newTodo = this.state.todo;
        newTodo = newTodo.trim();
        if (!newTodo.length) return;
        this.props.addItem(this.state);
        this.setState({
            todo: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <div className='input-field'>
                    <input id='todo' onChange ={this.handleChange} value = {this.state.todo}/> 
                    <button>Add</button>
                </div>
            </form>
        )
    }
}

export default AddItem;