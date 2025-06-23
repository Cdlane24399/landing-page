
import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Server,
    title: "Backend Development", 
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: ["AWS", "Docker", "Firebase", "Supabase", "Redis"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "PWA", "Ionic", "Expo"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["GraphQL", "REST APIs", "WebRTC", "Socket.io", "Webpack"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Palette,
    title: "Design & Tools",
    skills: ["Figma", "Git", "Jest", "Cypress", "Storybook"],
    color: "from-pink-500 to-purple-500"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proficient in modern web technologies and frameworks, constantly learning and adapting to the latest industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 backdrop-blur-sm bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 group-hover:border-white/30 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
