// import Button from '../ui/Button';

// const Hero = () => {
//     return (
//         <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 md:py-32">
//             <div className="absolute inset-0 bg-black/30"></div>
//             <div className="container mx-auto px-4 relative z-10">
//                 <div className="flex flex-col md:flex-row items-center">
//                     <div className="md:w-1/2 mb-12 md:mb-0">
//                         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//                             Transforming Businesses Through <span className="text-blue-400">Innovative IT Solutions</span>
//                         </h1>
//                         <p className="text-xl mb-8 text-gray-200 max-w-2xl">
//                             We provide cutting-edge web development, app development, and security solutions tailored to your business needs.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <Button primary>Our Services</Button>
//                             <Button outline>Contact Us</Button>
//                         </div>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center">
//                         <div className="bg-gray-800/50 border-2 border-blue-500/30 rounded-xl w-full max-w-md p-8">
//                             <div className="grid grid-cols-2 gap-6">
//                                 <div className="bg-blue-900/50 rounded-lg p-6 flex flex-col items-center">
//                                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                                         <span className="text-2xl">💻</span>
//                                     </div>
//                                     <h3 className="text-lg font-bold">Web Development</h3>
//                                 </div>
//                                 <div className="bg-blue-900/50 rounded-lg p-6 flex flex-col items-center">
//                                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                                         <span className="text-2xl">📱</span>
//                                     </div>
//                                     <h3 className="text-lg font-bold">App Development</h3>
//                                 </div>
//                                 <div className="bg-blue-900/50 rounded-lg p-6 flex flex-col items-center">
//                                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                                         <span className="text-2xl">🔒</span>
//                                     </div>
//                                     <h3 className="text-lg font-bold">Security</h3>
//                                 </div>
//                                 <div className="bg-blue-900/50 rounded-lg p-6 flex flex-col items-center">
//                                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                                         <span className="text-2xl">☁️</span>
//                                     </div>
//                                     <h3 className="text-lg font-bold">Cloud Solutions</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// import { useState, useEffect } from 'react';

// const HeroSection = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
//             {/* Animated grid background */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/30"></div>

//                 {/* Floating elements */}
//                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse-slow"></div>
//                 <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] animate-pulse-slow"></div>
//                 <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] animate-pulse-slow"></div>
//             </div>

//             <div className="container mx-auto px-4 relative z-10">
//                 <div className="flex flex-col md:flex-row items-center">
//                     <div className={`md:w-1/2 mb-16 md:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//                             Transforming Businesses Through <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Innovative IT Solutions</span>
//                         </h1>
//                         <p className="text-xl mb-8 text-blue-100 max-w-2xl">
//                             We provide cutting-edge web development, app development, and security solutions tailored to your business needs. Partner with us for digital transformation that drives results.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <button className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
//                                 <span className="relative z-10">Our Services</span>
//                                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                             </button>
//                             <button className="relative bg-transparent border-2 border-blue-400 text-white font-bold py-3 px-8 rounded-full overflow-hidden group transition-all duration-300 hover:border-cyan-400">
//                                 <span className="relative z-10">Contact Us</span>
//                                 <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                             </button>
//                         </div>

//                         <div className="mt-12 flex items-center space-x-6">
//                             <div className="flex items-center space-x-2">
//                                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                                 <span className="text-blue-200 font-medium">24/7 Support</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                                 <span className="text-blue-200 font-medium">Certified Experts</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={`md:w-1/2 flex justify-center transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                         <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-xl shadow-blue-900/20">
//                             <div className="grid grid-cols-2 gap-5">
//                                 {[
//                                     { icon: '💻', title: 'Web Development', desc: 'Modern, responsive websites' },
//                                     { icon: '📱', title: 'App Development', desc: 'iOS & Android applications' },
//                                     { icon: '🔒', title: 'Security', desc: 'Enterprise-grade protection' },
//                                     { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable infrastructure' }
//                                 ].map((service, index) => (
//                                     <div
//                                         key={index}
//                                         className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl p-5 flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/10 group"
//                                     >
//                                         <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
//                                             <span className="text-2xl">{service.icon}</span>
//                                         </div>
//                                         <h3 className="text-lg font-bold mb-1">{service.title}</h3>
//                                         <p className="text-sm text-blue-200 text-center">{service.desc}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
//                                 <div className="flex items-center space-x-2 text-blue-200">
//                                     <div className="flex -space-x-2">
//                                         {[1, 2, 3].map((item) => (
//                                             <div key={item} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-indigo-900"></div>
//                                         ))}
//                                     </div>
//                                     <span className="font-medium">Trusted by 500+ companies</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx global>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.2; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//       `}</style>
//         </section>
//     );
// };

// export default HeroSection;

// src/components/Hero.js

// import { motion } from 'framer-motion';
// import Button from '../ui/Button';

// // Professional SVG Icons (e.g., from Heroicons)
// const CodeBracketIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
//     </svg>
// );

// const DevicePhoneMobileIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
//     </svg>
// );

// const ShieldCheckIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
//     </svg>
// );

// const CloudArrowUpIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3.75 13.5a9 9 0 0116.5 0" />
//     </svg>
// );

