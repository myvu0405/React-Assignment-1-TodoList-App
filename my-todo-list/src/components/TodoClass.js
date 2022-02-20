import React from 'react';
import AddTodoFunc from './AddTodoFunc';
import TodoListFunc from './TodoListFunc';
import {v4 as uuidv4} from 'uuid';

export default class TodoClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todoList: [],
            newTask: {
                id:'',
                task:'',
                description:''
            }
        };
        this.setNewTask=this.setNewTask.bind(this);
        this.addNewTask=this.addNewTask.bind(this);
        this.delTask=this.delTask.bind(this);
    };

    setNewTask = ({target}) => {
        const {name,value} = target;
        const task = {...this.state.newTask}
        task[name]= value;
        task.id = uuidv4();
        this.setState({newTask: task})
        
    }

    addNewTask =(e) =>{
        e.preventDefault();
        this.setState({
            todoList: [...this.state.todoList,this.state.newTask],
            
        })
        console.log(this.state.todoList)
    }

    delTask=(taskId) =>{
        this.setState({
            todoList: this.state.todoList.filter( todo => todo.id!==taskId)
        })
    }

    render () {
        return (
            <div>
                <AddTodoFunc onSubmit={this.addNewTask} onChange={this.setNewTask}/>               
                
                <TodoListFunc todoList={this.state.todoList} onClick={(id) => this.delTask(id)}/>
            </div>
        )
    }
}