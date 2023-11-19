import { auth } from '@clerk/nextjs'
import Link from 'next/link'


export default async function Home() {
  const { userId } = await auth()
  
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w=screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journal app</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is an AI powered notes app for tracking your mood throughout life.</p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 p-4 rounded-lg text-xl">get started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}