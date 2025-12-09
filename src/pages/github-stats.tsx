import { Star, GitCommit, GitFork, Users } from "lucide-react";

export default function GithubStats() {
  const stats = [
    {
      icon: <Star className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
      label: "stars",
      value: "261",
    },
    {
      icon: <GitCommit className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
      label: "commits",
      value: "5.42K",
    },
    {
      icon: <GitFork className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
      label: "repositories forks",
      value: "24",
    },
    {
      icon: <Users className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
      label: "Github followers",
      value: "586",
    },
  ];

  return (
    <div className="w-full py-2 pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800 dark:text-gray-200">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 group"
          >
            <span className="font-semibold text-base opacity-100 mr-1">
                {item.value}
              </span>
            <p className="flex flex-row gap-1 text-sm opacity-80">
                <span className="opacity-80 group-hover:opacity-100 transition">
                    {item.icon}
                </span>
                {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
