import Link from 'next/link';

const Button = ({
    children,
    primary = false,
    outline = false,
    className = '',
    href,
    onClick
}) => {
    const baseClasses = "px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300";

    let variantClasses = "";
    if (primary) {
        variantClasses = "bg-blue-600 hover:bg-blue-700 text-white";
    } else if (outline) {
        variantClasses = "bg-transparent border-2 border-white hover:bg-white/10 text-white";
    } else {
        variantClasses = "bg-gray-800 hover:bg-gray-700 text-white";
    }

    const allClasses = `${baseClasses} ${variantClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} className={allClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={allClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;