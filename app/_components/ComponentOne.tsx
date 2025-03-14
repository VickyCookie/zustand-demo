"use client"
import React from 'react'
import { useCounterStore } from '../_store/counterStore'

const ComponentOne = () => {
    const count = useCounterStore((state: any) => state.count)
    return (
        <div className='text-7xl text-center my-7'>{count}</div>
    )
}

export default ComponentOne