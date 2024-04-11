import Link from 'next/link'
import Navbar from './Navbar'

const TopSection = () => {
    return (
        <>
            <div className="pl-5 h-[80vh] bg-[url('/images/bg-img-3.jpg')] bg-cover">
                <Navbar />
                <div className="flex justify-start items-center">
                    <p className="font-bold text-8xl text-white ml-[7vw] mt-[13vh]">Get all your<br /><span className="text-red-600">Recipes</span> here!</p>
                </div>
                <Link href={'/explore'}>
                    <button className="bg-white text-red-600 p-5 rounded-xl hover:bg-red-600 hover:text-white transition-all ml-[7vw] mt-10">Explore Recipes!</button>
                </Link>
            </div>
        </>
    )
}

export default TopSection