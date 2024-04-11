import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-5'>
        <Link href={'/'}><h3 className='font-bold ml-5 text-3xl text-white'>Recipe <span className='text-red-600'>App</span></h3></Link>
    </div>
  )
}

export default Navbar