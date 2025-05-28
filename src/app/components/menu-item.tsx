import { usePathname } from 'next/navigation'
import React from 'react'

interface MenuItemProps {
    icon: React.JSX.Element,
    title: string
    description: string
    path: string
}

export default function MenuItem({item}: {item: MenuItemProps}) {
    const pathname = usePathname()
    const isItemActive = pathname === item.path
    return (
        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
            <div>
                {item.icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{item.title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{item.description}</span>
            </div>
        </a>
    )
}
