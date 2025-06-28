import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ContactSection from '../../components/layout/ContactSection/ContactSection';

const CheckIcon = () => (
    <svg
        className="w-6 h-6 text-[#64ffda] mr-3 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const NetworkSecurityPage = () => {
    return (
        <Layout>
            <Head>
                <title>Enterprise Network Security Services | Vedantara Solutions</title>
                <meta
                    name="description"
                    content="Robust network security solutions to protect your business from evolving threats. From firewalls to audits, we secure every layer."
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="bg-[#0a192f] py-24 md:py-32 text-center text-[#e6f1ff] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">
                            Enterprise-Grade Network Security Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-[#a8b2d1] max-w-3xl mx-auto font-body">
                            Defend your digital infrastructure with industry-leading cybersecurity measures, proactive monitoring, and strategic defense systems.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[#f8fbff]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">Comprehensive Security Offerings</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">
                                Your first and last line of defense—secured by experts.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'Vulnerability Assessments & Penetration Testing',
                                    desc: 'Proactively identify and fix potential exploits in your systems before attackers do—with detailed risk reports and fixes.',
                                },
                                {
                                    title: 'Firewall & UTM Implementation',
                                    desc: 'Configure, deploy, and manage NGFWs and UTM appliances to block unwanted traffic and filter known threats in real time.',
                                },
                                {
                                    title: 'Intrusion Detection & Prevention (IDS/IPS)',
                                    desc: 'Detect suspicious behavior instantly and prevent unauthorized access with automated responses and 24/7 surveillance.',
                                },
                                {
                                    title: 'Security Audits & Compliance Support',
                                    desc: 'We help you comply with GDPR, HIPAA, and PCI-DSS, minimizing risk and meeting global regulatory standards.',
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">How We Secure Your Network</h2>
                            <p className="text-xl text-gray-500 mt-2 font-body">A proven methodology for layered protection.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            {[
                                {
                                    step: '01',
                                    title: 'Threat Assessment',
                                    desc: 'Identify all critical vulnerabilities and evaluate the current risk exposure across your systems.',
                                },
                                {
                                    step: '02',
                                    title: 'Defense Strategy',
                                    desc: 'Design and plan a multilayered architecture tailored to your infrastructure and threat model.',
                                },
                                {
                                    step: '03',
                                    title: 'Deployment & Monitoring',
                                    desc: 'Implement solutions such as firewalls, IDS/IPS, and begin 24/7 monitoring of activities.',
                                },
                                {
                                    step: '04',
                                    title: 'Audit & Optimize',
                                    desc: 'Continuously improve security posture through audits, reporting, and performance tuning.',
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
                <ContactSection
                    H2="Ready to Secure Your Network?"
                    Peram="Let’s build a robust security framework that protects your business from evolving threats."
                    ButtonText="Get Started"
                />

            </main>
        </Layout>
    );
};

export default NetworkSecurityPage;
