import { educations } from '@/constants/experiences';

export default function EducationTimeline() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative border-l border-gray-300 dark:border-gray-700">
        {educations.map((item, index) => (
          <div key={index} className="mb-10 ml-6" id={index.toString()}>
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <img src={item.url} alt={item.company} height={15} width={15} />
            </span>

            <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {item.position}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.company},{item.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
