import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useAxios from 'axios-hooks'
import {useSession,signIn,signOut} from 'next-auth/react'

// export default function Home() {
//   const [{data,loading,error}] = useAxios('./api/hello')
//   return (
//     <>
//     <div className='h-[15rem] w-[10rem] rounded-lg shadow-lg bg-red-400 hover:bg-green-400 p-3'>{data.name}</div>
//     </>
//   )
// }

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
      Not signed in <br/>
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}
