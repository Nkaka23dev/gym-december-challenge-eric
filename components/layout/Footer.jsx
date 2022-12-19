import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import FooterSectionTwo from './FooterSectionTwo'

export default function Footer() {
  return (
      <div className='md:text-xs'>
        <div className='bg-tum-blue-dark-1'>
        <Wrapper>
          <div className='md:flex md:justify-between md:border-b md:items-start md:px-10 '>
         <div className='flex items-start py-10 tracking-wider space-x-8'>
          <Image src="/assets/icons/tum-logo.svg" alt="image" className='' width={60} height={60} />
          <div className='text-white space-y-8'>
          <p>
            Technical University of Munich<br></br>
            Arcisstraße 21<br></br>
            80333 München
          </p>
          <p>
            Phone:
            <a href="tel:+498928901">+49 (0)89-289-01</a><br/>
              Fax:
              <a href="tel:+4928922000">+49 (0)89-289-22000</a>
          </p>
          </div>
         </div>
          <div className="text-white md:py-10 font-bold space-y-3">
            <h2 className="">
              Let shape the future together.
            </h2>
            <ul className="font-light">
              <li className='flex gap-2'>
                <a href="https://www.fundraising.tum.de/en/fundraising/startpage/" target="_blank" rel="noreferrer">
                  Support us
                </a>
                <Image src="/assets/icons/imm.svg" alt="image" className='' width={20} height={20} />
              </li>
            </ul>
          </div>
          <div className="text-white md:py-10 py-16 md:border-none border-b border-white">

            <h2 className="font-bold text-lg">Latest news</h2>
            <ul className="flex-col items-start space-y-5 mt-5 ">

              <li className='flex gap-4 items-start'>
                <Image src="/assets/icons/inn.svg" alt="image" className='' width={20} height={20} />
                <a title="Germany's strongest university in business sciences" href="/en/news-and-events/all-news/press-releases/details/forschungsstaerkste-deutsche-universitaet-in-bwl-1">
                  Germany strongest university in business <br></br>  sciences
                </a>
              </li>

              <li className='flex gap-4 items-start'>
                <Image src="/assets/icons/inn.svg" alt="image" className='' width={20} height={20} />
                <a title="TUM partners with Nobel Sustainability Trust" href="/en/news-and-events/all-news/press-releases/details/tum-kooperiert-mit-nobel-sustainability-trust">
                  TUM partners with Nobel Sustainability <br className='block md:hidden' ></br>  Trust
                </a>
              </li>

              <li className='flex gap-4 items-start'>
                <Image src="/assets/icons/inn.svg" alt="image" className='' width={24} height={24} />
                <a title="Antihelium nuclei as messengers from the depths of the galaxy " href="/en/news-and-events/all-news/press-releases/details/antihelium-kerne-als-boten-aus-den-tiefen-der-galaxis">
                  Antihelium nuclei as messengers from the<br></br> depths of the galaxy
                </a>
              </li>
            </ul>
          </div>
          </div>
          {/* Footer next Division */}
          <div className="text-white py-6 md:flex md:items-baseline">
            <div className="py-5">
              <h2 className='text-sm font-bold tracking-wider md:tracking-normal'>Schools and Departments:</h2>
            </div>
            <div>
              <ul className="space-y-3  md:flex md:items-center">
                <li className='text-sm flex space-x-2 md:space-x-0 w-full  md:text-[0.8rem]'>
                  <a href="https://www.cit.tum.de/en/" target="_blank" rel="noreferrer">
                    Computation, Information and Technology
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2 w-full md:items-center'>
                  <a href="https://www.ed.tum.de/en/" target="_blank" rel="noreferrer">
                    Engineering and Design
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2 w-full md:items-center'>
                  <a href="https://www.nat.tum.de/en/nat" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span>Natural Sciences</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                  <a href="https://www.wzw.tum.de/index.php?id=2&amp;L=1" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span>Life Sciences</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                </li>
                <li className='text-sm flex space-x-2 md:space-x-0 w-full  md:text-[0.8rem]'>
                  <a href="https://www.mgt.tum.de/" target="_blank" rel="noreferrer">
                    Management
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2 md:space-x-0 w-full  md:text-[0.8rem]'>
                  <a href="https://www.sot.tum.de/en/" target="_blank" rel="noreferrer">
                    Social Sciences and Technology
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2 md:space-x-0 w-full  md:text-[0.8rem]'>
                  <a href="https://www.med.tum.de/en" target="_blank" rel="noreferrer" className='flex gap-2' >
                    <span> Medicine</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                  <a href="https://www.sg.tum.de/en/" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span>Sport and Health Sciences</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* next Sections */}
          <div className="text-white pb-6">
            <div className="py-5">
              <h2 className='text-sm font-bold tracking-wider'>Quick Links:</h2>
            </div>
            <div>
              <ul className="space-y-3 md:flex">
                <li className='text-sm flex space-x-2'>
                  <a href="https://www.nat.tum.de/en/nat" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span> Persons(TUMonline)</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                  <a href="https://www.wzw.tum.de/index.php?id=2&amp;L=1" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span>IT Services</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                </li>
                <li className='text-sm flex space-x-2'>
                  <a href="https://www.mgt.tum.de/" target="_blank" rel="noreferrer">
                    Calender
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2'>
                  <a href="https://www.sot.tum.de/en/" target="_blank" rel="noreferrer">
                    Rooms(TUMonline)
                  </a>
                  <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                </li>

                <li className='text-sm flex space-x-2'>
                  <a href="https://www.med.tum.de/en" target="_blank" rel="noreferrer" className='flex gap-2' >
                    <span>University Library</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                  <a href="https://www.sg.tum.de/en/" target="_blank" rel="noreferrer" className='flex gap-2'>
                    <span>TUM Shop</span>
                    <Image src="/assets/icons/imm.svg" alt="image" className='' width={16} height={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
        <hr></hr>
        </div>
        {/* Second footer division */}
        <FooterSectionTwo/>
      </div>
    // <div className='text-sm text-green-700'>Footer Components is here</div>
  )
}
