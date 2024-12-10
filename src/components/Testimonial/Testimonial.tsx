"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionTitle from "../SectionTitle";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        feedback:
            "This platform has transformed the way our team collaborates. Highly recommended!",
    },
    {
        name: "Jane Smith",
        role: "Product Manager, InnovateX",
        feedback:
            "Excellent features and top-notch support. A must-have tool for any business!",
    },
    {
        name: "Sam Wilson",
        role: "Freelancer",
        feedback:
            "As a freelancer, this has streamlined my workflow and improved productivity!",
    },
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        feedback:
            "This platform has transformed the way our team collaborates. Highly recommended!",
    },
    {
        name: "Jane Smith",
        role: "Product Manager, InnovateX",
        feedback:
            "Excellent features and top-notch support. A must-have tool for any business!",
    },
    {
        name: "Sam Wilson",
        role: "Freelancer",
        feedback:
            "As a freelancer, this has streamlined my workflow and improved productivity!",
    },
];

export const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const autoplay = useCallback(() => {
        if (!emblaApi) return;
        const timer = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [emblaApi]);

    useEffect(() => {
        const cleanup = autoplay();
        return cleanup;
    }, [autoplay]);

    return (
        <section className="bg-gray-50" >
            <SectionTitle title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
            <div className="max-w-7xl mx-auto text-center  ">
                <div className="mt-8 overflow-hidden " ref={emblaRef}>
                    <div className="flex space-x-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full max-w-md mx-auto text-center p-6 bg-white shadow-md rounded-lg "
                            >
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                <p className="mt-2 text-gray-600 italic">
                                    "{testimonial.feedback}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
