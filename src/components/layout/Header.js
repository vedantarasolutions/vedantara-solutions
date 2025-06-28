import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="w-12 h-12 relative mr-3">
                            <Image
                                src="/logo.png"
                                alt="Vedantara Solutions Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <span className="text-xl font-bold">
                            Vedantara <span className="text-blue-500">Solutions</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                        <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                    </nav>

                    <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                        <Link href="/contact">Get Started</Link>
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-2xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-full">
                                Get Started
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;