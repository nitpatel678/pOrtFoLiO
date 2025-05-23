import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="section-padding min-h-screen flex items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <h2 id="subheading" className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-white/80 mb-4 text-lg">
            I'm a results-driven full-stack developer with expertise in JavaScript, TypeScript, React, and Node.js. I focus on building scalable, high-performance applications with clean architectures and engaging user interfaces.
          </p>
          <p className="text-white/80 mb-4 text-lg">
            With experience across frontend frameworks, backend APIs, and 3D interfaces using Three.js, I deliver solutions that blend performance, design, and usability. I’m passionate about building impactful software that solves real-world problems.
          </p>
          <p className="text-white/80 text-lg">
            Outside of work, I stay ahead of emerging technologies, contribute to open-source, and continuously refine my craft to push the boundaries of web development.
          </p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Next.js",
              "Three.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-poppins"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl transform -rotate-3"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20">
              <img
                src="https://github.com/nitpatel678/myportfolio/raw/main/src/Images/Protrait.png"
                alt="Nitin Patel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
