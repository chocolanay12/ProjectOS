import {
  FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaUser, FaGraduationCap, FaProjectDiagram, FaTools, FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaReact, FaBootstrap, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCuttlefish,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { FaCircle } from "react-icons/fa";

export default function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "CPU Scheduling Simulator",
      description:
        "The CPU Scheduling Simulator is an interactive tool that demonstrates how CPU scheduling algorithms manage process execution inside an operating system.It visually shows how processes are selected, how long they wait, and how the CPU distributes time among tasks.",
      link: "https://cpu-scheduling-algorithms.netlify.app/",
      image: "/CPU Scheduling Simulators.PNG",
      openInNewTab: true,
    },
    {
      id: 2,
      title: "E-commerce Shop",
      description:
        "An E-commerce Shop is an online platform that allows customers to browse products, add items to a cart, and complete purchases through a secure checkout process. It typically includes features such as product listings, categories, user authentication, order tracking, and payment integration.",
      link: "https://projectday.vercel.app/",
      image: "/E-commerce.png",
      openInNewTab: true,
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C#", icon: <FaCuttlefish className="text-blue-700" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <div className="bg-[#f2e8c9] min-h-screen font-mono text-black">

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">

        {/* HERO SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-8 p-6 
          bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">

          <img
            src="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/519541444_2636547350010395_2734322428134081236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHEXrkScR3O_e1oGn7rVnDSLMgfs-iUZCMsyB-z6JRkI5Ecp9NQI8CdgRl8hKcwJ8TgioglGkT8sC5y5a4-aY_M&_nc_ohc=LyPsG_txglAQ7kNvwFSyhr_&_nc_oc=AdmN5Lwz4IvDWkkEupyb8rwgVVbVZBJWBG7qVdA657zAXrS1wwVK6iDfzaegzTxbjsE&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=_t1Nsc3cGwwZ62lUzdPgPQ&oh=00_Afmwix34cXu4i2X6gMnBNA8OfDpLQrVO_0nJ0SJpPSxcoQ&oe=693727AD"
            alt="ahhburn"
            className="w-40 h-40 object-cover border-4 border-black shadow-[6px_6px_0_#000] rounded-none"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold uppercase mb-2">Bern Justin Tajanlangit</h2>

            <p className="flex items-center gap-2 mb-1">
              <FaMapMarkerAlt className="text-red-500" /> Calan Poblacion Cordova
            </p>

            <p className="text-lg font-bold mb-4">BSIT Student</p>

            <div className="flex flex-wrap gap-3">

              <a
                href="mailto:bernjustin08@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-yellow-300 border-4 border-black 
                shadow-[3px_3px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <FaEnvelope /> Send Email
              </a>

              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-4 border-black 
                shadow-[3px_3px_0_#000] hover:bg-gray-200"
              >
                <FaProjectDiagram /> View Projects
              </button>

            </div>
          </div>
        </header>

        {/* ABOUT + EDUCATION */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">
            <h4 className="font-bold text-xl uppercase mb-3 flex items-center gap-2">
              <FaUser className="text-blue-500" /> About
            </h4>
            <p>
              I am passionate about IT and web development, with hands-on practice building basic websites using HTML, CSS, and JavaScript. I enjoy understanding how systems work and solving technical problems, and I’m continually improving my skills through self-learning and personal projects. My goal is to grow into an IT support role where I can assist users, maintain systems, and contribute to efficient technology solutions.
            </p>
          </div>

          <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">
            <h4 className="font-bold text-xl uppercase mb-3 flex items-center gap-2">
              <FaGraduationCap className="text-green-500" /> Educational Background
            </h4>

            <ul className="space-y-2">
              {[
                ["2023 — Present", "Cordova Public College"],
                ["2022 — 2023 — Senior High", "Cordova National High School"],
                ["2018 — 2020 — Junior High", "Cordova National High School"],
                ["2011 — 2017 — Elementary", "Cordova Central Elementary School"],
              ].map(([year, school], idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCircle className="text-green-500 text-xs mr-5" />
                  <span>
                    <strong>{year}</strong><br />{school}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2">
            <FaProjectDiagram className="text-purple-500" /> Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map(project => (
              <div key={project.id}
                className="bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover border-b-4 border-black"
                />

                <div className="p-4">
                  <h4 className="font-bold text-xl uppercase mb-2">{project.title}</h4>
                  <p className="mb-4">{project.description}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="px-3 py-1 bg-blue-300 border-4 border-black shadow-[3px_3px_0_#000]"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS + CONTACT */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* SKILLS */}
          <section className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">
            <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
              <FaTools className="text-yellow-500" /> Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1 bg-yellow-200 border-2 border-black 
                  shadow-[2px_2px_0_#000]"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* CONTACT INFO */}
          <section className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">
            <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> Contact Info
            </h3>

            <div className="grid gap-4">

              <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border-4 border-black shadow-[3px_3px_0_#000]"
                href="mailto:bernjustin08@gmail.com">
                <FaEnvelope className="text-blue-600" /> Email
              </a>

              <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border-4 border-black shadow-[3px_3px_0_#000]"
                href="tel:+639070772276">
                <FaPhone className="text-green-600" /> Phone
              </a>

              <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border-4 border-black shadow-[3px_3px_0_#000]"
                href="https://www.facebook.com/beejing08" target="_blank">
                <FaFacebook className="text-blue-700" /> Facebook
              </a>

              <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border-4 border-black shadow-[3px_3px_0_#000]"
                href="https://www.instagram.com/bernjustin8" target="_blank">
                <FaInstagram className="text-pink-500" /> Instagram
              </a>

            </div>
          </section>

           <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_#000] rounded-none">
            <h4 className="font-bold text-xl uppercase mb-3 flex items-center gap-2">
              <FaGraduationCap className="text-green-500" />  WORK EXPERIENCE
            </h4>

            <ul className="space-y-2">
              {[
                ["ABYROAD RESTOBAR 2025-PRESENT"],
                ["RAZZ REL CATERING SERVICES 2024-2025"],
              ].map(([year, school], idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCircle className="text-green-500 text-xs mr-5" />
                  <span>
                    <strong>{year}</strong><br />{school}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
