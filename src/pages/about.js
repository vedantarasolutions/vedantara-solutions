import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';

export default function AboutPage() {
    return (
        <>
            <Seo
                title="About Us | Vedantara Solutions"
                description="Learn about Vedantara Solutions, our mission, values, and the team behind our innovative IT solutions."
                keywords="about us, company, mission, team, IT solutions"
            />

            <Layout>
                <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Driving innovation through technology since 2015
                        </p>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Vedantara Solutions was founded in 2015 with a vision to transform businesses through innovative technology solutions.
                                    What started as a small team of passionate developers has grown into a full-service IT solutions provider serving clients
                                    across various industries.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Over the years, we've helped hundreds of businesses leverage technology to solve complex challenges, improve efficiency,
                                    and drive growth. Our commitment to excellence and customer satisfaction has earned us a reputation as a trusted partner
                                    in the IT industry.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Today, we continue to push the boundaries of what's possible with technology, helping our clients stay ahead in an
                                    increasingly digital world.
                                </p>
                            </div>
                            <div className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Innovation", description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions." },
                                { title: "Excellence", description: "We strive for perfection in everything we do, delivering quality that exceeds expectations." },
                                { title: "Integrity", description: "We build trust through transparency, honesty, and ethical business practices." }
                            ].map((value, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}