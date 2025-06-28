import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ContactSection from '../../components/layout/ContactSection/ContactSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#64ffda] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const WebDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Custom Web Development Services | Vedantara Solutions</title>
                <meta
                    name="description"
                    content="Crafting high-performance, responsive, and SEO-optimized websites tailored to your brand. Scalable e-commerce, custom UI, and lasting support by Vedantara Solutions."
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="bg-[#0a192f] text-[#e6f1ff] py-24 md:py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">Custom Web Development</h1>
                        <p className="text-lg md:text-xl text-[#a8b2d1] max-w-3xl mx-auto font-body">
                            Build blazing-fast, scalable, and stunning websites that reflect your brand and drive real results.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[#f8fbff]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">What We Deliver</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">Your business goals. Our web development toolkit.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'Custom Designs Tailored to Your Brand',
                                    desc: 'No templates. Just bold, unique, intuitive UI/UX experiences crafted for your audience.',
                                },
                                {
                                    title: 'SEO-Optimized Architecture',
                                    desc: 'Structured for speed, accessibility, and ranking — the foundation of digital visibility.',
                                },
                                {
                                    title: 'E-commerce Integration',
                                    desc: 'Whether it’s Shopify, WooCommerce, or custom, we build conversion-ready online stores.',
                                },
                                {
                                    title: 'Ongoing Maintenance and Support',
                                    desc: 'Post-launch peace of mind — updates, security, backups, and performance monitoring.',
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                    <CheckIcon />
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-[#112240]">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our Development Process</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">Clear, collaborative, and proven for performance.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            {[
                                ['01', 'Discovery & Strategy', 'We dive deep into your goals, market, and audience to define the right approach.'],
                                ['02', 'Design & Prototyping', 'Interactive wireframes and design previews built with your feedback.'],
                                ['03', 'Development & Testing', 'Fast, scalable code with robust testing across devices.'],
                                ['04', 'Launch & Training', 'Deployment with guidance and documentation to empower your team.'],
                            ].map(([step, title, desc]) => (
                                <div key={step} className="bg-[#e6f1ff] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div className="text-3xl font-bold text-[#00c9ff] mb-2">{step}</div>
                                    <h4 className="text-xl font-semibold mb-2 text-[#112240]">{title}</h4>
                                    <p className="text-[#394b63]">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Tech Stack Section */}

                <ContactSection H2={"Ready to Build Your Digital Presence?"} Peram={"Let’s collaborate on a website that’s beautiful, functional, and built to scale with your business."} ButtonText={"Request a Consultation"} />

            </main>
        </Layout>
    );
};

export default WebDevelopmentPage;
