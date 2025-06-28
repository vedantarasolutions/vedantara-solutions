import testimonialsData from '../../data/testimonials';
import { generateStarRating } from '../../utils/helpers';

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        What our clients say about working with us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.position}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                {generateStarRating(testimonial.rating)}
                            </div>

                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;