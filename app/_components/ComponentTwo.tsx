"use client"
import React, { useEffect } from 'react'
import { useCounterStore } from '../_store/counterStore'

const logCounter = () => {
  const count = useCounterStore.getState().count
  console.log(count)
}

const setCounter = (type: string) => {
  const count = useCounterStore.getState().count
  useCounterStore.setState({ count: type == "inc" ? count + 1 : count - 1 })
}

const ComponentTwo = () => {

  const count = useCounterStore((state: any) => state.count)
  const increment = useCounterStore((state: any) => state.increment)
  const decerement = useCounterStore((state: any) => state.decerement)

  useEffect(() => {
    logCounter()
  }, [count])


  return (
    <div className='flex justify-center'>
      <button className='text-white bg-blue-600 px-4 py-2 rounded-md mx-5' onClick={decerement}>Decrement</button>
      <button className='text-white bg-blue-600 px-4 py-2 rounded-md mx-5' onClick={increment}>Increment</button>

      <button className='text-white bg-blue-600 px-4 py-2 rounded-md mx-5' onClick={() => setCounter("dec")}>Set Decrement</button>
      <button className='text-white bg-blue-600 px-4 py-2 rounded-md mx-5' onClick={() => setCounter("inc")}>Set Increment</button>



    </div>
  )
}

export default ComponentTwo