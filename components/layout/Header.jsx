import React from 'react'
import NavBar from './NavBar'
import Wrapper from './Wrapper'

export default function Header() {
  return (
    <>
      <div className='bg-header-gradient py-[3.75rem] mt-20 md:hidden'>
        <Wrapper>
      <div>
        <h1 class="text-[2.25rem] text-white font-extrabold leading-10">TUM. The Entrepreneurial <br></br> University</h1>
        <p className='text-white text-[1.25rem] mt-[1.5rem]'>Innovation through talent,<br></br> excellence and responsibility</p>
      </div>
        </Wrapper>
      </div>
      {/* Video is dow her. */}

      <div className='relative flex items-center justify-center h-60 md:h-screen overflow-hidden md:mt-20 '>
        <div className='absolute right-0 bottom-0 z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl'>
          button
        </div>
        <Wrapper>
        <div className='hidden md:block absolute left-5 top-20 z-30 text-white ' >
          <h1 className="text-[2.25rem] text-white font-extrabold leading-10 md:leading-[2.7rem] text-5xl">TUM. The Entrepreneurial <br></br>University</h1>
          <p className='text-white text-[1.25rem] mt-[1.5rem] '>Innovation through talent,<br className='block md:hidden' ></br> excellence and responsibility</p>
        </div>
        </Wrapper>
        <video
          controls
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          src="/assets/videos/tum-video.mp4"
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
