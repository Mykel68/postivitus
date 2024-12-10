import { Button } from "@/components/button"
import SectionTitle from "../SectionTitle"
import TeamCard from "../TeamCard"
import Team1 from "@/assets/people/1.svg"
import Team2 from "@/assets/people/2.svg"
import Team3 from "@/assets/people/3.svg"
import Team4 from "@/assets/people/4.svg"
import Team5 from "@/assets/people/5.svg"
import Team6 from "@/assets/people/6.svg"


const TEAM_MEMBERS = [
    {
        name: "John Smith",
        role: "CEO and Founder",
        experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        imageUrl: Team1
    },
    {
        name: "Jane Doe",
        role: "Director of Operations",
        experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        imageUrl: Team2
    },
    {
        name: "Michael Brown",
        role: "Senior SEO Specialist",
        experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        imageUrl: Team3
    },
    {
        name: "Emily Johnson",
        role: "PPC Manager",
        experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        imageUrl: Team4
    },
    {
        name: "Brian Williams",
        role: "Social Media Specialist",
        experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        imageUrl: Team5
    },
    {
        name: "Sarah Kim",
        role: "Content Creator",
        experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        imageUrl: Team6
    }
]

export const Team = () => {
    return (
        <section >
            <SectionTitle title='Team' description='Meet the skilled and experienced team behind our successful digital marketing strategies' />


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {TEAM_MEMBERS.map((member) => (
                    <TeamCard
                        key={member.name}
                        {...member}
                    />
                ))}
            </div>

            <div className="flex justify-end w-full">
                <Button className="h-10"
                >
                    See all team
                </Button>
            </div>

        </section>
    )
}

