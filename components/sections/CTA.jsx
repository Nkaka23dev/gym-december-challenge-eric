import React from 'react';
import Wrapper from '../layout/Wrapper';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <Wrapper>
        <div className="bg-tum-blue-bright-4 my-6">
            <div className="flex px-5 justify-between flex-col items-center py-10">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block text-black ">Giving</span>
                </h2>
                <p className="mt-4  text-center text-md leading-6 text-black">
                    Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.
                </p>
                    <Button styles="text-[1.0625rem] bg-tum-blue-brand   font-bold text-white mt-5 hover:bg-tum-blue-dark-4 " title="SUPPORT US" />
                {/* <a
                    href="#"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-md   sm:w-auto text-white font-bold"
                >
                    
                </a> */}
            </div>
        </div>
        </Wrapper>
    );
}

export default CTA;
