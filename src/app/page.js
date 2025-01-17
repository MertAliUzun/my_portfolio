'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiMysql, SiFlutter, SiNextdotjs, SiDotnet, SiUnity, SiSupabase } from 'react-icons/si';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { projects } from './data/projects';

// Lottie'yi client-side'da dinamik olarak import et
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false, // Sunucu tarafında render edilmesini engelle
});

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState("avatar1.jpg");
  const [hoverAllowed, setHoverAllowed] = useState(true); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let interval;
    if (hovering && hoverAllowed) {
      const startTime = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / 2000) * 100, 100); // 2 saniyede %100
        setHoverProgress(progress);

        if (progress === 100) {
          clearInterval(interval);
          switchImage();
        }
      }, 16); // Yaklaşık 60 FPS
    } else {
      clearInterval(interval);
      setHoverProgress(0); // Hover durduğunda sıfırla
    }

    return () => clearInterval(interval);
  }, [hovering, hoverAllowed]);

  const switchImage = () => {
    setHoverAllowed(false); // Yeni hover başlamadan önce engelle
    setCurrentImage((prev) => (prev === "avatar1.jpg" ? "avatar2.jpg" : "avatar1.jpg")); // Görseli değiştir
    setTimeout(() => setHoverAllowed(true), 100); // Hover yeniden aktif hale gelir
  };

  // Animasyon verilerini yükle
  useEffect(() => {
    if (selectedProject?.animationPath) {
      fetch(selectedProject.animationPath)
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(error => console.error('Error loading animation:', error));
    }
  }, [selectedProject]);

  return (
    <div className="page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <main className="main">
        <div className="hero" style={{marginTop: 250}}>
        <div
            className="image-container"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <svg
              className="progress-ring"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                
                strokeWidth="4"
              />
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#435363"
                strokeWidth="4"
                strokeDasharray="301.6"
                strokeDashoffset={301.6 - (hoverProgress / 100) * 301.6}
                strokeLinecap="round"
              />
            </svg>
            <Image
              src={`/${currentImage}`}
              alt="Avatar"
              width={200}
              height={200}
              className="avatar-image"
            />
            
          </div>
          <div className="text-container">
           <h2 style={{ fontSize: 16 }}>Hello I'm</h2>
           <h1 className="title">Mert Ali Uzun</h1>
           <h1 style={{ color: '#956afa', fontSize: 28 }}>a Full-Stack Developer</h1>
           <h2 style={{ fontSize: 20, marginTop: 10 }}> <FaMapMarkerAlt style={{ marginRight: 8 }} />Trabzon/Turkiye</h2>

            <div className="contactIcons">
            <a href="mailto:your.email@example.com" aria-label="Email" className="contactButton">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourusername" aria-label="GitHub" className="contactButton">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="contactButton">
              <FaLinkedin />
            </a>
            <a href="tel:+1234567890" aria-label="Phone" className="contactButton">
              <FaPhone />
            </a>
            <a href="https://wa.me/1234567890" aria-label="WhatsApp" className="contactButton">
              <FaWhatsapp />
            </a>
          </div>
          <a href="/path/to/your/pdf.pdf" download className="contactButton" style={{ marginTop: '.5rem', }}>
              <h2 style={{ fontSize: 26 }}> Download CV  <FaDownload style={{ marginLeft: 8, color: '#956afa'}} /></h2>
            </a>
         </div>
         </div>      
         <div class="aboutCard" style={{marginTop: 150}}>
         <div class="loader">
           <p>I Develop</p>
           <div class="words">
             <span class="word">Mobile Applications</span>
             <span class="word">Web Applications</span>
             <span class="word">Hypercasual Games</span>
           </div>
         </div>
       </div> 
 
        <section className="projects" style={{marginTop: 100}}>
          <h2 className="sectionTitle spaceFont">Projects</h2>
          <div className="grid">
            {Object.entries(projects).map(([key, project]) => (
              <div className="card" key={key}>
                <div className="cardContent">
                  <div className="cardImage">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={100}
                        height={175}
                        objectFit="cover"
                      />
                  </div>
                  <div className="cardInfo">
                    <h3 className="cardTitle">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="viewProjectBtn"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div className="modalOverlay" onClick={() => setSelectedProject(null)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
              <button 
                className="modalClose" 
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div className="projectHero">
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="projectContent">
                <h1>{selectedProject.title}</h1>
                <p className="projectDescription">{selectedProject.description}</p>

                <div className="projectFeatures">
                  <h2>Özellikler</h2>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="projectTechnologies">
                  <h2>Kullanılan Teknolojiler</h2>
                  <div className="tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="projectLinks">
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="projectBtn"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="projectBtn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="skills">
          <h2 className="sectionTitle spaceFont">Skills</h2>
          <div className="skillGrid">
            <div className="skillCard">
              <h4 className="skillTitle">Frontend</h4>
              <ul>
                <li data-description="Developing user interfaces with HTML">
                  <FaHtml5 /> HTML
                </li>
                <li data-description="Designing styles and layouts with CSS">
                  <FaCss3Alt /> CSS
                </li>
                <li data-description="Creating interactive web content with JavaScript">
                  <FaJs /> JavaScript
                </li>
                <li data-description="Using C# for application and game development">
                  <SiSharp /> C#
                </li>
                <li data-description="Programming with Dart for Flutter applications">
                  <SiDart /> Dart
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Backend</h4>
              <ul>
                <li data-description="Managing data with the NoSQL database MongoDB">
                  <SiMongodb /> MongoDB
                </li>
                <li data-description="Working with relational databases using MySQL">
                  <SiMysql /> MySQL
                </li>
                <li data-description="Backend-as-a-Service platform for scalable apps">
                  <SiSupabase /> Supabase
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Frameworks</h4>
              <ul>
                <li data-description="Building cross-platform mobile applications with Flutter">
                  <SiFlutter /> Flutter
                </li>
                <li data-description="Developing server-side rendered applications with Next.js">
                  <SiNextdotjs /> Next.js
                </li>
                <li data-description="Building enterprise-level applications with .NET framework">
                  <SiDotnet /> .NET
                </li>
                <li data-description="Creating 2D and 3D games using Unity engine">
                  <SiUnity /> Unity
                </li>
              </ul>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
