import React from 'react'
import { Button } from '../button'

export const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-20 mx-auto max-w-screen-xl'>
            <div className="flex flex-col  space-y-8 justify-center">
                <h1 className='text-6xl'>Navigating the digital landscape for success</h1>
                <p className='text-xl'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <Button className='w-64'>Book a consultation</Button>
            </div>
        </div>
    )
}
