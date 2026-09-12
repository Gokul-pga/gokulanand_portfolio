import Skills from "@/src/components/sections/SkillsSection";

export default function SkillsPage() {
  return (
    <main className="bg-white text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6">
            My Expertise
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-700">
            Skills &
            <br />
            Technologies
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Over the years, I've built scalable web and mobile applications
            using modern frontend technologies. My focus is creating fast,
            responsive, and user-friendly experiences with clean architecture
            and maintainable code.
          </p>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2+", label: "Years Experience" },
            { value: "5+", label: "Projects Delivered" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Responsive UI" },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-gray-900/10
                bg-white/[0.03]
                p-8
              "
            >
              <h3 className="text-4xl text-gray-700 font-bold">{item.value}</h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Skills Component */}
      <Skills />

      {/* Bottom Content */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-gray-400 font-bold mb-8">
            Always Learning
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Technology evolves quickly, and I continuously explore modern tools,
            frameworks, and best practices. Currently focusing on advanced
            Next.js architecture, animations, performance optimization,
            TypeScript, testing, and scalable frontend systems.
          </p>
        </div>
      </section>
    </main>
  );
}
