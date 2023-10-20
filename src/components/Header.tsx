import React from 'react'
import codingLogo from '../../public/coding.svg'
import Image from 'next/image'

export default function Header() {
    return (
        <>
        <header className='lg:h-32 bg-hacker-news'>
            <div className='flex'>
                <h1 className='text-xl lg:text-7xl pl-7 py-6 lg:py-0 font-extrabold '>Article Preview</h1>
                <Image src={codingLogo} className=' ml-3 mb-2 lg:ml-6 pt-2 w-7 lg:w-20' alt='coding-logo' />
            </div>
        </header>
        </>
    )
}