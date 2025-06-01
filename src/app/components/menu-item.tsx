"use client"
import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MenuItemProps {
    icon: LucideIcon
    title: string
    description: string
    path: string
}

export default function MenuItem({icon: Icon, title, description, path}: MenuItemProps) {
    const pathname = usePathname()
    const isItemActive = pathname === path
    return (
        <Link href={path}
        className={`${isItemActive && 'bg-blue-800'} w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}>
            <div>
                <Icon/>
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{description}</span>
            </div>
        </Link>
    )
}
