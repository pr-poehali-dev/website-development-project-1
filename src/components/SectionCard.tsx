interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionCard = ({ title, children, className = "" }: SectionCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b border-gray-100 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionCard;
