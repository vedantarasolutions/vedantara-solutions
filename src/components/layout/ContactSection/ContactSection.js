import React from 'react';
import QuestionsQoin from './QuestionsQoin';
import SectionQuestionsBg from './SectionQuestionsBg';
import Link from 'next/link';

const ContactSection = ({ H2, Peram, ButtonText }) => {
    return (
        <section className="relative bg-gradient-to-r from-[#112240] to-[#0a192f] py-20 text-center text-[#e6f1ff] overflow-hidden">
            {/* Decorative coin */}
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                <QuestionsQoin />
            </div>

            {/* Wave background at the bottom */}
            <div className="absolute bottom-0 left-0 w-full">
                <SectionQuestionsBg />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                    {/* Ready to Build Your Digital Presence? */}
                    {H2}
                </h2>
                <p className="text-lg text-[#a8b2d1] mb-10 max-w-2xl mx-auto font-body">
                    {/* Let’s collaborate on a website that’s beautiful, functional, and built to scale with your business. */}
                    {Peram}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                    <a href="tel:+18001234567" className="block">
                        <div className="bg-[#0a192f] border border-[#64ffda] rounded-lg p-6 hover:bg-[#112240] transition-all cursor-pointer">
                            <div className="text-[#64ffda] font-bold text-xl mb-3">CALL US</div>
                            <div className="text-sm">+91 7727955736</div>
                        </div>
                    </a>

                    <a href="mailto:contact@yourcompany.com" className="block">
                        <div className="bg-[#0a192f] border border-[#64ffda] rounded-lg p-6 hover:bg-[#112240] transition-all cursor-pointer">
                            <div className="text-[#64ffda] font-bold text-xl mb-3">EMAIL US</div>
                            <div className="text-sm">info@vedantara.com</div>
                        </div>
                    </a>


                    <div className="bg-[#0a192f] border border-[#64ffda] rounded-lg p-6 hover:bg-[#112240] transition-all">
                        <div className="text-[#64ffda] font-bold text-xl mb-3"><Link href="/contact">GET QUOTE NOW</Link></div>
                        <div className="text-sm"><Link href="/contact">Custom solutions for your needs</Link></div>
                    </div>
                </div>

                <button className="bg-[#64ffda] hover:bg-[#00c9ff] text-[#0a192f] font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-300">
                    {ButtonText}
                </button>
            </div>
        </section>
    );
};

export default ContactSection;

