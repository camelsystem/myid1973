export default function Skills() {
  const skills = [
    { name: "HTML/CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Next.js", level: "75%" },
    { name: "TypeScript", level: "70%" },
    // 필요한 기술 스택을 추가하세요
  ]

  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}