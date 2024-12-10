import React from 'react'
import SectionTitle from '../SectionTitle'
import { Card, CardContent } from '../card'
import { ArrowRight } from 'lucide-react'

export const CaseStudies = () => {
    return (
        <section>
            <SectionTitle title='Case Studies' description='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies' />
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="flex flex-col gap-4 p-6">
                        <p className="text-gray-200">
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a significant boost in reservations.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                        >
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="flex flex-col gap-4 p-6">
                        <p className="text-gray-200">
                            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                        >
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="flex flex-col gap-4 p-6">
                        <p className="text-gray-200">
                            For a national retail chain, we created a social media marketing campaign that increased followers by 150% and generated a 300% increase in online sales.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                        >
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
