import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()

// const Github = () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/swarupdeb')
//         .then((res) => res.json())
//         .then((data) => {
//             setData(data)
//         })
//     },[])
  return (
    <div className='bg-zinc-800 text-white text-2xl text-center relative p-4'>Github Repos: {data.public_repos}
    <img className="mx-auto"src={data.avatar_url}alt="swarup" width={400} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/swarupdeb')
    return response.json()
}