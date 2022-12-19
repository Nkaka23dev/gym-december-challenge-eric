import Link from 'next/link';
import React from 'react';

const About = () => {
    
    return (
        <div className='h-80 bg-tum-blue-light flex'>
            <h1 className='m-auto'> <Link className='text-6xl text-white' href="/">About Page Here.. Back to home</Link></h1>
        </div>
    );
}

export default About;
