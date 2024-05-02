"use client"
import {FormEvent, useState} from "react";

export function Form({createTask}:any){
    const [task, setTask] = useState<string>('');
    const handleSubmit = () => {
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit} className='mt-5' action={createTask}>
            <input onChange={e => setTask(e.target.value)} value={task} name="task" placeholder="...What your todo" className=" p-2 rounded w-72 border-2 border-black" type="text"/>
            <button className=" mx-2 border-2 border-black  rounded-md p-2 hover:bg-yellow-400">+</button>
        </form>
    )
}