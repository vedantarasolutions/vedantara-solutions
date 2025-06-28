import Image from "next/image";
const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 h-full">
            {/* Center Icon */}
            <div className="flex justify-center items-center mb-4">
                <Image src={icon} alt={title} width={80} height={80} />
            </div>

            {/* Center Title */}
            <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>

            {/* Optional: Center text or keep left-aligned */}
            <p className="text-blue-100 text-center">{description}</p>
        </div>

    );
};

export default FeatureCard;