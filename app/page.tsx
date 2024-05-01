import {Form} from "@/components/Form";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <h1 className=" text-center text-5xl">Todo <span className="text-yellow-500">List</span></h1>
        <section className="flex justify-center items-center">
            <Form />
        </section>
    </main>
  );
}
