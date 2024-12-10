'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { Label } from "@/components/label"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Button } from "@/components/button"
import SectionTitle from '../SectionTitle'
import { Icons } from '../Icon'

export function ContactForm() {
    const [type, setType] = useState('say-hi')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // Form submission logic here
    }

    return (
        <section className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg">Our Company</h3>
                        <p className="mt-4">
                            We are committed to providing the best solutions for your business needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white font-semibold text-lg">Follow Us</h3>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="hover:text-white">
                                <Icons.linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Icons.linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Icons.linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </section>

    )
}

