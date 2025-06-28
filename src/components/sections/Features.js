import FeatureCard from '../ui/FeatureCard';
import featuresData from '../../data/features';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vedantara Solutions?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We go beyond standard IT services to deliver exceptional value and results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;