import {redirect} from 'next/navigation';
import { getServerSession } from 'next-auth';
import {authOption} from '../api/auth/[...nextauth]/route'

const ServerPage = async () => {
    const session = await getServerSession(authOption)
    if(!session)
        redirect("/signin?callbackUrl=/server")

  return (
    <div className='text-xl'>Página desenvolvida com segurança por {session?.user?.name} <span className='text-blue-300'>- Servidor</span></div>
  )
}

export default ServerPage