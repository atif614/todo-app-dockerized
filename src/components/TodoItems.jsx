import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_tick from "../assets/delete.png";
import React from "react";

const TodoItems = ({text})=>{
    return(
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer">
                <img className="w-7" src={tick} alt="" /> 
                 <p className="tex-slate-700 ml-4 text-[17px]">{text}</p>
            </div>
            <img className="w-4" src={delete_tick} alt="delete icon" />
        </div>
    )
}

export default TodoItems;