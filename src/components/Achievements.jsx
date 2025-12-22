import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current; // Store ref value
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible];
}

const achievements = [
  {
    title: "1st Place – Web Designing",
    description:
      "Secured first place in a web designing competition using HTML, CSS, and JavaScript.",
    image: "/certificates/web-designing-first-place.png",
  },
  {
    title: "Gold Tier – Go for Gold",
    description:
      "Achieved Gold Tier in Accenture's Go for Gold competition for technical excellence.",
    image: "/certificates/accenture-gold-tier.png",
  },
  {
    title: "Postman API Student Expert",
    description:
      "Certified in API fundamentals, collections, environments, and automated testing.",
    image: "/certificates/postman-student-expert.png",
  },
];

export default function Achievements() {
  const [activeCert, setActiveCert] = useState(null);
  
  const [cardRef0, visible0] = useReveal();
  const [cardRef1, visible1] = useReveal();
  const [cardRef2, visible2] = useReveal();
  
  const cardRefs = [cardRef0, cardRef1, cardRef2];
  const visibles = [visible0, visible1, visible2];

  return (
    <section id="achievements" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              onClick={() => setActiveCert(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCert(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} certificate`}
              className={`
                reveal ${visibles[i] ? "reveal-visible" : ""}
                group cursor-pointer
                rounded-2xl
                bg-white/[0.03]
                border border-white/10
                overflow-hidden
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2
                hover:border-white/20
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                focus:outline-none focus:ring-2 focus:ring-white/50
              `}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-4xl w-[90%]
              rounded-2xl overflow-hidden
              border border-white/10
              bg-black
              shadow-[0_40px_120px_rgba(0,0,0,0.9)]
              transition-all duration-300 ease-out
              scale-100 opacity-100
            "
          >
            <img
              id="modal-title"
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}