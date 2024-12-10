interface TestimonialCardProps {
    quote: string
    author: string
    position: string
}

export function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
    return (
        <div className="relative px-4 py-2">
            <div className="relative bg-gray-900 rounded-2xl p-6 mb-6">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rotate-45 bg-gray-900" />
                <p className="text-gray-200 leading-relaxed">
                    {quote}
                </p>
            </div>
            <div className="text-center">
                <h3 className="font-medium text-lg">{author}</h3>
                <p className="text-sm text-gray-500">{position}</p>
            </div>
        </div>
    )
}

