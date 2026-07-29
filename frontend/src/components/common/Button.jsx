function Button({
  href,
  children,
  variant = "primary",
}) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition";

  const variants = {
    primary: "bg-black text-white",
    secondary: "border border-black text-black",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;