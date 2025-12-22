export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT TITLE */}
        <div className="flex items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            GET IN TOUCH
          </h2>
        </div>

        {/* RIGHT LINKS */}
        <div className="space-y-6 text-white">
          <p className="text-lg text-white/80 mb-6">
            Social Links:
          </p>

          <ContactRow
            label="Instagram"
            value="thisisenoshjoseph"
            link="https://instagram.com/thisisenoshjoseph"
          />

          <ContactRow
            label="LinkedIn"
            value="enosh-joseph"
            link="https://www.linkedin.com/in/enosh-joseph-p-a-8124a023a/"
          />

          <ContactRow
            label="GitHub"
            value="enoshjoseph"
            link="https://github.com/enoshjoseph"
          />

        </div>
      </div>
    </section>
  );
}
function ContactRow({ label, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-between
        border-b border-white/15
        pb-4
        transition-all duration-300
        hover:border-white/40
        group
      "
    >
      <span className="text-white/85 font-medium">
        {label}:
      </span>

      <span className="
        flex items-center gap-3
        text-white font-semibold
        group-hover:text-purple-400
        transition
      ">
        {value}
        <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </span>
    </a>
  );
}
