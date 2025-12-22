import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Email */}
        <div className="flex items-center gap-3 text-white/80">
          <Mail size={18} />
          <a
            href="mailto:enoshjoseph@email.com"
            className="hover:text-white transition"
          >
            enoshjoseph1@email.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white/70">
          <a
            href="https://leetcode.com/u/enoshjoseph1/"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <SiLeetcode size={22} />
          </a>

          <a
            href="https://github.com/enoshjoseph"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/enosh-joseph-p-a-8124a023a/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://instagram.com/thisisenoshjoseph"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
