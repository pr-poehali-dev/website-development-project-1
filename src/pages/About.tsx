import AcademicLayout from "@/components/AcademicLayout";
import SectionCard from "@/components/SectionCard";

const About = () => {
  const skills = [
    { name: "Математический анализ", level: 85 },
    { name: "Программирование", level: 75 },
    { name: "Физика", level: 80 },
    { name: "Английский язык", level: 70 },
  ];

  return (
    <AcademicLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Обо мне</h1>
          <p className="text-gray-600">
            Личная информация и академические достижения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Личная информация">
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>Имя:</strong> Влад
                </p>
                <p>
                  <strong>Возраст:</strong> 16 лет
                </p>
                <p>
                  <strong>Специальность:</strong> специалист по компьютерным
                  сетям и комплексам
                </p>
                <p>
                  <strong>Курс:</strong> 1 курс
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Образование">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-800">
                  Высшее образование
                </h3>
                <p className="text-gray-600">2020 - настоящее время</p>
                <p className="text-sm text-gray-500">
                  Московский государственный университет им. М.В. Ломоносова
                  <br />
                  Факультет: Вычислительной математики и кибернетики
                  <br />
                  Специальность: Прикладная математика и информатика
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold text-slate-800">
                  Среднее образование
                </h3>
                <p className="text-gray-600">2018 - 2020</p>
                <p className="text-sm text-gray-500">
                  Лицей №1535 г. Москвы
                  <br />
                  Профиль: Физико-математический
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Навыки и компетенции">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Достижения">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 p-2 rounded-full">
                <span className="text-yellow-600">🏆</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Призёр олимпиады
                </h3>
                <p className="text-gray-600">
                  3 место в региональной олимпиаде по математике
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600">📚</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Стипендиат</h3>
                <p className="text-gray-600">
                  Повышенная академическая стипендия
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </AcademicLayout>
  );
};

export default About;
