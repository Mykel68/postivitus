"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/accordion"
import SectionTitle from "../SectionTitle"

const PROCESS_STEPS = [
    {
        id: "01",
        title: "Consultation",
        content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id: "02",
        title: "Research and Strategy Development",
        content: "We conduct thorough market research and develop a comprehensive strategy tailored to your business objectives and target audience."
    },
    {
        id: "03",
        title: "Implementation",
        content: "Our team executes the agreed-upon strategy, implementing all necessary tools and campaigns according to the planned timeline."
    },
    {
        id: "04",
        title: "Monitoring and Optimization",
        content: "We continuously monitor campaign performance and make data-driven optimizations to ensure maximum effectiveness."
    },
    {
        id: "05",
        title: "Reporting and Communication",
        content: "Regular reports and updates are provided to keep you informed of progress and results, maintaining transparent communication."
    },
    {
        id: "06",
        title: "Continual Improvement",
        content: "We consistently analyze results and gather feedback to implement improvements and maintain long-term success."
    }
]

export const WorkingProcess = () => {
    return (
        <section >
            <SectionTitle title="Our Working Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
            {/* <div className="container px-4 md:px-6"> */}
            {/* <div className="flex flex-col gap-4 mb-8 md:mb-12">
                    <div className="inline-flex items-center rounded-lg bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500 w-fit">
                        Our Working Process
                    </div>
                    <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                        
                    </h2>
                </div> */}

            <Accordion type="single" defaultValue="01" className="w-full mx-auto ">
                {PROCESS_STEPS.map((step) => (
                    <AccordionItem
                        key={step.id}
                        value={step.id}
                        className="group mb-4 rounded-2xl !border-2 data-[state=open]:bg-[#B9FF66] acc-brd"
                    >
                        <AccordionTrigger className="px-6 py-8 hover:no-underline [&[data-state=open]>div]:text-black">
                            <div className="flex items-center gap-4 text-left">
                                <span className="text-4xl font-bold">{step.id}</span>
                                <span className="text-2xl font-medium">{step.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 ">
                            <p className="text-gray-600 dark:text-gray-300 ml-12">
                                {step.content}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            {/* </div> */}
        </section>
    )
}

