import React, { useState } from 'react';

export const AddTodo = (props) => {

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Both the fields are mandatory.")
        }else{
            props.addTodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Task :</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{return settitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{return setdesc(e.target.value)}} className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-primary btn-small">Add Task</button>
                <hr/>
            </form>
        </div>
    )
}
