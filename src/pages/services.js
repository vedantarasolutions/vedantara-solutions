import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/Services';
import Seo from '../components/seo/Seo';

export default function ServicesPage() {
    const features = [
        {
            heading: "User-Centric Development",
            description: "We prioritize performance, responsiveness, and user experience—whether building web platforms or mobile apps—ensuring every product engages and converts effectively."
        },
        {
            heading: "End-to-End Customization",
            description: "From brand-aligned designs to e-commerce and cloud integrations, we deliver fully customized, scalable solutions tailored to your business goals."
        },
        {
            heading: "Security-First Mindset",
            description: "Security is at the core of our development. We integrate enterprise-grade protections like firewalls, intrusion detection, and encryption right from the start."
        },
        {
            heading: "Future-Ready Infrastructure",
            description: "We leverage cloud platforms like AWS, Azure, and Google Cloud to ensure your solutions are reliable, compliant, and prepared for scale—with full disaster recovery planning and support."
        }
    ];

    return (
        <>
            <Seo
                title="Our Services | Vedantara Solutions"
                description="Explore our comprehensive IT services including web development, app development, network security, and cloud solutions."
                keywords="web development, app development, network security, cloud solutions, IT services"
            />

            <Layout>
                <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Comprehensive IT solutions designed to transform your business and drive growth
                        </p>
                    </div>
                </div>

                <ServicesSection />

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We follow a strategic process to deliver solutions that exceed your expectations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center">{feature.heading}</h3>
                                    <p className="text-gray-600 text-center">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

// import { motion } from 'framer-motion';
// import ServiceCard from '../components/ui/ServiceCard';
// import servicesData from '../data/services';

// const Services = () => {
//     // Animation variants for the container to orchestrate children animations
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1, // Stagger the animation of children
//             },
//         },
//     };

//     // Animation variants for each card
//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//     };

//     return (
//         <section className="py-20 lg:py-32 bg-white relative">
//             {/* Subtle background gradient for depth */}
//             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Premier Services</h2>
//                     <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                         We offer a comprehensive suite of IT services designed to elevate your business to new heights.
//                     </p>
//                 </div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     {servicesData.map((service) => (
//                         <motion.div key={service.title} variants={cardVariants}>
//                             <ServiceCard
//                                 title={service.title}
//                                 description={service.description}
//                                 icon={service.icon}
//                                 link={service.link}
//                             />
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Services;