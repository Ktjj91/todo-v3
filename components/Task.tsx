"use client"
import {FormEdit} from "@/components/FormEdit";
import {useState} from "react";
import {ButtonEdit} from "@/components/ButtonEdit";

export function Task({task,updateTask,deleteTask}:any){
    const [isInput, setIsInput] = useState<boolean>(false);
    const toggleIsInput = () => {
        setIsInput(!isInput);
    }
    return (
        <article  className="gap-x-2 flex justify-between border-black border-2 p-2 rounded w-75" key={task.id}>
            {
                isInput ? <FormEdit toggleIsInput={toggleIsInput} updateTask={updateTask} task={task}/> :
                    <form  action={deleteTask}>
                        <p className="hover:cursor-pointer">{task.task}</p>
                        <button className="hover:scale-125 transition ease-out 0.3">x</button>
                        <input name="id" value={task.id} type="hidden"/>
                    </form>
            }
            <ButtonEdit toggleIsInput={toggleIsInput} />

</article>
    )
}