"use client"
import Link from "next/link"
import { useState } from "react"


const getData =async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    await new Promise((resolve)=>setTimeout(resolve, 2000))
    return await res.json()
}
export default async function Home() {
    const[state,setState] = useState([])
    const datas = await getData()
    const handleSubmit = e =>{
        e.preventDefault()
        const value = e.target.text.value.toLowerCase()
        const items = datas.filter((i)=>{
            const item = i.title.replace(/\s/g, '')
            const join = item.toLowerCase()
            const joinValue = value.replace(/\s/g, '')
            const length = joinValue.length 
            return join.slice(0,length) === joinValue
 
        })
        setState(items)
    }
    const items = state.length>0? state : datas
  return (
    <main className="my-4">
        <form onSubmit={handleSubmit} className="flex justify-center my-8 gap-2">
            <input className="input input-sm w-4/12 text-black dark:text-white" type="text" name="text"/>
            <button className="btn btn-sm">click</button>
        </form>
        <div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mx-5 capitalize">
            { items.map((data)=>(
                <div key={data?.id} className="border-2 border-orange-600 p-2 rounded-md">
                    <h2><span className="text-orange-600 text-lg">title:</span> {data?.title}</h2>
                    <p><span className="text-orange-600 text-lg">body:</span> {data?.body}</p>
                    <div className="flex gap-2 mt-2">
                        <button className="btn-sm btn btn-error">delete</button>
                        <Link href={`/${data.id}`}><button className="btn btn-sm">details</button></Link>
                    </div>
                </div>
            ))}
        </div> 
    </main>
  )
}
