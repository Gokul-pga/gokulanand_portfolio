"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";
import { FiServer, FiBookOpen, FiCode, FiTrendingUp } from "react-icons/fi";
import { FiBriefcase, FiCheckSquare, FiCpu, FiHeart } from "react-icons/fi";
const technologies = [
  {
    name: "Next.js 14",
    icon: SiNextdotjs,
    color: "#000000",
    bg: "#f0f0f0",
  },
  {
    name: "React 18",
    icon: SiReact,
    color: "#61DAFB",
    bg: "#e8f8ff",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bg: "#e6fafd",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
    bg: "#e6f0ff",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    bg: "#f3edff",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    bg: "#eafaf0",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#444444",
    bg: "#f5f5f5",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    bg: "#edf7e8",
  },
  {
    name: "MongoDB Atlas",
    icon: SiMongodb,
    color: "#47A248",
    bg: "#e8f5ed",
  },
  {
    name: "REST APIs",
    icon: FiServer,
    color: "#FF6B35",
    bg: "#fff0e8",
  },
];
const journey = [
  {
    year: "2019",
    title: "Started Engineering",
    icon: FiBookOpen,
    description:
      "Started my Bachelor's in Mechatronics Engineering, building analytical thinking and problem-solving skills.",
  },
  {
    year: "2021",
    title: "Began Web Development",
    icon: FiCode,
    description:
      "Discovered web development and started building responsive websites using HTML, CSS, JavaScript and React.",
  },
  {
    year: "2023",
    title: "Joined Avitam Technologies",
    icon: FiBriefcase,
    description:
      "Started my professional career as a MERN Stack Developer, working on enterprise-grade applications.",
  },
  {
    year: "Today",
    title: "Full Stack Developer",
    icon: FiTrendingUp,
    description:
      "Building scalable web applications, admin dashboards, APIs and mobile apps with modern technologies.",
  },
];
export default function AboutPage() {
  const router = useRouter();
  const getYearsOfExperience = (
    startDateString: string = "2024-01-01"
  ): string => {
    const startDate = new Date(startDateString);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = yearsDiff * 12 + monthsDiff;

    const years = (totalMonths / 12).toFixed(1);

    return years;
  };
  const metricsData = [
    {
      value: "5+",
      label: "Projects Built",
      icon: FiCheckSquare,
      color: "from-indigo-500/10 to-violet-500/10",
    },
    {
      value: getYearsOfExperience("2024-01-01"),
      label: "Years Experience",
      icon: FiBriefcase,
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      value: "10+",
      label: "Technologies",
      icon: FiCpu,
      color: "from-pink-500/10 to-rose-500/10",
    },
    {
      value: "100%",
      label: "Pure Commitment",
      icon: FiHeart,
      color: "from-amber-500/10 to-orange-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-20
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        top-[40%]
        right-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        bottom-0
        left-[30%]
        w-[400px]
        h-[400px]
        rounded-full
        bg-pink-500/10
        blur-[120px]
      "
        />

        <div
          className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
        />
      </div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.4em] text-gray-500 mb-8"
          >
            About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[10rem] leading-none"
          >
            <span className="block font-black">
              <span className="text-black">M</span>
              <span className="text-black">E</span>
              <span className="text-black">R</span>
              <span className="text-black">N</span>
              <span className="text-black"> STACK</span>
            </span>

            <span className="block">
              <span className="text-gray-500">DEVELOPER</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
          mt-10
          max-w-3xl
          text-xl
          text-gray-600
          leading-relaxed 
        "
          >
            I build scalable web applications, mobile experiences, enterprise
            dashboards and high-performance systems using modern technologies.
          </motion.p>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
          mt-10
          inline-flex
          px-6
          py-3
          rounded-full
          bg-black
          text-white
        "
          >
            Available For Work
          </motion.div>
        </div>

        <div
          className="
        absolute
        right-[-120px]
        top-20
        text-[20rem]
        font-black
        opacity-[0.03]
      "
        >
          ABOUT
        </div>
      </section>
      {/* STATS */}
      <section className=" px-4 md:px-6 bg-gradient-to-b from-transparent to-gray-50/50 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metricsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
    group
    relative
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-8
    transition-all
    duration-300
    hover:border-gray-300
    hover:shadow-lg
  "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-gray-100
        transition-colors
        duration-300
        group-hover:bg-black
      "
                  >
                    <IconComponent
                      className="
          text-xl
          text-gray-600
          group-hover:text-white
          transition-colors
        "
                    />
                  </div>

                  <span
                    className="
        text-xs
        font-medium
        text-gray-400
      "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Value */}
                <div className="mt-10">
                  <h2
                    className="
        text-5xl
        md:text-6xl
        font-black
        tracking-tight
        text-black
      "
                  >
                    {item.value}
                  </h2>

                  <div className="mt-4 h-px w-12 bg-gray-200 group-hover:w-20 transition-all duration-300" />

                  <p
                    className="
        mt-4
        text-sm
        font-medium
        tracking-wide
        text-gray-500
      "
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      {/* Journey */}
      <section className="py-5 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-center mb-20"
          >
            My Journey
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-600 leading-9">
                My journey began in Mechatronics Engineering where I developed
                strong analytical thinking and problem-solving skills. Over
                time, my passion shifted toward software engineering and
                creating digital experiences.
              </p>

              <p className="text-lg text-gray-600 leading-9 mt-8">
                Today I build enterprise-grade applications, scalable backend
                systems, mobile apps and modern user experiences using
                cutting-edge technologies.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                style={{ originY: 0 }}
                className="absolute left-5 top-0 w-[2px] h-full bg-gray-300"
              />

              <div className="space-y-12">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? 80 : -80,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}

                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                        }}
                        className="
                    absolute
                    left-0
                    top-3
                    w-10
                    h-10
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                      >
                        <Icon size={18} />
                      </motion.div>

                      <div
                        className="
                    bg-white
                    rounded-3xl
                    p-7
                    border
                    border-gray-200
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                      >
                        <span className="text-sm text-gray-500 font-medium">
                          {item.year}
                        </span>

                        <h3 className="text-2xl font-bold mt-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 leading-8 mt-4">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 m-5">
        {technologies.map(({ name, icon: Icon, color, bg }) => (
          <div
            key={name}
            className="
        group
        relative
        flex
        items-center
        gap-4
        rounded-2xl
        bg-white/80
        backdrop-blur-sm
        p-5
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-black/10
        cursor-pointer
        border
        border-white/20
        hover:border-opacity-100
        overflow-hidden
      "
            style={{
              borderColor: `${color}20`,
            }}
          >
            {/* Animated gradient background */}
            <div
              className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-white
          via-transparent
          to-transparent
        "
              style={{
                background: `radial-gradient(circle at 0% 0%, ${color}15, transparent 70%)`,
              }}
            />

            {/* Glow effect on hover */}
            <div
              className="
          absolute
          -inset-0.5
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          blur-2xl
        "
              style={{
                background: `radial-gradient(circle at 30% 30%, ${color}20, transparent 70%)`,
              }}
            />

            {/* Icon container */}
            <div
              className="
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          transition-all
          duration-500
          ease-out
          group-hover:scale-110
          group-hover:rotate-3
        "
              style={{
                background: bg,
                boxShadow: `0 4px 12px ${color}25`,
              }}
            >
              <Icon
                size={28}
                className="
            transition-all
            duration-300
            group-hover:scale-110
          "
                style={{ color }}
              />

              {/* Floating dot animation */}
              <div
                className="
            absolute
            -top-1
            -right-1
            h-3
            w-3
            rounded-full
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            animate-pulse
          "
                style={{ background: color }}
              />
            </div>

            {/* Text content */}
            <div className="relative flex-1">
              <span
                className="
            text-base
            font-semibold
            tracking-tight
            text-gray-800
            transition-colors
            duration-300
            group-hover:text-gray-900
          "
              >
                {name}
              </span>

              {/* Underline animation */}
              <div
                className="
            mt-1
            h-0.5
            w-0
            rounded-full
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
                style={{ background: color }}
              />
            </div>

            {/* Arrow indicator */}
            <div
              className="
          relative
          opacity-0
          -translate-x-2
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-400
          ease-out
        "
            >
              <svg
                className="h-5 w-5"
                style={{ color }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* TECH MARQUEE */}
      {/* <section className="overflow-hidden py-20 border-y">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[
            "NEXT.JS",
            "REACT",
            "TYPESCRIPT",
            "TAILWIND",
            "NODE.JS",
            "SPRING BOOT",
            "MONGODB",
            "REDUX",
          ]
            .concat([
              "NEXT.JS",
              "REACT",
              "TYPESCRIPT",
              "TAILWIND",
              "NODE.JS",
              "SPRING BOOT",
              "MONGODB",
              "REDUX",
            ])
            .map((item, i) => (
              <span
                key={i}
                className="
                text-6xl
                font-black
                bg-gradient-to-r
                from-black
                via-gray-700
                to-gray-400
                bg-clip-text
                text-transparent
              "
              >
                {item}
              </span>
            ))}
        </motion.div>
      </section> */}
      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black">
          Let's Build
          <br />
          Something Amazing
        </h2>

        <p className="mt-8 text-gray-600 text-xl">
          Open to opportunities and exciting projects.
        </p>

        <button
          onClick={() => {
            router.push("/pages/Contact");
          }}
          className="
        mt-10
        px-10
        py-5
        rounded-full
        text-white
        font-semibold
        bg-gradient-to-r
        from-blue-600
        via-purple-600
        to-pink-600
        hover:scale-105
        transition-all
        shadow-[0_10px_60px_rgba(168,85,247,0.4)] cursor-pointer
      "
        >
          Contact Me
        </button>
      </section>
    </main>
  );
}
