'use client'
import { usePathname, useParams } from 'next/navigation'

export default function DynamicRoute() {
  const pathname = usePathname()
  const params = useParams()

  return (
    <div>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 className="text-center mb-1 text-3xl font-extrabold leading-tight text-gray-900">Welcome to {params.data}</h2>
            <p className="text-center mb-12 text-lg text-gray-500">Current File Path is {pathname}</p>
            <div className="w-full">
            </div>
        </div>
    </div>
  )
}