"use client"
import React from 'react'


const getData =async(data)=>{
    await new Promise((resolve)=>setTimeout(resolve, 2000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data}`)
    return await res.json()
}

const page = async({params}) => {
    const datas = await getData(params.id)
  return (
    <div className=''>
        <div className='border-2 border-orange-600 my-2 mx-4 p-3 capitalize rounded-lg'> 
            <h3><span className='text-orange-700 capitalze text-xl font-bold'>title: </span>{datas?.title}</h3>
            <p><span className='text-orange-700 capitalze text-xl font-bold'>body: </span>{datas?.body}</p>
        </div>
    </div>
  )
}

export default page