// // Data for our service cards
// const services = [
//     { title: 'Web Development', icon: CodeBracketIcon },
//     { title: 'App Development', icon: DevicePhoneMobileIcon },
//     { title: 'Cyber Security', icon: ShieldCheckIcon },
//     { title: 'Cloud Solutions', icon: CloudArrowUpIcon },
// ];

// // Animation variants for Framer Motion
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     }
// };

// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
// };

// const Hero = () => {
//     return (
//         <section className="relative overflow-hidden bg-gray-900 text-white">
//             {/* Animated Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 animate-gradient-xy"></div>
//             <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//             <div className="container relative z-10 mx-auto min-h-screen flex items-center px-6 py-24 md:py-32">
//                 <motion.div
//                     className="flex flex-col md:flex-row items-center justify-between w-full gap-16"
//                     initial="hidden"
//                     animate="visible"
//                     variants={containerVariants}
//                 >
//                     {/* Left Side: Text Content */}
//                     <motion.div className="md:w-3/5 lg:w-1/2 text-center md:text-left" variants={containerVariants}>
//                         <motion.h1
//                             className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
//                             variants={itemVariants}
//                         >
//                             Powering Your Digital Future with <span className="text-blue-400">Innovative Solutions</span>
//                         </motion.h1>
//                         <motion.p
//                             className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10"
//                             variants={itemVariants}
//                         >
//                             We build cutting-edge web & mobile applications and provide robust security to help your business thrive in the digital landscape.
//                         </motion.p>
//                         <motion.div
//                             className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//                             variants={itemVariants}
//                         >
//                             <Button primary>Explore Services</Button>
//                             <Button outline>Get a Quote</Button>
//                         </motion.div>
//                     </motion.div>

//                     {/* Right Side: Service Cards */}
//                     <motion.div className="md:w-2/5 lg:w-1/2 flex justify-center" variants={containerVariants}>
//                         <div className="grid grid-cols-2 gap-4 w-full max-w-md">
//                             {services.map((service, index) => (
//                                 <motion.div
//                                     key={service.title}
//                                     className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 backdrop-blur-md border border-white/10"
//                                     variants={itemVariants}
//                                 >
//                                     {/* Subtle hover glow effect */}
//                                     <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     <div className="relative flex flex-col items-center text-center">
//                                         <div className="mb-4 rounded-full bg-gray-700 p-4 border border-white/10 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
//                                             <service.icon className="h-8 w-8 text-blue-300 group-hover:text-white" />
//                                         </div>
//                                         <h3 className="text-md font-semibold text-white">{service.title}</h3>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Premium SVG Icons with enhanced designs
const CodeBracketIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const DevicePhoneMobileIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);

const ShieldCheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
);

const CloudArrowUpIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
);

// Data for our service cards
const services = [
    { title: 'Web Development', icon: CodeBracketIcon },
    { title: 'App Development', icon: DevicePhoneMobileIcon },
    { title: 'Cyber Security', icon: ShieldCheckIcon },
    { title: 'Cloud Solutions', icon: CloudArrowUpIcon },
];

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const cardHover = {
    scale: 1.05,
    y: -10,
    transition: {
        duration: 0.4,
        ease: "easeOut"
    }
};

const Hero = () => {
    const [isClient, setIsClient] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsClient(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate parallax effect only on client
    const parallaxStyle = isClient ? {
        transform: `translate(
      ${(mousePosition.x / window.innerWidth) * 20 - 10}px, 
      ${(mousePosition.y / window.innerHeight) * 20 - 10}px
    )`
    } : {};

    return (
        <section className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
            {/* Animated Gradient Background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900"
                style={parallaxStyle}
            ></div>

            {/* Animated Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-400/20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() > 0.5 ? 10 : -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>

            <div className="container relative z-10 mx-auto flex items-center px-6 py-24 md:py-32 min-h-screen">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between w-full gap-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Left Side: Text Content */}
                    <motion.div className="md:w-3/5 lg:w-1/2 text-center md:text-left" variants={containerVariants}>
                        <motion.h1
                            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
                            variants={itemVariants}
                        >
                            Powering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Future</span> with Innovative Solutions
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10"
                            variants={itemVariants}
                        >
                            We build cutting-edge web & mobile applications and provide robust security to help your business thrive in the digital landscape.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                            >
                                <Link href="/services">  Explore Services </Link>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 rounded-xl font-bold text-white bg-transparent border-2 border-blue-500/50 hover:border-blue-400 backdrop-blur-sm transition-all duration-300"
                            >
                                <Link href="/contact">    Get a Quote </Link>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Service Cards */}
                    <motion.div className="md:w-2/5 lg:w-1/2 flex justify-center" variants={containerVariants}>
                        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/70 p-6 backdrop-blur-xl border border-white/10 shadow-xl"
                                    variants={itemVariants}
                                    whileHover={cardHover}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {/* Animated border gradient */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-[1]"></div>

                                    {/* Subtle shine effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative flex flex-col items-center text-center">
                                        <div className="mb-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                                            <motion.div
                                                animate={{
                                                    y: [0, -10, 0],
                                                    rotate: [0, 5, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: index * 0.5
                                                }}
                                            >
                                                <service.icon className="h-10 w-10 text-blue-300 group-hover:text-white" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: 1
                }}
            />

            {/* CSS for gradient text animation */}
            <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </section>
    );
};

export default Hero;