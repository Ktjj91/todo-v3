"use client"
import {TaskInterface} from "@/interfaces/Task.interface";
import {Task} from "@/components/Task";

export default function TaskList({rows,deleteTask,updateTask}:any){

    return (
        <section className="mt-5 flex flex-col gap-4 justify-center items-center">
            {rows.map((task:TaskInterface) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
            ))}
        </section>
    )
}