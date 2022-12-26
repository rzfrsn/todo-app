import React from "react";
import NavBar from "../components/NavBar";
import SideNavLeft from '../components/TodoPage/SideNavLeft';
import SideNavRight from "../components/TodoPage/SideNavRight";
import TabBar from "../components/TodoPage/TabBar";
import TodoListItem from "../components/TodoPage/TodoListItem";
import fakeTasks from "../data/fakeTasks";

import './TodoPage.scss';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
    this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount() {
    this.setState({ tasks: [...fakeTasks]});
  }

  onCheck(taskId) {
    console.log('task id : ', taskId);
  }

  render() {
    return <>
      <NavBar></NavBar>
      <SideNavRight></SideNavRight>
      <div className="playground">
        <TabBar></TabBar>
        <SideNavLeft></SideNavLeft>
        <div className="playground-main">
          <div className="todo-list">
            {this.state.tasks.map(task => <TodoListItem key={task.id} taskId={task.id}  name={task.name} onCheck={this.onCheck}/>)}
            
            <TodoListItem prependIcon="fa-regular fa-plus" textColor="#229DF5"  name="Ajouter une tâche"/>
          </div>
        </div>
      </div>
    </>
  }
}

export default TodoPage;