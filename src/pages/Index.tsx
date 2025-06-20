import AcademicLayout from "@/components/AcademicLayout";
import SectionCard from "@/components/SectionCard";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sections = [
    {
      title: "Обо мне",
      description: "Личная информация, образование и навыки",
      href: "/about",
      icon: "User",
    },
    {
      title: "Мой институт",
      description: "Информация об учебном заведении",
      href: "/institute",
      icon: "School",
    },
    {
      title: "Моя группа",
      description: "Данные о группе и сокурсниках",
      href: "/group",
      icon: "Users",
    },
    {
      title: "Моя карьера",
      description: "Планы профессионального развития",
      href: "/career",
      icon: "Briefcase",
    },
  ];

  return (
    <AcademicLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Академическое портфолио
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Добро пожаловать в моё академическое портфолио. Здесь представлена
          информация о моём образовании, достижениях и планах на будущее.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            to={section.href}
            className="block transition-transform hover:scale-105"
          >
            <SectionCard title={section.title}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Icon
                    name={section.icon}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <p className="text-gray-600">{section.description}</p>
                  <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
                    Подробнее →
                  </span>
                </div>
              </div>
            </SectionCard>
          </Link>
        ))}
      </div>
    </AcademicLayout>
  );
};

export default Index;
