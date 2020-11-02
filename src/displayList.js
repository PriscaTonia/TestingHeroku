import React from 'react';

const DisplayList = ({list, count, deleteItem, editItem}) => {
    
    const List = list.map(item =>{
        return (
            <div key = {item.id}>
                <ul>
                    <li>Item {count += 1}: {item.todo}  <button onClick = {() => {deleteItem(item.id)}}> Del.</button> <button onClick={()=>{editItem(item.id)}}>Edit</button></li>
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