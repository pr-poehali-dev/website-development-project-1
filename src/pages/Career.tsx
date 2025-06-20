import AcademicLayout from "@/components/AcademicLayout";
import SectionCard from "@/components/SectionCard";

const Career = () => {
  const careerGoals = [
    { period: "Ближайшие 2 года", goal: "Завершение обучения с отличием" },
    { period: "3-5 лет", goal: "Получение опыта работы в ведущих компаниях" },
    { period: "5-10 лет", goal: "Руководящая позиция в IT-компании" },
    { period: "Долгосрочно", goal: "Собственный стартап в области технологий" },
  ];

  return (
    <AcademicLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Моя будущая карьера
          </h1>
          <p className="text-gray-600">
            Профессиональные планы и цели развития
          </p>
        </div>

        <SectionCard title="Карьерные цели">
          <div className="space-y-4">
            {careerGoals.map((goal, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">
                    {goal.period}
                  </h3>
                  <p className="text-gray-600">{goal.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Интересующие отрасли">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600">💻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Информационные технологии
                  </h3>
                  <p className="text-sm text-gray-600">
                    Разработка ПО, системы управления
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Научные исследования
                  </h3>
                  <p className="text-sm text-gray-600">
                    Прикладная математика, моделирование
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-600">🏢</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Консалтинг</h3>
                  <p className="text-sm text-gray-600">
                    Аналитика, стратегическое планирование
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Целевые компании">
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-3">
                <h3 className="font-semibold text-slate-800">
                  Крупные IT-компании
                </h3>
                <p className="text-sm text-gray-600">
                  Яндекс, Mail.ru, Сбербанк
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h3 className="font-semibold text-slate-800">
                  Международные корпорации
                </h3>
                <p className="text-sm text-gray-600">
                  Google, Microsoft, Amazon
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h3 className="font-semibold text-slate-800">Стартапы</h3>
                <p className="text-sm text-gray-600">
                  Перспективные технологические компании
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="План развития навыков">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">
                Технические навыки
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Изучение новых языков программирования</li>
                <li>• Углубление в машинное обучение</li>
                <li>• Освоение облачных технологий</li>
                <li>• Изучение DevOps практик</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Soft skills</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Развитие лидерских качеств</li>
                <li>• Улучшение коммуникативных навыков</li>
                <li>• Управление проектами</li>
                <li>• Презентационные навыки</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Образование</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Магистратура по специальности</li>
                <li>• Онлайн-курсы и сертификации</li>
                <li>• Участие в конференциях</li>
                <li>• Изучение бизнес-процессов</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Планируемые достижения">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">
                  Краткосрочные (1-2 года)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Диплом с отличием
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Стажировка в IT-компании
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Публикация научной статьи
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">
                  Среднесрочные (3-5 лет)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Позиция Senior Developer
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Руководство командой
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Участие в крупных проектах
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </AcademicLayout>
  );
};

export default Career;
