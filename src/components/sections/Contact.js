import ContactForm from '../ui/ContactForm';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="mb-8 text-blue-100">
                                Have a project in mind? Let's discuss how we can help you achieve your business goals with our IT solutions.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="text-xl mr-4"><Image src="Img/telephone.svg" alt="phone" width={24} height={24} /> </div>
                                    <div>
                                        <h3 className="font-bold">Phone</h3>
                                        <p>+91-7727955736</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-xl mr-4"><Image src="Img/mail-box.svg" alt="phone" width={24} height={24} /></div>
                                    <div>
                                        <h3 className="font-bold">Email</h3>
                                        <p>info@vedantara.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-xl mr-4"><Image src="Img/office-building.svg" alt="phone" width={24} height={24} /></div>
                                    <div>
                                        <h3 className="font-bold"> Address</h3>
                                        <p>A-1-B, Suman Nagar, Bandha Dharampura Main Road<br />KOTA-324005, Rajasthan, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex space-x-4">
                                <button className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                                    <span>f</span>
                                </button>
                                <button className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                                    <span>in</span>
                                </button>
                                <button className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                                    <span>t</span>
                                </button>
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;