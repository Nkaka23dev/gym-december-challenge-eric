import React from 'react'
import Image from 'next/image'

export default function FooterSectionTwo() {
    return (
        <>
            <div className='bg-tum-blue-dark'>
                <div className='pt-10 px-5 flex space-x-5'>
                    <Image src="/assets/icons/soc-facebook.svg" alt="image" className='' width={20} height={20} />
                    <Image src="/assets/icons/soc-youtube.svg" alt="image" className='' width={20} height={20} />
                    <Image src="/assets/icons/soc-twitter.svg" alt="image" className='' width={20} height={20} />
                    <Image src="/assets/icons/soc-instagram.svg" alt="image" className='' width={20} height={20} />
                    <Image src="/assets/icons/soc-linkedin.svg" alt="image" className='' width={20} height={20} />
                    <Image src="/assets/icons/soc-twitter.svg" alt="image" className='' width={20} height={20} />
                </div>
                <div class="text-white">
                    <ul className='space-y-2 px-5 pt-4'>
                        <div className='flex space-x-3'>
                            <li>
                                <a href="/en/about-tum/careers-and-jobs/careers-at-tum">
                                    Jobs
                                </a>
                            </li>

                            <li>
                                <a href="/en/about-tum/contact-directions/feedback">
                                    Feedback
                                </a>
                            </li>

                            <li>
                                <a href="/en/press-and-media">
                                    Press and Media
                                </a>
                            </li>

                            <li>
                                <a href="/en/spezialseiten/accessibility">
                                    Accessibility
                                </a>
                            </li>
                        </div>
                        <div className='flex space-x-2'>
                            <li>
                                <a href="/en/privacy-policy">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="/en/about-tum/contact-directions/legal-notice">
                                    Legal Notice
                                </a>
                            </li>
                        </div>
                    </ul>

                </div>
                <div className='flex items-start py-10 px-5 space-x-8'>
                    <Image src="/assets/icons/tree.svg" alt="image" className='' width={70} height={70} />
                    <div className='text-white space-y-5'>
                        <h2 className='text-sm font-bold' >TUM Partners of Excellence</h2>
                        <p className='text-xs leading-5'>Airbus · Altana · Audi · Bayerischer<span id="nbsp">&nbsp;</span>Bauindustrieverband · BMW · Bosch · Busch Vacuum&nbsp;· Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde<span id="nbsp">&nbsp;</span>&amp;<span id="nbsp">&nbsp;</span>Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>
                    </div>
                </div>
            </div>
        </>
    )
}
