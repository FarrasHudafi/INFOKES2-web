'use client'

import { Button } from '@/components/ui/button';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
    const Menu = [
        {
            id : 1,
            name : 'Home',
            path : '/'
        },
        {
            id : 2,
            name : 'Explore',
            path : '/search/Dentist'
        },
        {
            id : 3,
            name : 'Contact Us',
            path : '/contact-us'
        },

    ]

    const {user} = useKindeBrowserClient();

    useEffect(()=>{
        // console.log(user);m
    },[user])
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10'>
            <Link href='/'>
                <Image src='/logo.svg' alt='logo'
                width={180} height={80}
                />
            </Link>
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item,index)=>(
                    <Link href={item.path} key={index}>
                    <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        { user?

        <Popover>
            <PopoverTrigger>
                <Image
                src={user?.picture}
                alt='profile-image'
                width={50}
                height={50}
                className='rounded-full'
                />
            </PopoverTrigger>
            <PopoverContent className='w-44'>
                <ul className='flex flex-col gap-2 cursor-pointer'>
                    <Link href={'/my-booking'} className='hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
                    <li className='hover:bg-slate-100 p-2 rounded-md'>
                            <LogoutLink>Log out</LogoutLink>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>


        :
        <LoginLink>
        <Button>Get Started</Button>
        </LoginLink>
        }
    </div>
  )
}

export default Header