export default function Skills() {
const skillList = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Qt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' },
  ];

  // Duplicating array for infinite marquee scroll loop
  const duplicatedSkills = [...skillList, ...skillList];

  return (
    <section id="skills" className="fade-section">
      <h2>TOOLS I WORK WITH</h2>
      <p className="skills-description">
        Technologies and tools I've used to bring ideas to life through problem
        solving, design, and development.
      </p>

      <div className="logo-slider">
        <div className="logo-track">
          {duplicatedSkills.map((skill, index) => (
            <div className="logo-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}