import React from 'react'
import { Icons } from '../Icon'
import navBarLink from '@/constants/Navbar'
import { Button } from '../button'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-[1.7rem] p-4 py-10 '>
            <div className="space-x-2 flex items-center">
                <Icons.logo className=' size-2' />
                <Icons.name className='size-2' />
            </div>
            <div className="flex space-x-8">
                {
                    navBarLink.map(({ name, href }, index) => {
                        return (
                            <div key={index} className='flex items-center '>
                                <a href={href} className='text-gray-500 hover:text-black'>{name}</a>
                            </div>
                        )
                    })
                }
            </div>
            <Button variant={'outline'} className='py-[1.25rem] px-[2.18rem]'>Request Demo</Button>
        </div>
    )
}
