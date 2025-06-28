
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import ContactSection from '../../components/layout/ContactSection/ContactSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#64ffda] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const CloudSolutionsPage = () => {
    return (
        <Layout>
            <Head>
                <title>Cloud Solutions & Services | Vedantara Solutions</title>
                <meta
                    name="description"
                    content="Leverage the power of the cloud with our expert services in AWS, Azure, and Google Cloud. We offer secure migration, deployment, and management."
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="bg-[#0a192f] py-24 md:py-32 text-center text-[#e6f1ff] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">Scalable Cloud Solutions</h1>
                        <p className="text-lg md:text-xl text-[#a8b2d1] max-w-3xl mx-auto font-body">
                            Unlock agility, scalability, and efficiency by migrating your infrastructure to the cloud. We make your transition seamless, secure, and cost-effective.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[#f8fbff]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our Cloud Capabilities</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">Harness the full potential of the cloud with our expertise.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'AWS, Azure & Google Cloud Experts',
                                    desc: 'We guide you in choosing the best cloud platform and services, ensuring top-tier performance and cost-efficiency.',
                                },
                                {
                                    title: 'Cloud Migration & Modernization',
                                    desc: 'We plan and execute smooth migrations and modernize legacy systems with containers and serverless architectures.',
                                },
                                {
                                    title: 'DevOps & Automation',
                                    desc: 'From CI/CD pipelines to Infrastructure as Code, we speed up your deployment cycle while maintaining stability.',
                                },
                                {
                                    title: 'Disaster Recovery & Continuity',
                                    desc: 'Resilient cloud-based solutions to safeguard your data and operations in case of failures or disruptions.',
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

                {/* CTA Section */}
                <ContactSection H2="Ready to Ascend to the Cloud?" Peram="Let us guide your journey to a more flexible, secure, and powerful infrastructure." ButtonText="Plan Your Cloud Strategy" />

            </main>
        </Layout>
    );
};

export default CloudSolutionsPage;
