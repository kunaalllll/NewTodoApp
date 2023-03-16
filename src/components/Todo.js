import React, { useState, useEffect } from "react";
import "./style.css";

// getting local storage data

const getLocalData = () => {
  const lists = localStorage.getItem("mytodoList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setinputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setisEditItem] = useState("");
  const [toggleButton, settoggleButton] = useState(false);
  //add items function
  const addItems = () => {
    if (!inputData) {
      alert("Please fill the data!");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );

      setinputData("");
      setisEditItem(null);
      settoggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setinputData("");
    }
  };
  // edit items function

  const editItem = (index) => {
    const editedItem = items.find((curElem) => {
      return curElem.id === index;
    });

    setinputData(editedItem.name);
    setisEditItem(index);
    settoggleButton(true);
  };
  // delete items function

  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return index !== curElem.id;
    });
    setItems(updatedItem);
  };

  // remove all items function

  const removeAll = () => {
    setItems([]);
  };

  // adding local storage

  useEffect(() => {
    localStorage.setItem("mytodoList", JSON.stringify(items));
  }, [items]);

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
              value={inputData}
              onChange={(event) => setinputData(event.target.value)}
            />

            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>

          {/* show our items */}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove all items */}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
