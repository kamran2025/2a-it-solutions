

export default function Button({ className, value }: { className?: string, value: string }) {
  const defaultClasses = "px-4 py-3 bg-white text-neutral-700 text-sm  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200";

  return (
    <div>
      <button className={className ? `${defaultClasses} ${className}` : defaultClasses}>
        {value}
      </button>
    </div>
  );
}



