
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Full Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Chris</span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with cutting-edge technologies. 
          Passionate about clean code, innovative solutions, and pushing the boundaries of web development.
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
            <Linkedin size={28} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};
