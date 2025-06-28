// import processData from '../../data/process';

// const Process = () => {
//     return (
//         <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         A structured approach to delivering successful IT solutions
//                     </p>
//                 </div>

//                 <div className="relative">
//                     {/* Timeline line */}
//                     <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 top-0"></div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                         {processData.map((step, index) => (
//                             <div
//                                 key={step.id}
//                                 className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'
//                                     }`}
//                             >
//                                 {/* Timeline dot */}
//                                 <div className="hidden md:block absolute top-8 w-6 h-6 bg-blue-500 rounded-full z-10"
//                                     style={{
//                                         left: index % 2 === 0 ? 'calc(50% - 0.75rem)' : 'calc(-1.5rem)',
//                                     }}
//                                 ></div>

//                                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
//                                     <div className="text-4xl mb-4">{step.icon}</div>
//                                     <h3 className="text-xl font-bold mb-3">{step.title}</h3>
//                                     <p className="text-gray-600">{step.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Process;

// src/components/Process.js

import { motion } from 'framer-motion';
import { Fragment } from 'react';

// --- Professional SVG Icons ---
// It's best to keep these in their own files, but for this example, they are here.
const IconMagnifyingGlass = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);
const IconClipboardList = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h.75v.75h-.75V7.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a2.25 2.25 0 0 1 2.25-2.25h8.25a2.25 2.25 0 0 1 2.25 2.25v9.75a2.25 2.25 0 0 1-2.25 2.25H7.5a2.25 2.25 0 0 1-2.25-2.25V6.375Z" />
    </svg>
);
const IconCode = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);
const IconRocketLaunch = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 0-5.84 0m5.84 0a12.022 12.022 0 0 1-5.84 0M12 12a6 6 0 0 0-6 6v4.82A6 6 0 0 0 12 21.18a6 6 0 0 0 6-6v-4.82A6 6 0 0 0 12 12Zm0-12a12.022 12.022 0 0 0-5.84 0M12 0a12.022 12.022 0 0 1-5.84 0M12 0a12.022 12.022 0 0 1 5.84 0m-5.84 0a12.022 12.022 0 0 0 5.84 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.37 21.18-2.74-4.82-2.74 4.82m5.48 0a6 6 0 0 0-5.48 0M12 12a6 6 0 0 0-6 6v4.82a6 6 0 0 0 6-6v-4.82a6 6 0 0 0-6 6v4.82" />
    </svg>
);

// --- Sample Data (Update your data file to look like this) ---
const processData = [
    { id: 1, title: 'Discovery & Strategy', description: 'We start by understanding your goals, audience, and market to build a strategic plan.', icon: IconMagnifyingGlass },
    { id: 2, title: 'Design & Prototyping', description: 'We create wireframes and high-fidelity mockups for your approval before writing a single line of code.', icon: IconClipboardList },
    { id: 3, title: 'Development & Testing', description: 'Our developers bring the design to life, followed by rigorous testing for quality assurance.', icon: IconCode },
    { id: 4, title: 'Deployment & Launch', description: 'We handle the seamless launch of your project and provide training and support for your team.', icon: IconRocketLaunch },
];


const Process = () => {
    // Animation variants for Framer Motion
    const cardVariants = (fromLeft = true) => ({
        hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    });

    return (
        <section className="py-20 lg:py-30 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Proven Process</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        A structured approach to guarantee successful outcomes and deliver excellence at every step.
                    </p>
                </div>

                <div className="relative">
                    {/* The timeline line for desktop */}
                    <div className="hidden md:block absolute top-4 left-1/2 w-1 h-full bg-gradient-to-b from-blue-100 via-blue-200 to-transparent -translate-x-1/2"></div>

                    {processData.map((step, index) => (
                        <Fragment key={step.id}>
                            <motion.div
                                className="relative md:flex md:items-center mb-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants(index % 2 === 0)}
                            >
                                {/* The timeline line for mobile */}
                                <div className="md:hidden absolute top-0 left-5 w-1 h-full bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>

                                {/* Timeline Dot */}
                                <div className="absolute top-4 w-10 h-10 bg-white border-4 border-blue-500 rounded-full z-10 flex items-center justify-center 
                                               left-1/2 -translate-x-1/2 
                                               md:left-auto md:translate-x-0 
                                               md:right-[calc(50%-1.25rem)]
                                               group-[.is-right]:left-[calc(50%-1.25rem)] group-[.is-right]:right-auto">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>

                                {/* Card Content */}
                                <div className={`w-full md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 transition-all duration-300 hover:shadow-blue-200/50 hover:border-blue-300 hover:-translate-y-1
                                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`
                                }>
                                    <div className="relative z-10">
                                        <div className="mb-4">
                                            <step.icon className="w-12 h-12 text-blue-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                    {/* Background Step Number */}
                                    <div className="absolute -top-4 -right-2 text-8xl font-extrabold text-gray-100 -z-0 opacity-80 select-none">
                                        0{step.id}
                                    </div>
                                </div>
                            </motion.div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;