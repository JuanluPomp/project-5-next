import { SimpleWidget } from '@/features/counter/components/simple-widget'
import React from 'react'

export const metadata = {
  title: 'Main Page',
  description: 'here we can see the counter state'
}

export default function page() {
  return (
    <div className=' container mx-auto flex flex-col justify-center items-center'>
        <h1 className=' text-center text-3xl'>Dashboard Main</h1>
        <div className=' grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
          <SimpleWidget/>
          <SimpleWidget/>
          <SimpleWidget/>
          <SimpleWidget/>
        </div>
    </div>
  )
}
