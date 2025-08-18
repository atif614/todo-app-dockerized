import React, { useEffect, useRef, useState } from "react";
import todo_icon from '../assets/todo_icon.png';
import TodoItems from "./TodoItems.jsx";

const Todo = () => {

    const [todo, setTodo] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): []);

    const inputRef = useRef();

    const addTodo = (e) => {
        e.preventDefault();
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            inputText,
            isCompleted: false
        }
        setTodo((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
        console.log(inputText);
    }

    const deleteTodo = (id) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodo((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo;
            })
        })
    }
    useEffect(() => {
        console.log(todo);
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo])
    console.log(todo)
    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

            <div className="flex items-center mt-7 gap-2">
                <img className="w-8" src={todo_icon} alt="" />
                <h1 className="text-3xl font-semibold">Todo List</h1>
            </div>

            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add Your Task" />
                <button onClick={addTodo} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
            </div>

            <div>
                {
                    Array.isArray(todo) && todo?.map((todo, index) => {
                        return <TodoItems key={index} text={todo.inputText} id={todo.id} isCompleted={todo.isCompleted} deleteTodo={deleteTodo} toggle={toggle} />
                    })
                }
            </div>

        </div>


    )
}

export default Todo;