import React from 'react';

function AddTodoFunc(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <input type="text" onChange={props.onChange} name='task' />
            <input type="text" onChange={props.onChange} name='description' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddTodoFunc