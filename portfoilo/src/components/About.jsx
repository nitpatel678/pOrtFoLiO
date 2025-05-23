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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-white/80 mb-4 text-lg">
            I'm a passionate full-stack developer with a keen eye for design and
            a love for creating seamless user experiences. With over 5 years of
            experience in the industry, I've worked on a variety of projects
            ranging from small business websites to complex enterprise
            applications.
          </p>
          <p className="text-white/80 mb-4 text-lg">
            My approach combines technical expertise with creative
            problem-solving, allowing me to build solutions that are not only
            functional but also aesthetically pleasing and intuitive to use.
          </p>
          <p className="text-white/80 text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or hiking in the great
            outdoors.
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
                src="https://github.com/nitpatel678/myportfolio/raw/main/src/Images/Protrait.png
"
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
