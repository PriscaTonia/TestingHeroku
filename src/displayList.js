import React from 'react';

const DisplayList = ({list, count, deleteItem, editItem}) => {
    
    const List = list.map(item =>{
        return (
            <div key = {item.id}>
                <ul>
                        <li> {item.todo} </li>  
                        <div className='item-btn'>
                            <button onClick = {() => {deleteItem(item.id)}}> Del.</button> 
                            <button onClick={()=>{editItem(item.id)}}>Edit</button>
                        </div>
                </ul>
            </div>
        )
    })
    return(
        <div>
            {List}
        </div>
    )
}

export default DisplayList;