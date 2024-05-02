import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function DELETE(request:Request){
    try {
        const  {searchParams} = new URL(request.url);
        const id = Number(searchParams.get('id'));
        await sql `DELETE FROM TASKS WHERE id = ${id}`;

    } catch (e:any) {
        throw new Error(e)
    }


}