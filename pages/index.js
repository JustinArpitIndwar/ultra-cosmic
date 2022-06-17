import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useAxios from 'axios-hooks'
import {useSession,signIn,signOut} from 'next-auth/react'


export default function Home() {
  const {data : session, status} = useSession()
  if(session) {
    return(
      <>
        <p>{status}</p>
        <p>User mail : {session.user.email}</p>
        <p>User name : {session.user.name}</p>
        <img height="300px" width="300px" src={session.user.image} alt="user image"/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return(
    <>
    <div className='h-screen flex justify-center place-content-center p-52 '>
    
      <div className='w-[25rem] h-[15rem]  flex flex-col gap-5 p-10 justify-around text-center'>
        <div className='text-3xl font-bold mb-5'>Log in to XYZ</div>
        <button className='bg-gray-800 p-3 rounded-xl hover:bg-gray-700 hover:scale-[1.05] duration-500 '>Github</button>
        <button className='bg-red-500 p-3 rounded-xl hover:bg-red-400 hover:scale-[1.05] duration-500'>Google</button>
        <button className='bg-blue-700 p-3 rounded-xl hover:bg-blue-600 hover:scale-[1.05]  duration-500'>LinkedIn</button>
      </div>
      

    </div>
    </>
  )
}
