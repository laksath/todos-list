import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length===0? 
            <div className="card">
                <h5 className="card-body text-center">
                    No Todos to display
                </h5>
            </div> 
            : 
            props.todos.map((todo)=>{
                return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>) 
            })
            }
        </div>
    )
}
