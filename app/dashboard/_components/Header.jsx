"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'; 
import { UserButton } from '@clerk/nextjs';

function Header() {
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    const handleUpgradeClick = () => {
        router.push('/dashboard/upgrade');
    };

    const handleHowItWorksClick = () => {
        router.push('/dashboard/howitworks');
    };

    const handleQuestionsClick = () => {
        router.push('/dashboard/questions');
    };  

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.jpg'} className={'rounded-full'} width={65} height={60} alt='logo'/>
            <ul className='hidden md:flex gap-6'>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}
                    onClick={() => router.push('/dashboard')}
                >
                    Dashboard
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' && 'text-primary font-bold'}`}
                    onClick={handleQuestionsClick}
                >
                    Questions
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}
                    onClick={handleUpgradeClick}
                >
                    Upgrade 
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/howitworks' && 'text-primary font-bold'}`}
                    onClick={handleHowItWorksClick}
                >
                    How it Works?
                </li>
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;
