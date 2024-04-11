import Image from 'next/image'
import { MdOutlineTimer } from "react-icons/md";
import Link from 'next/link'

const RecipeCard = (props) => {
    return (
        <Link href={`/recipe/${props.id}`}>
            <div className='rounded-lg pb-2 bg-slate-100 cursor-pointer hover:scale-[1.05] transition-all'>
                <Image src={props.img} height={250} width={250} alt='food-img' className='rounded-t-lg' />
                <h3 className='font-semibold pl-3 my-2'>{props.title}</h3>
                <div className='flex gap-5 items-center pl-3'>
                    {props.isVeg ? <Image src={'/images/veg.png'} height={20} width={25} alt='veg' /> : <Image src={'/images/nonveg.png'} height={20} width={25} alt='veg' />}
                    <div className='flex justify-center items-center opacity-70 gap-1'>
                        <MdOutlineTimer />
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard