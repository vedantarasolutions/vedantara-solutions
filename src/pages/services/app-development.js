
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ContactSection from '../../components/layout/ContactSection/ContactSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#64ffda] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const AppDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Mobile App Development Services | Vedantara Solutions</title>
                <meta
                    name="description"
                    content="Expert iOS, Android, and cross-platform mobile app development. We build intuitive, high-performance applications for an exceptional user experience."
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="bg-[#0a192f] py-24 md:py-32 text-center text-[#e6f1ff] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">Mobile App Development</h1>
                        <p className="text-lg md:text-xl text-[#a8b2d1] max-w-3xl mx-auto font-body">
                            From concept to launch, we build robust, scalable, and beautiful apps that engage users and elevate brands.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[#f8fbff]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our App Development Expertise</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">Seamless experiences across iOS, Android, and more.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'iOS and Android Native Development',
                                    desc: 'Built with Swift & Kotlin for optimal performance and user experience on each platform.',
                                },
                                {
                                    title: 'Cross-Platform with React Native & Flutter',
                                    desc: 'Save time and costs with unified codebases that feel native on both platforms.',
                                },
                                {
                                    title: 'App Store Optimization (ASO)',
                                    desc: 'Boost visibility with keyword strategy, media assets, and store listing optimization.',
                                },
                                {
                                    title: 'Real-Time Analytics & Maintenance',
                                    desc: 'Integrated tracking tools and support services ensure your app performs consistently.',
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

                {/* Tech Stack Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Our Technology Stack</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">Cutting-edge tools for powerful mobile experiences.</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-xl font-semibold text-gray-600">
                            {['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter', 'Firebase', 'GraphQL', 'Node.js', 'MongoDB'].map((tech, index) => (
                                <span key={index} className="bg-[#e6f1ff] py-2 px-4 rounded-xl shadow text-[#0a192f]">{tech}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <ContactSection H2="Got a Great App Idea?" Peram="Let’s build something incredible together. Talk to our app experts and start your journey today." ButtonText="Let’s Build It" />

            </main>
        </Layout>
    );
};

export default AppDevelopmentPage;
