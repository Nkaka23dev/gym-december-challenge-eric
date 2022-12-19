import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

export default function NavBar() {
    return (
    <div className='bg-tum-blue-dark fixed top-0 left-0 right-0 z-50 w-full'>
       <Wrapper>
        <div className='flex justify-between py-5 items-center gap-10'>
            <div className='flex items-center gap-3'>
                <Image src="/assets/icons/logo.svg" alt="image" className='text-white' width={30} height={30} />
                <Image src="/assets/icons/tum-logo.svg" alt="image" className='' width={90} height={80} />
                <div className='hidden md:block text-white text-xs -leading-3'>
                Technicla<br></br>
                University<br></br>
                of Munich
                </div>
            </div>
            <div className='hidden md:block flex-1'>
            <ul className='text-white flex items-center gap-6 font-bold text-xs uppercase'>
          <li>News and Events</li>
          <li>Studies</li>
          <li>LifeLong Learning</li>
          <li>Research</li>
          <li>Innovation</li>
          <li>Community</li>
          <li>About Tum</li>
            </ul>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex text-white uppercase'>
                            <p className='border-r-2 border-r-white pr-2 text-[#627286] font-semibold'>DE</p>
                            <p className='pl-2 font-semibold'>En</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/icons/search.svg" alt="image" className='text-white' width={25} height={25} />
                    <Image src="/assets/icons/menu.svg" alt="image" className='' width={25} height={25} />
                </div>
            </div>
        </div>
        </Wrapper>
        </div>
    )
}
