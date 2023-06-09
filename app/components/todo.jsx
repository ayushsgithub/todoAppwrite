"use client"
import {useState, useEffect} from 'react'
import {databases} from '../appwrite/appwriteConfig'

function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
      const getTodos = databases.listDocuments("6481b13459015a21109c", "6481b1775d810b3cdb8e")
    
      getTodos.then(
        function(response){
            setTodos(response.documents)
        },
        function(error){
            console.log(error);
        }
      )
      setLoader(false)
    }, [])

    const handleDelete = async (e, item) => {
      // console.log('Deleting Todo');
      try {
        await databases.deleteDocument( "6481b13459015a21109c", "6481b1775d810b3cdb8e", item['$id']);
        window.location.reload()
      } catch (e) {
        alert("You are not authorized to delete TODOS")
        console.error('Error in deleting todo');
      }
    };
    

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
              {todos &&  todos.map(item => (
                <div key={item.$id} >
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={(e) => {handleDelete(e, item)}}>
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              )) }
            
        </div>
      )}
    </div>
  )
}

export default Todos