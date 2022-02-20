import React from 'react';
import PropTypes from 'prop-types';

function AddTodoFunc(props) {
    const {task,description} = props.newTask;
    const errors = props.errors;

    

    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" value={task} onChange={props.onChange} name='task' />
                <br />
                {errors.task!=='' && (<p>{errors.task}</p>)}
                <input type="text" value={description} onChange={props.onChange} name='description' />
                <br />
                {errors.description && (<p>{errors.description}</p>)}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

// AddTodoFunc.propTypes = {
//     task: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// }

export default AddTodoFunc