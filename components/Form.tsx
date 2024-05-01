"use client";
export function Form(){
    return (
        <form className='mt-5' action="">
            <input placeholder="...What your todo" className=" p-2 rounded w-72 border-2 border-black" type="text"/>
            <button className=" mx-2 border-2 border-black  rounded-md p-2 hover:bg-yellow-400">+</button>
        </form>
    )
    
}