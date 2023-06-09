"use client"
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {databases} from '../appwrite/appwriteConfig'

function TodoForm() {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // const promise = databases.createDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, uuidv4(), {todo})
        const promise = databases.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID, uuidv4(), {todo})
        console.log(promise);
        promise.then(
            function(response){
                console.log(response);
                window.location.reload()
            },
            function(error){
                console.log(error);
            }
        );
        e.target.reset();
    }


  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
    onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm