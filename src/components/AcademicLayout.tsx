import Navigation from "./Navigation";

interface AcademicLayoutProps {
  children: React.ReactNode;
}

const AcademicLayout = ({ children }: AcademicLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default AcademicLayout;
