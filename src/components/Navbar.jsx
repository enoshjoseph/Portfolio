import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achiements" },

    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2
        z-[999]
        hidden lg:flex
        transition-all duration-300
        ${scrolled ? "top-3" : "top-6"}
      `}
    >
      <div
         className="
          flex items-center gap-8
          h-14 px-6 xl:px-10
          rounded-full
          backdrop-blur-md
          bg-black/70
          border border-white/20
          text-white text-[15px] font-medium
          shadow-[0px_8px_30px_rgba(0,0,0,0.12)]
        "
      >
      
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
