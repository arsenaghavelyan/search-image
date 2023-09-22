import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSearch } from '../store/slices/search'

export default function Header() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    return (
        <div className=' bg-slate-600 relative'>
            <Link to={''}>
                <div className=' bg-slate-600 absolute top-[40px] left-[80px] text-white font-black text-[26px]'>
                    Go back
                </div>
            </Link>
            <div className=' bg-slate-600 flex flex-col justify-between items-center p-3'>
                <div className='text-white text-[30px]' >
                    Find images
                </div>
                <div className="flex">
                    <input
                        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                        type="search"
                        placeholder="Search Anything..."
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <Link to={'search'}>
                        <button
                            className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
                            onClick={() => {
                                dispatch(handleSearch({search:input}))
                                setInput('')
                            }}
                            
                        >Search</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
