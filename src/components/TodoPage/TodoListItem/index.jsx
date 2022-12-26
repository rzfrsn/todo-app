import React from "react";
import './TodoListItem.scss';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="todo-list-item">
      <div className="prepend-icon" onClick={() => this.props.onCheck(this.props.taskId) }>
        <i className={this.props.prependIcon ? this.props.prependIcon : 'fa-regular fa-circle'}></i>
      </div>
      <div style={{color: this.props.textColor}}>{this.props.name}</div>
    </div>
  }
}

export default TodoListItem;