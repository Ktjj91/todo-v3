"use client"


export function ButtonEdit({toggleIsInput}:any){

    return (
            <p onClick={toggleIsInput} className="hover:cursor-pointer">Edit</p>
    )
}