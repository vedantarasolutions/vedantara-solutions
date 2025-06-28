import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);

        // Simulate submission delay & show success
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', tel: '', service: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 9000);
        }, 1500);
    };

    return (
        <>
            {/* Hidden iframe to avoid reload/CORS */}
            <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe" />

            <form
                className="space-y-4"
                onSubmit={handleSubmit}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScZ6MsizaKRh0BrWCfKQBKyGikM5zbHkloNS8VGR21fiXRZaQ/formResponse"
                method="POST"
                target="hidden_iframe"
            >
                {submitSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
                {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        There was an error submitting your message. Please try again.
                    </div>
                )}

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="entry.1484923409"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="entry.677503040"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="tel">Mobile Number</label>
                    <input
                        type="tel"
                        id="tel"
                        name="entry.1661547970"
                        value={formData.tel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123‑456‑7890"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="service">Service Interest</label>
                    <select
                        id="service"
                        name="entry.1934228531_sentinel"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="security">Network Security</option>
                        <option value="cloud">Cloud Solutions</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="entry.1934228531_sentinel"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
