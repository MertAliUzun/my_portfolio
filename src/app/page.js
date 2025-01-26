'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaCode, FaGlobe, FaMapMarkerAlt, FaHtml5, FaExternalLinkAlt, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiTailwindcss, SiFlutter, SiNextdotjs, SiDotnet, SiUnity, SiSupabase, SiReact } from 'react-icons/si';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { projects } from './data/projects';
import TopBar from './topbar.js'

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
  const [activeTab, setActiveTab] = useState('work');
  const [language, setLanguage] = useState('en'); // Default language

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

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'tr' : 'en'));
  };

  return (
    <div className="page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="language-toggle" onClick={toggleLanguage}>
        <div className={`lang-slider ${language}`}>
          <Image src="/us_flag.jpg" alt="English" width={30} height={20} className={`flag ${language === 'tr' ? 'hidden' : ''}`} />
          <Image src="/tr_flag.jpg" alt="Turkish" width={30} height={20} className={`flag ${language === 'en' ? 'hidden' : ''}`} />
        </div>
      </div>
      <main className="main" id="main">
        <TopBar language={language} />
        <div className="hero">  
        <div class="profile">
          <div class="profile-inner">
            <div class="profile-front">
            <Image
                    src="/avatar1.jpg"
                    alt="Avatar Front"
                    width={200}
                    height={200}
                    className="avatar-image"
                  />
            </div>
            <div class="profile-back">
        <Image
                    src="/avatar2.jpg"
                    alt="Avatar Front"
                    width={200}
                    height={200}
                    className="avatar-image"
                  />
            </div>
          </div>
        </div>
        {/* <div
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
            
          </div>*/}
          <div className="text-container">
           <h3 style={{ fontSize: 16, color: "grey" }}>{language === 'en' ? "Hello I'm" : "Merhaba Ben"}</h3>
           <h1 className="title">Mert Ali Uzun</h1>
           <h1 style={{ color: '#956afa', fontSize: 28 }}> <span style={{ color: 'grey' }}>{language === 'en' ? "a" : "bir"}</span> Full-Stack Developer</h1>
           {/*<h2 style={{ fontSize: 20, marginTop: 10, color: "grey"}}> <FaMapMarkerAlt style={{ marginRight: 8 }} />{language === 'en' ? "Trabzon/Turkey" : "Trabzon/Türkiye"}</h2>*/}

            <div className="contactIcons">
            <a href="tel:+905315652141" aria-label="Phone" className="contactButton contactButton1" target="_blank">
              <FaPhone />
            </a>
            <a href="https://github.com/MertAliUzun" aria-label="GitHub" className="contactButton contactButton2" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto:a_mert_uzun@hotmail.com" aria-label="Email" className="contactButton contactButton3">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/mert-ali-uzun/" aria-label="LinkedIn" className="contactButton contactButton4" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/905315652141" aria-label="WhatsApp" className="contactButton contactButton5" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
          <div className="downloadCV">
          <a href="mert_ali_uzun_cv.pdf" download className="cvButton cvButton-outline">
              <h2>{language === 'en' ? "Download CV" : "CV İndir"} <FaDownload style={{ marginLeft: 8, color: "white"}} /></h2>
          </a>
        </div>
         </div>
         </div>      
         <div class="aboutCard">
         <div class="loader">
           <p>{language === 'en' ? "I Develop" : "Geliştirdiklerim:"}</p>
           <div class="words">
             <span class="word">{language === 'en' ? "Mobile Applications" : "Mobil Uygulamalar"}</span>
             <span class="word">{language === 'en' ? "Web Applications" : "Web Uygulamaları"}</span>
             <span class="word">{language === 'en' ? "Hypercasual Games" : "Mobil Oyunlar"}</span>
           </div>
         </div>
       </div> 
 
        <section className="projects" id="projects" style={{marginTop: 100}}>
          <h2 className="sectionTitle spaceFont">{language === 'en' ? "Projects" : "Projeler"}</h2>
          <div className="grid">
            {Object.entries(projects).map(([key, project]) => (
              <div className="card" key={key}>
                <div className="cardContent">
                  <div className="cardImage">
                    <Image
                      src={project.image}
                      alt={project.title[language]}
                      width={150}
                      height={255}
                      objectFit="cover"
                    />
                  </div>
                  <div className="cardInfo">
                    <h3 className="cardTitle spaceFont">{project.title[language]}</h3>
                    <p className="hideMobile cardDescription">{project.description[language]}</p>
                    <div className="skillCard hideMobile">
                    <ul>
                      {project.icons.slice(0, 3).map((Icon, index) => (
                        <li key={index} data-description={`Kullanılan teknoloji: ${project.technologies[index]}`}>
                          <Icon style={{ color: project.iconColors[index] }}/> {project.technologies[index]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="viewProjectBtn"
                  >
                    {language === 'en' ? "View Project" : "Projeyi Gör"} <FaExternalLinkAlt style={{ marginLeft: 5 }} />  
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
              <h1 className="projectTitle">{selectedProject.title[language]}</h1>
              <div className="projectHero">
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : null}
              </div>
              <div className="projectLinks">
                <a
                  href={selectedProject.demoUrl !== 'none' ? selectedProject.demoUrl : '#'}
                  target={selectedProject.demoUrl !== 'none' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="projectBtn"
                  onClick={(e) => {
                    if (selectedProject.demoUrl === 'none') {
                      e.preventDefault();  // Prevent link navigation
                      alert('Project is not yet published');
                    }
                  }}
                >
                  <FaGlobe /> {language === 'en' ? "Try it Out" : "Deneyin"}
                </a>
                <a
                  href={selectedProject.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectBtn"
                >
                  <FaCode /> {language === 'en' ? "Source Code" : "Kaynak Kodu"}
                </a>
              </div>
              <div className="projectContent">
                <p className="projectDescription">{selectedProject.description[language]}</p>

                <div className="projectFeatures">
                  <h2>{language === 'en' ? "Features" : "Özellikler"}</h2>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature[language]}</li>
                    ))}
                  </ul>
                </div>
                <div className="projectTechnologies">
                  <h2>{language === 'en' ? "Technologies Used" : "Kullanılan Teknolojiler"}</h2>
                  <div className="skillCard">
                    <ul>
                      {selectedProject.icons.map((Icon, index) => (
                        <li key={index} data-description={`${language === 'en' ? "Technology Used" : "Kullanılan Teknoloji"}: ${selectedProject.technologies[index]}`}>
                          <Icon style={{ color: selectedProject.iconColors[index] }} /> {selectedProject.technologies[index]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="skills" id="skills">
          <h2 className="sectionTitle spaceFont">{language === 'en' ? "Skills" : "Yetenekler"}</h2>
          <div className="skillGrid">
            <div className="skillCard">
              <h4 className="skillTitle">Frontend</h4>
              <ul>
                <li data-description="Programming with Dart for Flutter applications">
                  <SiDart style={{ color: 'rgb(0, 188, 212)' }}/> Dart
                </li>
                <li data-description="Using C# for application and game development">
                  <SiSharp style={{ color: 'rgb(138, 43, 226)' }} /> C#
                </li>
                <li data-description="Designing websites with React">
                  <SiReact style={{ color: 'rgb(97, 218, 251)' }}/> React
                </li>
                <li data-description="Managing design of the website with Tailwind">
                  <SiTailwindcss style={{ color: 'rgb(59, 130, 246)' }}/> Tailwind
                </li>                
                <li data-description="Creating interactive web content with JavaScript">
                  <FaJs style={{ color: 'rgb(255, 221, 51)' }}/> JavaScript
                </li>
                <li data-description="Designing styles and layouts with CSS">
                  <FaCss3Alt style={{ color: 'rgb(38, 87, 255)' }} /> CSS
                </li>
                <li data-description="Developing user interfaces with HTML">
                  <FaHtml5 style={{ color: 'rgb(239, 41, 41)' }}/> HTML
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Backend</h4>
              <ul>
                <li data-description="Managing data with the NoSQL database MongoDB">
                  <SiMongodb style={{ color: 'rgb(0, 184, 69)' }}/> MongoDB
                </li>
                <li data-description="Managing data with Microsoft SQL Server database">
                  <FaDatabase style={{ color: 'rgb(38, 87, 255)' }}/> Ms SQL
                </li>
                <li data-description="Backend-as-a-Service platform for scalable apps">
                  <SiSupabase style={{ color: 'rgb(34, 197, 94)' }}/> Supabase
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Frameworks</h4>
              <ul>
                <li data-description="Building cross-platform mobile applications with Flutter">
                  <SiFlutter style={{ color: 'rgb(66, 133, 244)' }}/> Flutter
                </li>
                <li data-description="Developing server-side rendered applications with Next.js">
                  <SiNextdotjs style={{ color: 'rgb(169, 169, 169)' }}/> Next.js
                </li>
                <li data-description="Building enterprise-level applications with .NET framework">
                  <SiDotnet style={{ color: 'rgb(101, 101, 255)' }}/> .NET
                </li>
                <li data-description="Creating 2D and 3D games using Unity engine">
                  <SiUnity style={{ color: 'rgb(53, 58, 155)' }}/> Unity
                </li>
              </ul>
            </div>
          </div>
        </section>  

        <section className="experience" id="experience" style={{marginTop: 100, marginBottom: 100}}>
          <h2 className="sectionTitle spaceFont">{language === 'en' ? "Experience" : "Deneyim"}</h2>
          
          <div className="toggle-container">
            <button 
              className={`toggle-btn ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              {language === 'en' ? "Work" : "İş"}
            </button>
            <button 
              className={`toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              {language === 'en' ? "Education" : "Eğitim"}
            </button>
          </div>

          <div className="timeline">
            {activeTab === 'work' ? (
              <>
                <div className="timeline-item">
                  <div className="timeline-date">{language === 'en' ? "2024 April - 2024 June" : "2024 Nisan - 2024 Haziran"}</div>
                  <div className="timeline-content">
                    <h3>{language === 'en' ? "Intern Flutter" : "Flutter Stajyeri"}</h3>
                    <h4>Phi Software</h4>
                    <p>{language === 'en' ? "Learned about mobile development environment and used Flutter and Dart to build an app that also uses calls for API" : "Mobil geliştirme ortamını öğrendim ve API çağrıları yapan bir uygulama geliştirmek için Flutter ve Dart kullandım."}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">{language === 'en' ? "2022 June - 2022 August" : "2022 Haziran - 2022 Ağustos"}</div>
                  <div className="timeline-content">
                    <h3>{language === 'en' ? "Intern DevOps" : "DevOps Stajyeri"}</h3>
                    <h4>{language === 'en' ? "Trabzon Ortahisar Municipality" : "Trabzon Ortahisar Belediyesi"}</h4>
                    <p>{language === 'en' ? "Learned about Git, DevOps and .NET project environment." : "Git, DevOps ve .NET proje ortamını öğrendim."}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="timeline-item">
                  <div className="timeline-date">{language === 'en' ? "2018 Sept. - 2024 June" : "2018 Eylül - 2024 Haziran"}</div>
                  <div className="timeline-content">
                    <h3>{language === 'en' ? "Computer Engineering" : "Bilgisayar Mühendisliği"}</h3>
                    <h4>{language === 'en' ? "Duzce University" : "Düzce Üniversitesi"}</h4>
                    <p>{language === 'en' ? "Bachelor's Degree • GPA: 2.99" : "Lisans Diploması • Not Ortalaması: 2.99"}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
