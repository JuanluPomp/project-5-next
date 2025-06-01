"use client"

import { decrement, increment, initCounterState} from '@/store/counter/counter-slice'
import { RootState, useAppDispatch } from '@/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const getApiCounter = async ()  => {
    const res = await fetch(`/api/counter`).then(res => res.json())
    return res.count
}

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then(data => dispatch(initCounterState(data)))
  }, [dispatch])

  const handleClick = (e:  React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name
    if(target === '-1'){
      dispatch(decrement())
      return
    }
    dispatch(increment())
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
