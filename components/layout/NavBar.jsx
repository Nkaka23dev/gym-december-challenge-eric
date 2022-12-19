import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Wrapper from './Wrapper'

export default function NavBar() {
    return (
        <div className='bg-tum-blue-dark fixed top-0 left-0 right-0 z-50 w-full'>
            <Wrapper>
                <div className='flex justify-between py-5 items-center gap-10'>
                    <div className='flex items-center gap-3'>
                        <Link href='/'>
                            <Image src="/assets/icons/logo.svg" alt="image" className='text-white' width={30} height={30} />
                        </Link>
                        <Link href='/'>
                            <Image src="/assets/icons/tum-logo.svg" alt="image" className='' width={90} height={80} />
                        </Link>
                        <Link href='/'>
                            <div className='hidden md:block text-white text-xs -leading-3'>
                                Technicla<br></br>
                                University<br></br>
                                of Munich
                            </div>
                        </Link>
                    </div>
                    <div className='hidden md:block flex-1'>
                        <ul className='text-white flex items-center gap-6 font-bold text-xs uppercase'>
                            <li><Link href="/allPages/news" >News and Events</Link></li>
                            <li><Link href="/allPages/studies" >Studies</Link></li>
                            <li><Link href="/allPages/lifelong" >LifeLong Learning</Link></li>
                            <li><Link href="/allPages/research" >Research</Link></li>
                            <li><Link href="/allPages/innovation" >Innovation</Link></li>
                            <li><Link href="/allPages/community" >Community</Link></li>
                            <li><Link href="/allPages/about" >About Tum</Link></li>
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
