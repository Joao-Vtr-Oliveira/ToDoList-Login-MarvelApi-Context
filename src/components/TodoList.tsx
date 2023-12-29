import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TodoType } from "../types/TodoType";
import InputText from "./InputText";
import Button from "./Button";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text: string) => {
    const newTodo: TodoType = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };
  
  const removeTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleAddClick = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="flex flex-col items-center">
      <InputText
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Digite a tarefa"
        onKeyDown={handleKeyPress}
        className="mb-5"
      />
      <Button
        text="Adicionar"
        onClick={handleAddClick}
        className={"mb-10 w-2/4"}
      />
      {todos.map((todo) => (
        <div key={todo.id} className="flex p-1 w-full">
          <TodoItem key={todo.id} todo={todo} />
          <Button text="Apagar" className={"w-1/4 mt-0"} onClick={() => removeTodo(todo.id)} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
