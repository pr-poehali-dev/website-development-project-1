import AcademicLayout from "@/components/AcademicLayout";
import SectionCard from "@/components/SectionCard";

const Group = () => {
  const groupStats = [
    { label: "Студентов в группе", value: "25", color: "blue" },
    { label: "Средний балл", value: "4.2", color: "green" },
    { label: "Активных проектов", value: "8", color: "purple" },
    { label: "Курс обучения", value: "3", color: "orange" },
  ];

  return (
    <AcademicLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Моя группа</h1>
          <p className="text-gray-600">
            Информация о студенческой группе и сокурсниках
          </p>
        </div>

        <SectionCard title="Общая информация о группе">
          <div className="grid md:grid-cols-4 gap-4">
            {groupStats.map((stat) => (
              <div
                key={stat.label}
                className={`bg-${stat.color}-50 p-4 rounded-lg text-center`}
              >
                <div
                  className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Староста группы">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">[Имя старосты]</h3>
                <p className="text-gray-600">Староста группы</p>
                <p className="text-sm text-gray-500">
                  Ответственный за организацию учебного процесса
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Куратор группы">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">[Имя куратора]</h3>
                <p className="text-gray-600">Кандидат наук, доцент</p>
                <p className="text-sm text-gray-500">
                  Научный руководитель группы
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Активные проекты">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                Научно-исследовательский проект
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Исследование в области [тема исследования] под руководством
                профессора [имя].
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Участников: 8</span>
                <span>Статус: В процессе</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                Курсовая работа
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Групповая курсовая работа по теме [название темы].
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Участников: 5</span>
                <span>Статус: Защита в мае</span>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Расписание занятий">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3">Время</th>
                  <th className="text-left py-2 px-3">Понедельник</th>
                  <th className="text-left py-2 px-3">Вторник</th>
                  <th className="text-left py-2 px-3">Среда</th>
                  <th className="text-left py-2 px-3">Четверг</th>
                  <th className="text-left py-2 px-3">Пятница</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium">9:00-10:30</td>
                  <td className="py-2 px-3">Математика</td>
                  <td className="py-2 px-3">Физика</td>
                  <td className="py-2 px-3">Программирование</td>
                  <td className="py-2 px-3">Английский</td>
                  <td className="py-2 px-3">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium">10:45-12:15</td>
                  <td className="py-2 px-3">Лекция</td>
                  <td className="py-2 px-3">Семинар</td>
                  <td className="py-2 px-3">Лабораторная</td>
                  <td className="py-2 px-3">Семинар</td>
                  <td className="py-2 px-3">Факультатив</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">13:00-14:30</td>
                  <td className="py-2 px-3">—</td>
                  <td className="py-2 px-3">Лекция</td>
                  <td className="py-2 px-3">—</td>
                  <td className="py-2 px-3">Практика</td>
                  <td className="py-2 px-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </AcademicLayout>
  );
};

export default Group;
