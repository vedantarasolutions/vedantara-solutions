import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';


export default function ContactPage() {
    return (
        <>
            <Seo
                title="Contact Us | Vedantara Solutions"
                description="Get in touch with Vedantara Solutions for inquiries, support, or to discuss your IT project requirements."
                keywords="contact, support, inquiry, IT consultation"
            />

            <Layout>
                <motion.div initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }} className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Have a project in mind? Let's discuss how we can help you achieve your goals
                        </p>
                    </div>
                </motion.div>

                <ContactSection />

                {/* <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We serve clients globally with teams across multiple time zones
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { city: "San Francisco", address: "123 Tech Park, Innovation Road, San Francisco, CA 94103" },
                                { city: "New York", address: "456 Digital Avenue, Manhattan, NY 10001" },
                                { city: "London", address: "789 Innovation Hub, Tech Street, London EC1A 1AA" }
                            ].map((location, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold mb-4">{location.city}</h3>
                                    <p className="text-gray-600">{location.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    );
}