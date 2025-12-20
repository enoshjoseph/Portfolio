

/* ---------- SKILL DATA ---------- */
const row1 = [
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
];

const row2 = [
  { name: "Java", icon: "java/java-original.svg" },
  { name: "Dart", icon: "dart/dart-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },
];

const row3 = [
  { name: "Android", icon: "android/android-original.svg" },
  { name: "Flutter", icon: "flutter/flutter-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Linux", icon: "linux/linux-original.svg" },
  { name: "Spring Boot", icon: "spring/spring-original.svg" },
];

function SkillItem({ skill }) {
  return (
    <div className="flex items-center gap-4 text-white opacity-90 whitespace-nowrap">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
        alt={skill.name}
        className="w-12 h-12 object-contain"
      />
      <span className="text-xl font-medium">
        {skill.name}
      </span>
    </div>
  );
}



/* ---------- COMPONENTS ---------- */
function SkillRow({ skills, direction }) {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div
        className={`flex w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {/* First copy */}
        <div className="flex items-center gap-20 px-10">
          {skills.map((skill, index) => (
            <SkillItem key={`a-${index}`} skill={skill} />
          ))}
        </div>

        {/* Second copy (duplicate) */}
        <div className="flex items-center gap-20 px-10">
          {skills.map((skill, index) => (
            <SkillItem key={`b-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Skills() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <SkillRow skills={row1} direction="left" />
        <SkillRow skills={row2} direction="right" />
        <SkillRow skills={row3} direction="left" />
      </div>
    </section>
  );
}
