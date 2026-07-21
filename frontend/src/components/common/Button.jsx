function Button({
    children,
    type = "button",
    variant = "primary",
    fullWidth = false,
    disabled = false,
    loading = false,
    onClick,
    className = "",
}) {
    const variants = {
        primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        danger: "bg-red-600 hover:bg-red-700 text-white",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        px-5
        py-3
        rounded-lg
        font-semibold
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
    `}
        >
            {loading ? "Please wait..." : children}
        </button>
    );
}

export default Button;