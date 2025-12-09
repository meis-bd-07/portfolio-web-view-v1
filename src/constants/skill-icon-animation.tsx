import { Cloud } from "react-icon-cloud";
import { skills } from "./skills";

export default function SkillCloud() {

  return (
    <section className="py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Skills & Technologies
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
        A rotating cloud of the technologies I use.
      </p>

      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] select-none">
        <Cloud
          options={{
            dragControl: true,
            fadeIn: 1000,
            depth: 1,
            wheelZoom: false,
          }}
        >
          {skills.map((skill, i) => (
            <span
              key={i}
              className="text-3xl hover:scale-125 transition-transform cursor-pointer select-none"
            >
              {skill.icon}
            </span>
          ))}
        </Cloud>
      </div>
    </section>
  );
}
