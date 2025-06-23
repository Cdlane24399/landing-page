
import { Award, Coffee, Users, Zap } from "lucide-react";

const stats = [
  { icon: Coffee, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Zap, label: "Technologies Mastered", value: "25+" }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey in web development started 
                with curiosity and has evolved into a deep expertise in modern web technologies.
              </p>
              
              <p>
                I specialize in building scalable, user-centric applications using cutting-edge 
                technologies like React, Node.js, and cloud platforms. My approach combines 
                technical excellence with creative problem-solving to deliver exceptional results.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying ahead of industry trends.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
                <Award size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Clean, maintainable code
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  User-centered design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Continuous learning
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Collaboration & communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
