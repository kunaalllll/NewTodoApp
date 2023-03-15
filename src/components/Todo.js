import React from "react";
import "./style.css";
const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
            />
            <i className="fa fa-plus add-btn"></i>
          </div>

          {/* show our items */}
          <div className="showItems">
            <div className="eachItem">
              <h3>apple</h3>
              <div className="todo-btn"></div>
              <i className="far fa-edit add-btn"></i>
              <i className="far fa-trash-alt add-btn"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
