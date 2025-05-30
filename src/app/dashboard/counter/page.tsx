
import Counter from '@/features/counter/components/counter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'counter page description'
}

export default function CounterPage() {
  return (
    <div className=' container mx-auto flex flex-col items-center'>
      <h1 className=' text-3xl text-center mt-10'>CounterPage</h1>
      <Counter/>
    </div>
  )
}
