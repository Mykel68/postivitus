import React from 'react'
import { Icons } from '../Icon'

export const Slider = () => {
    return (
        <div className='flex flex-row justify-between items-center p-8'>
            <Icons.amazon className='size-4' />
            <Icons.dribble />
            <Icons.netflix />
            <Icons.notion />
            <Icons.zoom />
        </div>
    )
}
