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
            },
            errors: {
                task:'',
                description:''
            }
        };
        this.setNewTask=this.setNewTask.bind(this);
        this.inputValidate=this.inputValidate.bind(this);
        this.addNewTask=this.addNewTask.bind(this);
        this.delTask=this.delTask.bind(this);
    };

    setNewTask = ({target}) => {
        

        const {name,value} = target;
        const task = {...this.state.newTask}
        task[name]= value;
        task.id = uuidv4();
        this.setState({newTask: task});
        this.inputValidate(target);

        
    }

    inputValidate = (target) => {
        const {name,value} = target;
        const {errors} = this.state;
        if(value) errors[name] ='';
        else errors[name] =`Please input your ${name}!`;
        this.setState({errors});
    }

    // formValidate = () => {
    //     const {newTask,errors} = this.state;
    //     if (!newTask.task) {

    //         errors.task ='Please enter your task';
    //         console.log ( errors.task);


    //     } else errors.task='';
    //     if (!newTask.description) {
    //         errors.description = 'Please enter your description';
    //         console.log ( errors.description);

    //     } else errors.description ='';
    //     this.setState({errors})
    // }

    addNewTask =(e) =>{
        e.preventDefault();
        const {newTask} = this.state;
        this.inputValidate({name: 'task',value: newTask.task});
        this.inputValidate({name: 'description',value: newTask.description});

        const {errors}= this.state;

        if(!errors.task && !errors.description) {
            this.setState({
                todoList: [...this.state.todoList,newTask],
                errors: {
                    task:'',
                    description:''
                },
                newTask: {
                    task:'',
                    description:''
                }
            })
        }
    }

    delTask=(taskId) =>{
        this.setState({
            todoList: this.state.todoList.filter( todo => todo.id!==taskId)
        })
    }

    render () {
        return (
            <div>
                <AddTodoFunc newTask={this.state.newTask} onSubmit={this.addNewTask} onChange={this.setNewTask} errors={this.state.errors}/>               
                
                <TodoListFunc todoList={this.state.todoList} onClick={(id) => this.delTask(id)}/>
            </div>
        )
    }
}