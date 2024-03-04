import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-zinc-800 text-white text-2xl text-center p-4'>User: {id}</div>
  )
}

export default User