"use client"
export function FormEdit({updateTask,task,toggleIsInput}:any){

    return (
        <form onSubmit={toggleIsInput} action={updateTask} >
            <input className="border" name="task" type="text"/>
            <input name="id" value={task.id} type="hidden"/>
        </form>
    )
}