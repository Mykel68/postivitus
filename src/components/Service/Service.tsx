import React from 'react'
import SectionTitle from '../SectionTitle'
import ServiceCard from '../ServiceCard'
import Services from '@/constants/Service'
import { Button } from '../button'

export const Service = () => {
    return (
        <section className='!items-center'>
            <SectionTitle title='Services' description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />

            {/* <ServiceCard /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12  gap-10">
                {Services.map((service, index) => (
                    <ServiceCard key={index} name={service.name} sub={service.sub} image={service.image} bgColor={service.bgColor} textColor={service.textColor} icon={service.icon} />
                ))}
            </div>

            <div className="bg-[#F3F3F3] px-[3.75rem] rounded-3xl">
                <div className="grid grid-cols-2">
                    <div className="space-y-8 flex flex-col items-start justify-between p-5 pb-8">
                        <h3 className='text-[1.8rem] leading-normal font-medium'>Let’s make things happen</h3>
                        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <Button>Get Your Free Proposal</Button>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}
