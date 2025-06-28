import ServiceCard from '../ui/ServiceCard';
import servicesData from '../../data/services';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premier Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of IT services designed to elevate your business to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
              link={service.link} // Assuming each service has a link to its details page
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;