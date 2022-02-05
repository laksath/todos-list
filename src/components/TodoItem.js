import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <h5 className='my-3'>{props.todo.title}</h5>
            <p className='my-2'>{props.todo.desc}</p>
            <button className='btn btn-sm btn-danger my-1' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            <hr/>
        </div>
    )
}
