import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "Обо мне" },
    { href: "/institute", label: "Мой институт" },
    { href: "/group", label: "Моя группа" },
    { href: "/career", label: "Моя карьера" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-slate-800">
            Академическое портфолио
          </div>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
