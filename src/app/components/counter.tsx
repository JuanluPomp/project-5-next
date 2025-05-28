"use client"

import React, { useState } from 'react'

export default function Counter() {
    
  const [count, setCount] = useState(0)
  const handleClick = (e:  React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name
    const valueToEnter = target === '-1' ? count-1 : count + 1
    setCount(valueToEnter)
    console.log(target)
  }
  return (
    <div className=' flex justify-center items-center rounded-md border  border-gray-300 shadow-md shadow-sky-400 p-2 mt-4 bg-white w-1/3 py-5'>
        <button
          name='-1'
          onClick={handleClick}
          className=' text-3xl font-bold text-slate-900 hover:underline cursor-pointer bg-sky-500 rounded-md p-1 shadow'
        >-1</button>
        <span className=' text-4xl font-bold text-slate-950 px-2'>{count}</span>
        <button
          name='+1'
          onClick={handleClick}
          className=' text-3xl font-bold text-slate-900 hover:underline cursor-pointer bg-sky-500 rounded-md p-1 shadow'
        >+1</button>
      </div>
  )
}
