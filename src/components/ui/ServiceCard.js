import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, benefits, link }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
            <div className="p-6 h-full flex flex-col">
                {/* Icon Centered and Size Fixed */}
                <div className="flex justify-center items-center mb-4">
                    <Image src={icon} alt={title} width={80} height={80} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
                <p className="text-gray-600 mb-5 flex-grow text-center">{description}</p>

                <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold mb-3 text-blue-600">What you get:</h4>
                    <ul className="space-y-2">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors self-start">
                    <Link href={link}>Learn more →</Link>
                </button>
            </div>
        </div>

    );
};

export default ServiceCard;

// import Link from 'next/link';

// // --- Professional SVG Icons ---
// // It's best practice to put these in their own files, but we define them here for simplicity.
// const IconCode = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
//     </svg>
// );
// const IconDevicePhoneMobile = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
//     </svg>
// );
// const IconShieldCheck = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
//     </svg>
// );
// const IconCloud = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3.75 3.75M12 9.75l-3.75 3.75M3.75 13.5a9 9 0 0 1 16.5 0" />
//     </svg>
// );

// const icons = {
//     IconCode,
//     IconDevicePhoneMobile,
//     IconShieldCheck,
//     IconCloud,
// };

// const ServiceCard = ({ title, description, icon, link }) => {
//     const IconComponent = icons[icon];

//     return (
//         <Link href={link} className="group block rounded-xl h-full">
//             <div className="relative flex flex-col items-start justify-between h-full p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2">
//                 <div>
//                     <div className="mb-6 inline-block p-4 bg-blue-100 rounded-xl transition-colors duration-300 group-hover:bg-blue-500">
//                         {IconComponent && <IconComponent className="h-8 w-8 text-blue-500 transition-colors duration-300 group-hover:text-white" />}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
//                         {title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed flex-grow">
//                         {description}
//                     </p>
//                 </div>
//                 <div className="mt-6 flex items-center font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                     Learn more
//                     <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default ServiceCard;