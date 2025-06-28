import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ContactSection from '../../components/layout/ContactSection/ContactSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#64ffda] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const ItConsultingPage = () => {
    return (
        <Layout>
            <Head>
                <title>Strategic IT Consulting Services | Vedantara Solutions</title>
                <meta
                    name="description"
                    content="Expert IT consulting to align your technology with your business goals. We provide strategic roadmaps, digital transformation guidance, and cost optimization."
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="bg-[#0a192f] py-24 md:py-32 text-center text-[#e6f1ff] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">
                            Strategic IT Consulting to Navigate Your Digital Future
                        </h1>
                        <p className="text-lg md:text-xl text-[#a8b2d1] max-w-3xl mx-auto font-body">
                            We bridge the gap between your business objectives and technology, providing expert guidance to optimize your IT infrastructure, streamline operations, and drive innovation.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[#f8fbff]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our Core Consulting Areas</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">
                                Expert advice to solve your most complex challenges.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'IT Strategy & Roadmap',
                                    desc: 'We work with your leadership to develop a clear and actionable technology roadmap aligned with your long-term goals.',
                                },
                                {
                                    title: 'Digital Transformation Guidance',
                                    desc: 'We guide you through adopting new technologies, automating processes, and building an innovation-focused culture.',
                                },
                                {
                                    title: 'Infrastructure & Cost Optimization',
                                    desc: 'We audit your current setup, eliminate inefficiencies, and recommend scalable, cost-effective solutions.',
                                },
                                {
                                    title: 'Technology & Vendor Selection',
                                    desc: 'We help you choose the best-fit solutions and vendors tailored to your operational, financial, and technical needs.',
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

                {/* Our Approach Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our Consulting Approach</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">A partnership built on clarity and results.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            {[
                                {
                                    step: '01',
                                    title: 'Assessment & Analysis',
                                    desc: 'We begin with a deep dive into your current state, processes, and pain points.',
                                },
                                {
                                    step: '02',
                                    title: 'Strategy Development',
                                    desc: 'We craft a tailored strategic plan with clear, measurable objectives and timelines.',
                                },
                                {
                                    step: '03',
                                    title: 'Implementation Support',
                                    desc: 'We support your internal team through change implementation and adoption.',
                                },
                                {
                                    step: '04',
                                    title: 'Evaluation & Improvement',
                                    desc: 'We track results, gather feedback, and provide guidance for continuous refinement.',
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-[#f1faff] rounded-2xl shadow-md hover:shadow-xl transition-all">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <ContactSection H2="Ready to Align Your Technology with Your Ambition?" Peram="Let's build a technology strategy that fuels your growth and gives you a competitive edge." ButtonText="Book a Strategic Session" />

            </main>
        </Layout>
    );
};

export default ItConsultingPage;
