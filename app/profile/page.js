"use client"
import {useState, useEffect} from 'react'
import {account} from '../appwrite/appwriteConfig'
import TodoForm from '../components/todoform'
import Todos from '../components/todo'
import Link from "next/link";
import { useRouter } from "next/navigation";

function Profile() {

    const router = useRouter()

    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
      const getData = account.get()
      getData.then(
        function(response){
            setUserDetails(response)
        },
        function(error){
            console.log(error);
        }
      )
    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      {userDetails ? (
        <div>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md ">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </div>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link href={"/"}>
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}

export default Profile