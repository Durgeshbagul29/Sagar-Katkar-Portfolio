import React from 'react'

export default function About() {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Senior Unreal Engine Developer",
      company: "Abracadabra Entertainment",
      description: "Lead gameplay and blueprint developer for mobile and PC games. Specialized in Niagara VFX and multiplayer systems.",
      achievements: [
        "Developed core gameplay systems for Tanhaji: The Lion Maratha Warrior",
        "Implemented multiplayer features for Battle of Jhansi",
        "Created Niagara VFX for multiple titles",
        "Optimized game performance for mobile platforms"
      ]
    },
    {
      year: "2021 - 2022",
      role: "Game Tester & QA Analyst",
      company: "Abracadabra Entertainment",
      description: "QA testing for mobile games, identifying bugs and providing feedback for gameplay improvements.",
      achievements: [
        "Tested over 20 game builds across multiple platforms",
        "Created detailed bug reports and gameplay improvement suggestions",
        "Collaborated with development team to resolve critical issues",
        "Contributed to user experience improvements"
      ]
    },
    {
      year: "2020 - 2021",
      role: "Game Development Intern",
      company: "PixelCraft Studios",
      description: "Assisted in developing gameplay mechanics and UI elements for indie games.",
      achievements: [
        "Implemented UI systems for puzzle games",
        "Created particle effects using Unity",
        "Participated in game design discussions",
        "Learned industry-standard development practices"
      ]
    }
  ]

  const skills = [{ category: "Game Development", items: ["Unreal Engine 4/5", "Blueprints", "C++", "Niagara VFX", "Gameplay Systems"] }, { category: "Programming", items: ["C++", "Python", "JavaScript", "Blueprints", "Shader Programming"] }, { category: "Tools & Platforms", items: ["Visual Studio", "Git", "Perforce", "Steam", "Google Play", "Oculus SDK"] }, { category: "Specializations", items: ["Multiplayer Systems", "Game Optimization", "UI/UX Design", "Physics Simulation"] }]

  return (
    <section className="space-y-16">
      <div className="text-center">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle mx-auto">
          Passionate game developer with expertise in Unreal Engine and creating immersive experiences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center text-slate-900 text-5xl font-extrabold mb-6">
                SK
              </div>
              <h2 className="text-2xl font-bold mb-2">Sagar Katkar</h2>
              <div className="text-cyan-400 font-semibold mb-4">Senior Unreal Engine Developer</div>
              <p className="text-slate-300 mb-6">
                I create immersive gaming experiences with cutting-edge technology, focusing on gameplay systems,
                visual effects, and optimized performance.
              </p>

              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://www.linkedin.com/in/sagar-katkar-a3ab50146/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introduction */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-slate-300 mb-4">
              I'm Sagar Katkar, a passionate Unreal Engine 4/5 Game Developer with over 5 years of hands-on experience
              in creating gameplay systems, UI, and immersive environments. I specialize in Blueprint scripting, C++ gameplay logic,
              and Niagara Particle Systems for visual effects.
            </p>
            <p className="text-slate-300 mb-4">
              My journey in game development started with a passion for creating interactive experiences that captivate players.
              Over the years, I've worked on multiple published titles and continue to push the boundaries of what's possible
              in real-time 3D experiences.
            </p>
            <p className="text-slate-300">
              When I'm not coding, you can find me playing games, exploring new technologies, or contributing to the game development community.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-400"></div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-cyan-400 font-semibold">{exp.year}</span>
                  </div>
                  <div className="text-slate-400 mb-3">{exp.company}</div>
                  <p className="text-slate-300 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-300 flex">
                        <span className="mr-2 text-cyan-400">•</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">🛠️</span> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-700 text-slate-200 text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Beyond Coding</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2">Gaming</h3>
                <p className="text-slate-300">Playing and analyzing games to understand design patterns and mechanics</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">3D Art</h3>
                <p className="text-slate-300">Creating assets and environments in Blender and Substance Painter</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">Learning</h3>
                <p className="text-slate-300">Always exploring new technologies and game development techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}