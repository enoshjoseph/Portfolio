import profileImg from "../assets/edge-phto.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="flex flex-col gap-2">
            
            {/* Name block */}
            <div  className="animate-blur-fade-x [animation-delay:0ms]">
              <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                <span className="text-gray-500">Hi! I'm </span>
                <span className="animate-aurora bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(180,80,255,0.55)]">
                  Enosh Joseph
                </span>
              </h1>
            </div>

            {/* Tagline block */}
            <div className="-mt-2 animate-blur-fade-y [animation-delay:120ms]" >
              <p className="text-2xl md:text-3xl text-gray-400">
                Full Stack Developer{" "}
                {/* <span className="text-white font-semibold">animated</span> */}
              </p>
            </div>

            {/* Description block – entrance animation */}
          <div className="mt-6 flex animate-blur-fade-y [animation-delay:120ms]">
            
            {/* Glowing / blinking line (separate element) */}
            <div className="mr-6 flex">
              <span className="block w-[4px] h-full rounded-full bg-blue-500 animate-blue-blink glow-line"></span>
            </div>

            {/* Text container */}
            <div className="bg-gradient-to-b from-blue-500/5 to-transparent pl-2">
              <p className="text-lg text-gray-400 leading-relaxed">
                Full-Stack & ML developer with experience building scalable applications
                using React, Spring Boot, and Python. Strong in algorithms, backend systems,
                and real-world ML solutions.
              </p>
            </div>
          </div>


          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={profileImg}
              alt="Enosh Joseph"
              className="w-full max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
