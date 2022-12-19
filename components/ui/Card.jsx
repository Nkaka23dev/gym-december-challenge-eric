import React from 'react'
import Image from 'next/image'
import Button from './Button'
import CardBtn from './CardBtn'


export default function Card({cardStyles, styles, post }) {
    return (
        <div className={`${cardStyles} flex flex-col`}> 
            {/* Title */}
            <div className='relative text-tum-blue-dark '>
                <Image src={post.imgUrl} alt="image" className='w-full h-full object-cover object-center aspect-video' width={500} height={500} />
                <CardBtn styles="absolute px-3 bottom-0 left-0" title={post.buttonTitle} />
            </div>
            <div className='pt-5'>
                <p className='tracking-wider w-full text-primary text-sm font-semibold'>{post.title}</p>
                <p className='tracking-wider w-full text-primary text-xl font-bold'>{post.subTitle}</p>
                {/* Body */}
                <p className='mt-3 w-full text-tum-blue-dark text-sm'>{post.description}</p>
            </div>
            {/* Footer */}
            <div className='pr-5 py-5 flex justify-between'>
                <p className='text-sm font-semibold text-tum-blue-dark'>12/16/2022</p>
                <p className='text-sm font-semibold text-tum-blue-dark' >Reading time 2 min.</p>
            </div>
            </div>
    )
}