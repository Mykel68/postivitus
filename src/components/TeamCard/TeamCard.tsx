import { Icon, Linkedin } from 'lucide-react'
import { Card, CardContent } from "@/components/card"
import { Icons } from '../Icon'
import Image from 'next/image'

interface TeamMemberProps {
    name: string
    role: string
    experience: string
    imageUrl: string
}

export const TeamCard = ({ name, role, experience, imageUrl }: TeamMemberProps) => {
    return (
        <Card className="border-0 shadow-none team-card-brd">
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                        <div className="absolute inset-0 " />
                        {/* <Icons.vector /> */}
                        <Image src={imageUrl} alt="team" width={100} height={100} className='clip'
                            style={{
                                background: `linear-gradient(0deg, #B9FF66 0%, #B9FF66 100%)`,
                                backgroundBlendMode: "multiply, normal",
                            }} />
                    </div>
                    <a
                        href="#"
                        className="text-gray-900 hover:text-gray-700 transition-colors"
                        aria-label={`${name}'s LinkedIn profile`}
                    >
                        <Icons.linkedin />
                    </a>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-gray-600 text-sm">{role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {experience}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}


