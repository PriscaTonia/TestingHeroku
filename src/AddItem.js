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
        this.props.addItem(this.state);
        this.setState({
            todo: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <label htmlFor='task'>Keeping a list of things to achieve in a day, gives you 98% Success!</label>
                <input id='todo' onChange ={this.handleChange} value = {this.state.todo}/> <button>Add</button>
            </form>
        )
    }
}

export default AddItem;