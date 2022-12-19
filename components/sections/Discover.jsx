import React from 'react';
import Wrapper from '../layout/Wrapper';
import Button from '../ui/Button';

const Discover = () => {
    return (
      <Wrapper>
      <div className='w-full h-96 border-[2.5rem] border-[#FED702]'>
                <div className="py-4">
                    <p className='w-[85%] mx-auto '>For:</p>
                    <ul>
                    <div className='space-y-6 mt-3'>
                        <li className='font-bold bg-[#E8ECEF] w-[93%] mx-auto py-5'>
                            <button className="pl-5" type="button" data-content="0" data-color="bright-yellow">
                                Prospective Students
                            </button>
                        </li>

                        <li className='font-bold w-[85%] mx-auto text-tum-blue-brand '>
                            <button className="btn " type="button" data-content="1" data-color="lilac">
                                Founders
                            </button>
                        </li>

                            <li className='font-bold w-[85%] mx-auto text-tum-blue-brand  '>
                            <button className="btn " type="button" data-content="2" data-color="blue">
                                Employees
                            </button>
                        </li>
                        </div>
                        <li className='font-bold w-[85%] text-tum-blue-brand mx-auto  mt-16'>
                            <button className="btn btn--nav-trigger" type="button">Show all</button>
                        </li>
                    </ul>
                </div>    
        </div>
            <div className='flex flex-col space-y-5 items-start py-14 md:w-2/4'>
                <h1 className='text-[2rem] font-extrabold'>News from TUM</h1>
                <p className='text-xl leading-8 text-tum-blue-dark tracking-wide'>News, research results and events:<br></br> everything that enthuses people at our university.</p>
                {/* <Button styles="text-tum-blue-brand border border-tum-blue-brand text-xs border-blue-500" title="Learn More" /> */}
                <div className='px-6 py-3  text-whiterounded-xl text-tum-blue-brand border border-tum-blue-brand text-sm'>
                    Learn More
                </div>  
            </div>

      </Wrapper>
    );
}

export default Discover;
