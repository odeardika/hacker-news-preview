import React from 'react'
import codingLogo from '../../public/coding.svg'
import Image from 'next/image'

export default function Header() {
    return (
        <>
        <header className='h-32 bg-hacker-news '>
            <div className='flex'>
                <h1 className='text-7xl pl-7 py-6 font-extrabold'>Article Preview</h1>
                <Image src={codingLogo} className='pl-3 pt-2' width={80} height={60} alt='coding-logo' />
            </div>
        </header>
        </>
    )
}