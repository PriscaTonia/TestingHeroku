import React from 'react';

const DisplayList = ({ list, count, deleteItem, editItem }) => {

    const List = list.map((item,index) => {
        return (
            <li key={item.id}>
                <p>{item.todo}</p>
                <div className='item-btn'>
                    <button onClick={() => { editItem(item.id,index) }}>Edit</button>
                    <button id="delete" onClick={() => { deleteItem(item.id) }}> Del.</button>
                </div>
            </li>
        )
    })
    return (
        <div className="list_div">
            <ul>
                {List}
            </ul>
        </div>
    )
}

export default DisplayList;