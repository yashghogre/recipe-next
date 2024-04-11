'use client'

import { useState } from "react";
import Navbar from "../components/Navbar";
import { IoSearch } from "react-icons/io5";
import { data } from "@/data";
import Image from 'next/image'
import { MdOutlineTimer } from "react-icons/md";
import Link from 'next/link'

const page = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)
        setResult(data.filter((eventdata) => {
            if (search === "") { return eventdata }
            else if (eventdata.name.toLowerCase().includes(search.toLowerCase())) { return eventdata }
        }))

        console.log(result)
    }

    return (
        <>
            <div className="bg-[url('/images/bg-img-2.jpg')]">
                <div className=" pb-5 backdrop-blur-md backdrop-contrast-[0.8]">
                    <Navbar />
                    <h3 className='text-white text-center font-bold text-3xl mt-5 mb-2'>Search Your <span className='text-red-600'>Recipes</span> Here</h3>
                    <p className='text-white text-center mb-5'>Type your desired dish and click on it after loading. Follow the tutorial and enjoy!</p>
                    <div className='w-screen flex justify-center items-center'>
                        <div className='border-white border-2 flex justify-center items-center pr-3'>
                            <input className='bg-transparent w-[30vw] h-10 text-white focus:outline-none pl-2 placeholder:text-white' placeholder='Search Your Recipes here...' id='recipe' list='recipeList' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            <datalist id='recipeList'>
                                <option value={'Dosa'}></option>
                                <option value={'Air Fryer Samosa'}></option>
                                <option value={'Tandoori Chicken'}></option>
                                <option value={'Chickpea Tikka Masala'}></option>
                                <option value={'Gajar Ka Halwa'}></option>
                                <option value={'Chicken Biryani'}></option>
                            </datalist>
                            <IoSearch color='white' className='cursor-pointer' onClick={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center pt-5 font-semibold text-xl'>Search Results</h3>
            </div>
            <div className="mx-[10vw] pt-5  flex flex-col gap-5">
                {result.map((value, key) => {
                    return (
                        <Link href={`/recipe/${value.id}`} key={key} className="p-1">
                            <div className="flex gap-5 border-b-[1px] border-black pb-1 hover:bg-slate-50 transition-all cursor-pointer">
                                <Image src={value.img} height={200} width={200} alt="img" className="rounded-lg" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-bold text-xl">{value.name}</h3>
                                    <div className="flex gap-5">
                                        <div className="flex justify-center items-center">
                                            <MdOutlineTimer />
                                            <p>{value.time}</p>
                                        </div>
                                        {value.isVeg ? <Image src={'/images/veg.png'} height={20} width={25} alt='veg' /> : <Image src={'/images/nonveg.png'} height={20} width={25} alt='veg' />}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default page