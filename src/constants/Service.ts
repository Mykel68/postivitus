import Service1 from "@/assets/service1.svg";
import Service3 from "@/assets/service3.svg";
import Service4 from "@/assets/service4.svg";
import Service5 from "@/assets/service5.svg";
import Service6 from "@/assets/service6.svg";
import { Icons } from "@/components/Icon";

interface Service {
    name: string;
    sub: string;
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    bgColor: string;
    textColor: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Services: Service[] = [
    {
        name: "Search Engine",
        sub: "Optimization",
        image: Service1,
        bgColor: "#F3F3F3",
        textColor: "#B9FF66",
        icon: Icons.learnMore,
    },
    {
        name: "Pay-per-clicks",
        sub: "About Us",
        image: Service3,
        bgColor: "#B9FF66",
        textColor: "#F3F3F3",
        icon: Icons.learnMore,
    },
    {
        name: "Social Media",
        sub: "Marketing",
        image: Service3,
        bgColor: "#191A23",
        textColor: "#F3F3F3",
        icon: Icons.learnMoore,
    },
    {
        name: "Email",
        sub: "Marketing",
        image: Service4,
        bgColor: "#F3F3F3",
        textColor: "#B9FF66",
        icon: Icons.learnMore,
    },
    {
        name: "Content",
        sub: "Creation",
        image: Service5,
        bgColor: "#B9FF66",
        textColor: "#F3F3F3",
        icon: Icons.learnMore,
    },
    {
        name: "Analytics and",
        sub: "Tracking",
        image: Service6,
        bgColor: "#191A23",
        textColor: "#B9FF66",
        icon: Icons.learnMoore,
    },
];

export default Services;
