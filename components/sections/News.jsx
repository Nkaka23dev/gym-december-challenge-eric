import React from 'react'
import Wrapper from '../layout/Wrapper'
import Button from '../ui/Button'
import Card  from '../ui/Card'
import { data, data1 } from '../../data/data'

export default function News() {
    return (
        <div>
            <Wrapper>
            <div className='flex-col flex md:flex-row'>
                <div className='flex flex-col space-y-5 items-start py-14 md:w-2/4'>
                    <h1 className='text-[2rem] font-extrabold'>News from TUM</h1>
                    <p className='text-xl leading-8 text-tum-blue-dark tracking-wide'>News, research results and events:<br></br> everything that enthuses people at our university.</p>
                    <Button styles="text-[1.0625rem] bg-tum-blue-brand  font-bold text-white" title="SEE ALL" />
                </div>
                <div className='block md:hidden'>
                    {data.map((value) => (
                        <Card key={value.id} post={value} />
                    ))}
                </div>
                <div className='hidden md:flex md:w-2/4 md:pt-14 md:space-x-5'>
                    <Card post={data1} />
                    <Card post={data1} />
                </div>
                </div>
                <div className='hidden md:flex md:ml-96 md:pt-7 md:w-2/4 md:space-x-5'>
                    <Card post={data1} />
                    <Card post={data1} />
                </div>
            </Wrapper>
        </div>
    )
}
