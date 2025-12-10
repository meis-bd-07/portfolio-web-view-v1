import { allBlogs } from '@/constants/left-sidebar';
import { Calendar, ExternalLink } from 'lucide-react';

export default function AllBlogs() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative border-l border-gray-300 dark:border-gray-700">
        {allBlogs.map((item, index) => {
          if(!item.show) return null;
          return (
            <div key={index} className="mb-10 ml-6" id={index.toString()}>
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <Calendar height={15} width={15} />
              </span>

              <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.date}
                </p>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-gray-400 font-medium cursor-not-allowed pointer-events-none"
                >
                    Read More <ExternalLink height={14} width={14} className="ml-1" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
