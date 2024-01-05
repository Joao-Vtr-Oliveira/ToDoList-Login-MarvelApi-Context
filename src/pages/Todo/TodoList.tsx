import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TodoType } from "../../types/TodoType";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const TodoList: React.FC = () => {
  const loginContext = useContext(LoginContext);

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text: string) => {
    const newTodo: TodoType = { id: todos.length, text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
    <div className="flex flex-col justify-center items-center w-full h-full">
      <pre>
        <span className="text-custom-purple font-bold underline text-3xl font-sans mb-3 xl:text-5xl">
          TO-DO:
        </span>
        <span className="text-white ml-5 font-serif text-lg xl:text-2xl">
          Olá {loginContext?.responseData?.user.name || "!"}
        </span>
      </pre>
      <div className="border rounded-md w-4/5 xl:w-2/5 h-auto mb-10">
        <div className="flex flex-col items-center">
          <InputText
            value={inputValue}
            onChange={handleOnChange}
            placeholder="Digite a tarefa"
            onKeyDown={handleKeyPress}
            className="mb-5 mt-12 xl:mb-14"
          />
          <Button
            text="Adicionar"
            onClick={handleAddClick}
            className={"mb-10 w-2/4"}
            disabled={!!!inputValue}
          />
          {todos.map((todo) => (
            <div key={todo.id} className="flex p-1 w-full">
              <TodoItem key={todo.id} todo={todo} />
              <Button
                text="Apagar"
                className={"w-1/4 mt-0"}
                onClick={() => removeTodo(todo.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
