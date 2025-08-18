import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_tick from "../assets/delete.png";
import React from "react";

const TodoItems = ({text,id,isCompleted,deleteTodo,toggle})=>{
    return(
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
                <img className="w-7" src={isCompleted?tick : not_tick} alt="" /> 
                 <p className={` tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isCompleted ? "line-through decoration-2" : " "} `}>{text}</p>
            </div>
            <img onClick={()=>deleteTodo(id)} className="w-4 cursor-pointer" src={delete_tick} alt="delete icon" />
        </div>
    )
}

export default TodoItems;