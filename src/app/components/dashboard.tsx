import { LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MenuItem from './menu-item'

const MenuItems = [
    {
        icon: <LayoutDashboard/>,
        title: 'Dashboard',
        description: 'Data Overview',
        path: '/dashboard'
    ,}
    {
        icon: <LayoutDashboard/>,
        title: 'Counter',
        description: 'Counter',
        path: '/dashboard/counter'
    }
]

export default function Dashboard() {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
           <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>

           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full w-8 h-8" 
                    width={50} height={50}
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="" />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Juan Lizarraga
                </span>
                </a>
           </div>
           
           <div id="nav" className="w-full px-6">
            {MenuItems.map(item => (
                <MenuItem
                icon={item.icon}
                title={item.title}
                description={item.description}
                path={item.path}
           />
            ))}
           
            
           </div>
        </div>
  )
}
