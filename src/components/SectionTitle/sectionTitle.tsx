import React from 'react'

export const SectionTitle = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='flex gap-8 items-center justify-center mb-10'>
            <div className="bg-[#B9FF66] p-1 rounded">
                <p className='text-black text-4xl font-medium leading-normal'>{title}</p>
            </div>
            <p className='text-xl leading-normal font-normal text-black text-balance text-left '>{description}</p>
        </div>
    )
}
