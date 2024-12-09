interface NavBarLink {
    name: string;
    href: string;
}
const navBarLink: NavBarLink[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About Us",
        href: "#about"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Use Cases",
        href: "#projects"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
    {
        name: "Blog",
        href: "#testimonials"
    },
];

export default navBarLink;