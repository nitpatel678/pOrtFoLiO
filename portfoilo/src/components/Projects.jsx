import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      title: "Project Mate",
      description:
        "A platform where developers can discover, contribute, and collaborate on real-world open source projects. Features include project discovery, skill tagging, contribution tracking, and GitHub integration.",
      image:
        "https://github.com/nitpatel678/myportfolio/blob/main/src/Images/ProjectMate_Orange.png?raw=true",
      tags: ["React", "Node.js", "MongoDB", "GitHub API"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      title: "Cortex (AI Agent)",
      description:
        "An AI-powered assistant that helps users generate blog posts, social media content, and marketing copy. Built with React, OpenAI API, and Firebase for authentication and database support.",
      image: "https://github.com/nitpatel678/pOrtFoLiO/blob/main/portfoilo/src/assets/cortex.jpg?raw=true",
      tags: ["React", "OpenAI", "Firebase", "Tailwind CSS"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      title: "Blockchain Decentralized Banking Project",
      description:
        "A decentralized banking platform using Ethereum smart contracts. Provides wallet authentication, secure transfers, and a real-time transaction dashboard with Three.js visualizations.",
      image: "https://github.com/nitpatel678/pOrtFoLiO/blob/main/portfoilo/src/assets/blockchain.jpg?raw=true",
      tags: ["React", "Ethereum", "Three.js", "Solidity"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding min-h-screen">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-20"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 id="subheading" className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* iMac Mockup */}
              <div className="w-full md:w-3/5">
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg relative">
                  {/* Header bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-white/10 backdrop-blur-md">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <span className="text-xs text-white/60 font-poppins text-center flex-1 truncate">
                      {project.title}
                    </span>
                    <div className="w-6" />
                  </div>

                  {/* Image content */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{ height: "300px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/5 space-y-4">
                <h3 id="subheading" className="text-2xl font-bold">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-poppins"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-poppins"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
