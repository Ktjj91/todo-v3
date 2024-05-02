import {sql} from "@vercel/postgres";

export  async function PUT(request: Request) {
    try {
        const formData = await request.formData();
        const rawData = {
            id: Number(formData.get('id')),
            task: formData.get('task') as string
        }
        await sql `UPDATE TASKS SET task = ${rawData.task} WHERE id = ${rawData.id}`;

    } catch (e: any) {
        throw new Error(e)

    }

}