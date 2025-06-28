import Link from "next/link";
import Image from "next/image";

// 1. Professional SVG Icons for Social Media
// In a real project, you might import these from a library or a separate file.
const IconFacebook = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);

const IconLinkedIn = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z" />
    </svg>
);

const IconTwitter = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.817-6.044 6.817h-3.308l7.73-8.805-7.73-10.69h6.786l4.713 6.572 5.49-6.572zm-1.161 17.52h1.839l-10.558-14.97h-1.99l10.709 14.97z" />
    </svg>
);

const IconInstagram = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.66-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
    </svg>
);




// 2. All Footer Data in One Place
const footerData = {
    brand: {
        name: "Vedantara",
        slogan: "Solutions",
        description: "We provide cutting-edge IT solutions to help businesses transform and thrive in the digital age.",
    },
    socials: [
        { name: "Facebook", href: "#", icon: IconFacebook },
        { name: "LinkedIn", href: "#", icon: IconLinkedIn },
        { name: "Twitter", href: "#", icon: IconTwitter },
        { name: "Instagram", href: "#", icon: IconInstagram },
    ],
    linkGroups: [
        {
            title: "Our Services",
            links: [
                { label: "Web Development", href: "/services/web-development" },
                { label: "App Development", href: "/services/app-development" },
                { label: "Network Security", href: "/services/network-security" },
                { label: "Cloud Solutions", href: "/services/cloud-solutions" },
                { label: "IT Consulting", href: "/services/it-consulting" },
            ]
        },
        {
            title: "Quick Links",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "FAQ", href: "/faq" },
            ]
        }
    ],
    contactInfo: {
        title: "Contact Info",
        contacts: [
            { icon: "Img/office-building.svg", text: "A-1-B, Suman Nagar, Bandha Dharampura Main Road, KOTA-324005, Rajasthan, India" },
            { icon: "Img/telephone.svg", text: "+91 7727955736", href: "tel:+917727955736" },
            { icon: "/Img/mail-box.svg", text: "info@vedantara.com", href: "mailto:info@vedantara.com" },
            { icon: "/Img/clock.svg", text: "Mon-Fri: 9AM - 6PM" },
        ]
    },
    legal: {
        copyright: `© ${new Date().getFullYear()} Vedantara Solutions. All rights reserved.`,
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Sitemap", href: "/sitemap" },
        ]
    }
};


// 3. The Dynamic Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className=" w-8 h-8 rounded-full mr-3">
                                <img src="/logo.png" alt="Logo" className="w-full h-full rounded-full" />
                            </div>
                            <Link href="/" className="text-xl font-bold">
                                {footerData.brand.name} <span className="text-blue-400">{footerData.brand.slogan}</span>
                            </Link>
                        </div>
                        <p className="text-gray-400 mb-6">
                            {footerData.brand.description}
                        </p>
                        <div className="flex space-x-4">
                            {footerData.socials.map((social) => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                                    className="bg-gray-800 text-gray-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                                    aria-label={social.name}>
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Groups (Services, Quick Links) */}
                    {footerData.linkGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-lg font-bold mb-6">{group.title}</h3>
                            <ul className="space-y-3 text-gray-400">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-blue-400 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">{footerData.contactInfo.title}</h3>
                        <ul className="space-y-4 text-gray-400">
                            {
                                footerData.contactInfo.contacts.map((contact, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <span className="mr-2"><Image src={contact.icon} alt="Call Icon" color="#fff" width={24} height={24} /></span>
                                        {contact.href ? (
                                            <a href={contact.href} className="hover:text-blue-400 transition-colors">
                                                {contact.text}
                                            </a>
                                        ) : (
                                            <span>{contact.text}</span>
                                        )}
                                    </li>
                                ))

                            }
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 mb-4 md:mb-0">
                        {footerData.legal.copyright}
                    </p>
                    <div className="flex space-x-6 text-gray-500">
                        {footerData.legal.links.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;