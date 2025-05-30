"use client"
import { RootState } from "@/store"
import { Calculator } from "lucide-react"
import Link from "next/link"
import { useSelector } from "react-redux"


export const SimpleWidget = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-900 text-center">Counter</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
                <Calculator color="blue" size={40}/>
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{count}</h4>
              <p className="text-xs text-gray-500">Global counter value</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link href='/dashboard/counter' className="text-blue-600 text-xs font-semibold">Go to counter</Link>
        </div>
        
      </div>
    </div>
  )
}
