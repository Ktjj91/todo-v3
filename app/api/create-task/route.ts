import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function POST(request:Request) {
    try {
            const formData = await request.formData();
            const task = formData.get('task') as string;
            await sql`INSERT INTO tasks (task) VALUES (${task})`;
            return NextResponse.json({message:"success !"},{status:201})

    } catch (e:any) {
        return NextResponse.json({message:e},{status:500})
    }

}