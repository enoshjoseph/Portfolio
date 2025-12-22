import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);


  useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;

    // how far user has scrolled into the section
    const scrolled =
      viewportHeight - rect.top;

    // total scrollable distance
    const scrollable =
      sectionHeight + viewportHeight;

    // progress clamped between 0 and 1
    const progress = Math.min(
      1,
      Math.max(0, scrolled / scrollable)
    );

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-16">
      <div className="max-w-7xl mx-auto flex gap-10 px-6">

        {/* LEFT SCROLL INDICATOR */}
        <div className="relative hidden lg:flex w-12 justify-center">
          
          {/* full faint line */}
          <div className="absolute top-0 h-full w-[1.5px] bg-white/10" />

          {/* active indicator */}
          <div className="sticky top-32 flex flex-col items-center">

            {/* white ring + blue dot */}
            <div className="w-4 h-4 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/50">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>

            {/* active gradient line that grows on scroll */}
            <div className="relative mt-4 w-[1.5px] h-96 overflow-hidden">
              <div 
                className="absolute top-0 w-full
                    bg-gradient-to-b
                    from-blue-500
                    via-purple-500
                    to-violet-600
                    transition-transform duration-300 ease-out
                    shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                style={{
                  height: '100%',
                  transform: `scaleY(${scrollProgress})`,
                  transformOrigin: 'top'
                }}
              />
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16">
          <ProjectCard
            delay={0}
            title="Traffic Volume Prediction"
            stack="Machine Learning • Python • XGBoost • Streamlit"
            description="Predicts hourly traffic volume using weather and time-based features to support traffic planning and congestion management."
            onClick={() =>
                setSelectedProject({
                title: "Traffic Volume Prediction",
                stack: "Machine Learning • Python • XGBoost • Streamlit",
                details:
                    "Designed and deployed a machine learning system that predicts hourly traffic volume up to five days in advance using weather-forecasted and temporal features. The solution is built to assist traffic officers and city planners in congestion management and urban planning. Feature engineering and XGBoost hyperparameter tuning were optimized to improve prediction accuracy, enabling authorities to anticipate vehicle flow, reduce congestion, and plan traffic signals more effectively.",
                github: "https://github.com/enoshjoseph/traffic_volume_pred",
                })
            }
            />



          <ProjectCard
            delay={120}
            title="SmartCity 360"
            stack="React • Spring Boot • JPA • MySQL"
            description="A full-stack smart city platform for managing destinations and events with an admin-driven dashboard."
             onClick={() =>
                setSelectedProject({
                title: "SmartCity 360",
                stack: "React • Spring Boot • JPA • MySQL",
                details:
                    "Developed a scalable full-stack platform for managing destinations, events, and schedules in smart city environments. The system exposes RESTful APIs built with Spring Boot to support CRUD operations, image uploads, and event timing validations. A modular backend architecture using DTOs and layered design (controller, service, repository) was implemented with MySQL for data persistence. The application includes a responsive React-based admin interface for efficient city and event management.",
                github: "https://github.com/enoshjoseph/SmartCity360",
                })
            }
            />
        

          <ProjectCard
            delay={240}
            title="Music Player Application"
            stack="React • Node.js • MySQL"
            description="A full-stack music streaming application where admins manage tracks and users can stream music through a responsive interface."
            onClick={() =>
                setSelectedProject({
                title: "Music Player Application",
                stack: "React • Node.js • MySQL",
                details:
                    "Built a scalable full-stack music streaming platform where administrators can upload, manage, and organize music tracks while users can stream and enjoy content through a responsive interface. The backend is implemented using Node.js with RESTful APIs to handle music management and playback data, while the frontend is developed with React to provide a smooth and intuitive user experience. The application focuses on dynamic content management, efficient data handling, and a clean, user-friendly design.",
                github: "https://github.com/enoshjoseph/Music-Player",
                })
            }
            
            />
          <ProjectCard
            delay={360}   
            title="Jio Cinema Clone"
            stack="React • Vite • Node.js"
            description="A full-stack movie browsing application that mimics core cinema website features, allowing users to explore and view movie details through a fast, responsive interface."
             onClick={() =>
                setSelectedProject({
                title: "Jio Cinema Clone",
                stack: "React • Vite • Node.js",
                details:
                    "A full-stack movie browsing application that mimics core cinema website features, allowing users to explore and view movie details through a fast, responsive interface.",
                github: "https://github.com/yourusername/traffic-volume-prediction",
                })
            }
        />
        
        </div>

      </div>

      {selectedProject && (
  <div
    className="
      fixed inset-0 z-50 flex items-center justify-center
      bg-black/70 backdrop-blur-sm
      animate-fade-in
    "
    onClick={() => setSelectedProject(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        w-[90%] max-w-xl
        rounded-2xl
        bg-gradient-to-br from-[#0b1020] to-[#020617]
        border border-white/10
        p-8
        text-white
        shadow-[0_40px_120px_rgba(0,0,0,0.85)]
        animate-scale-in
      "
    >
      <h3 className="text-2xl font-semibold">
        {selectedProject.title}
      </h3>

      <p className="mt-1 text-sm text-blue-400">
        {selectedProject.stack}
      </p>

      <p className="mt-4 text-white/80 leading-relaxed">
        {selectedProject.details}
      </p>

      <a
        href={selectedProject.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-purple-400 hover:text-purple-300 transition"
      >
        View on GitHub →
      </a>
    </div>
  </div>
)}

    </section>
  );
}
function ProjectCard({
  title,
  stack,
  description,
  delay = 0,
  onClick,
  isClickable = true,
}) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        rounded-xl bg-white/[0.03] border border-white/10 p-7
        reveal ${visible ? "reveal-visible" : ""}
        
        will-change-transform
        transition-[transform,box-shadow,border-color]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        
        hover:translate-x-[6px]
        hover:translate-y-[6px]
        hover:-rotate-[0.3deg]
        hover:border-white/20
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]

        ${isClickable ? "cursor-pointer" : ""}
      `}
    >
      <h3 className="text-white font-semibold text-xl">
        {title}
      </h3>

      <p className="mt-1 text-sm text-blue-400">
        {stack}
      </p>

      <p className="mt-3 text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
