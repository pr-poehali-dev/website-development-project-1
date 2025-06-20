import AcademicLayout from "@/components/AcademicLayout";
import SectionCard from "@/components/SectionCard";

const Institute = () => {
  return (
    <AcademicLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Мой институт
          </h1>
          <p className="text-gray-600">Информация об учебном заведении</p>
        </div>

        <SectionCard title="Общая информация">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800">
                Основные сведения
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Название:</strong> [Название университета]
                </p>
                <p>
                  <strong>Тип:</strong> Государственный университет
                </p>
                <p>
                  <strong>Основан:</strong> [Год основания]
                </p>
                <p>
                  <strong>Местоположение:</strong> [Город, страна]
                </p>
                <p>
                  <strong>Студентов:</strong> [Количество студентов]
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800">Рейтинги</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Национальный рейтинг</span>
                  <span className="font-semibold text-blue-600">#15</span>
                </div>
                <div className="flex justify-between">
                  <span>Международный рейтинг</span>
                  <span className="font-semibold text-blue-600">#450</span>
                </div>
                <div className="flex justify-between">
                  <span>По специальности</span>
                  <span className="font-semibold text-blue-600">#8</span>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Мой факультет">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800">
                [Название факультета]
              </h3>
              <p className="text-gray-600">
                Факультет специализируется на подготовке высококвалифицированных
                специалистов в области [область специализации].
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-700">Кафедры:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Кафедра [название]</li>
                  <li>• Кафедра [название]</li>
                  <li>• Кафедра [название]</li>
                  <li>• Кафедра [название]</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Инфраструктура">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Учебных корпусов</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Общежитий</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Лабораторий</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-gray-600">Библиотеки</div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="История и традиции">
          <div className="space-y-4">
            <p className="text-gray-700">
              [Название университета] является одним из ведущих учебных
              заведений страны с богатой историей и традициями. Университет
              известен своими достижениями в области науки и образования.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  <span className="text-3xl">🎓</span>
                </div>
                <h4 className="font-semibold text-slate-800">Выпускники</h4>
                <p className="text-sm text-gray-600">
                  Более 100,000 выпускников
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-2">
                  <span className="text-3xl">🔬</span>
                </div>
                <h4 className="font-semibold text-slate-800">Исследования</h4>
                <p className="text-sm text-gray-600">
                  50+ исследовательских центров
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-2">
                  <span className="text-3xl">🌍</span>
                </div>
                <h4 className="font-semibold text-slate-800">
                  Международность
                </h4>
                <p className="text-sm text-gray-600">Партнёры в 30+ странах</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </AcademicLayout>
  );
};

export default Institute;
