'use client'

import { useEffect, useState } from "react";
import Image from 'next/image'
import { data } from "@/data";
import Navbar from "@/app/components/Navbar";
import { MdOutlineTimer } from "react-icons/md";

const page = ({ params }) => {

    const id = params.id;
    const [result, setResult] = useState([])
    useEffect(() => {
        console.log(id)
        const found = data.find(element => element.id === parseInt(id))
        setResult(found)
    }, [])

    return (
        <div>
            <div className="bg-[url('/images/bg-img-2.jpg')] bg-cover">
                <div className=" pb-5 backdrop-blur-md backdrop-contrast-[0.8]">
                    <Navbar />
                </div>
            </div>
            <div className="flex mt-5 justify-center gap-10 pb-5">
                <div>
                    <Image src={result.img} height={400} width={400} alt='img' className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-2xl">{result.name}</h3>
                    <div className="flex gap-5">
                        {result.isVeg ? <Image src={'/images/veg.png'} height={20} width={25} alt='veg' /> : <Image src={'/images/nonveg.png'} height={20} width={25} alt='veg' />}
                        <div className="flex justify-center items-center">
                            <MdOutlineTimer />
                            <p>{result.time}</p>
                        </div>
                    </div>
                    <h3 className="font-semibold text-md">Ingredients: </h3>
                    <p className="w-[50vw]">{result.ingredients}</p>
                    <h3 className="font-semibold text-md">Instructions: </h3>
                    <p className="w-[50vw]">{result.instructions}</p>
                </div>
            </div>
            <div>
                <h3 className="text-center font-bold text-2xl py-5">Watch this <span className="text-red-600">video</span> to better understand!</h3>
                <div className="flex justify-center items-center  pb-5">
                    <iframe width="560" height="315" src={result.ytLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-lg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default page