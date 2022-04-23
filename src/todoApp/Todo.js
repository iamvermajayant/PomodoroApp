import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
import "./Todo.css";
import {
  CheckCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";

const Todo = (props) => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");

    if (saveTodos) {
      return JSON.parse(saveTodos);
    } else {
      return [];
    }
  });
  const [isEdit, setIsEdit] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const editTodo = todos.find((item) => item.id === isEdit);
      const updatedTodo = todos.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, todo })
          : {id: item.id, todo: item.todo}
      );
      setTodos(updatedTodo);
      setIsEdit(0);
      setTodo("")
      return;
    }

    if (todo !== "") {
      setTodos([
        { id: `${todo}-${Date.now()}`, todo, isComplete: false },
        ...todos,
      ]);
      localStorage.setItem("key", todos);
      console.log(todos);
    }
    setTodo("");
  };

  const handleTick = (id) => {
    const newList = todos.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };

        return updatedItem;
      }

      return item;
    });

    setTodos(newList);
    console.log(todos.length);
  };

  const handleDelete = (id) => {
    const deleteTodos = todos.filter((item) => item.id !== id);
    setTodos([...deleteTodos]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((item) => item.id === id);
    setTodo(editTodo.todo);
    setIsEdit(id);
  };

  return (
    <div className="todo-container">
      <h2>Hello</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-wrapper"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add todo"
          type="text"
        />
        <Button type="submit">{isEdit ? "Edit" : "Add"}</Button>
      </form>
      <div>
        <ul>
          {todos.map((x) => (
            <li key={x.id} className="Todo-card-wrapper">
              <p
                style={{
                  textDecoration: x.isComplete ? "line-through" : "none",
                }}
              >
                {x.todo}
              </p>
              <div className="Todo-icons-wrapper">
                <CheckCircleTwoTone
                  onClick={() => handleTick(x.id)}
                  style={{ marginRight: "0.5rem" }}
                  twoToneColor={!x.isComplete ? "#8e8e8e" : "#008000"}
                />
                <EditTwoTone
                  style={{ marginRight: "0.5rem" }}
                  onClick={() => handleEdit(x.id)}
                />
                <DeleteTwoTone
                  twoToneColor={"red"}
                  onClick={() => handleDelete(x.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
