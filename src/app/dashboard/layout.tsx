import React from 'react'
import Dashboard from '../components/dashboard'

export default function layout({children}: {children: React.ReactNode}) {

  return (
    <div className="bg-slate-300 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

    <div className="flex ">
        <Dashboard/>
        <div className=' p-2 w-full text-slate-900 ml-64'>
            {children}
        </div>
      
    </div>
</div>
  )
}
