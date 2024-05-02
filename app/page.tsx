import {Form} from "@/components/Form";
import {revalidateTag} from "next/cache";
import TaskList from "@/components/TaskList";

const getTasks = async () => {
    try {
        const response = await fetch('https://todo-v3.vercel.app/api/get-tasks',{
            next:{tags:['tasks'],
            revalidate:0
            }
        });
        return response.json();
    } catch (e:any) {
        console.error(e);
        throw new Error(e);
    }
}
const createTask = async (formData:FormData) => {
    "use server";
    try {
        await fetch('https://todo-v3.vercel.app/api/create-task',{
            method:"POST",
            body:formData
            })
        revalidateTag('tasks')
    } catch (e:any) {
        console.error(e);
        throw new Error(e)
    }

}
const deleteTask = async (formData:FormData) => {
    "use server"
    try {
        const id = formData.get('id') as string;
         await fetch(`https://todo-v3.vercel.app/api/delete-task?id=${id}`,{
            method:"DELETE"
        });
        revalidateTag('tasks');
    } catch (e:any) {
        throw new Error(e)
    }
}
const updateTask = async (formData:FormData) => {
    "use server"
    try {
        await fetch(`https://todo-v3.vercel.app/api/update-task`,{
            method:"PUT",
            body:formData
        })
        revalidateTag('tasks');
    }
    catch (e:any) {
        throw new Error(e)
    }

}
export default async  function Home() {
     const {rows} = await getTasks();
  return (
    <main className="min-h-screen ">
      <h1 className=" text-center text-5xl">Todo <span className="text-yellow-500">List</span></h1>
        <section className="flex justify-center items-center">
            <Form createTask={createTask} />
        </section>
       <TaskList updateTask={updateTask}  rows={rows} deleteTask={deleteTask} />
    </main>
  );
}
