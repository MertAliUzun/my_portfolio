'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState("avatar1.jpg");
  const [hoverAllowed, setHoverAllowed] = useState(true); 

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
          <h2 className="sectionTitle spaceFont">Projelerim</h2>
          <div className="grid">
            <div className="card">
              <h3 className="cardTitle">E-Ticaret Platformu</h3>
              <p>Modern bir e-ticaret deneyimi sunan full-stack uygulama</p>
              <div className="tags">
                <span>Next.js</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className="card">
              <h3 className="cardTitle">Task Yönetim Uygulaması</h3>
              <p>Ekip çalışmasını kolaylaştıran proje yönetim aracı</p>
              <div className="tags">
                <span>React</span>
                <span>Firebase</span>
                <span>Material-UI</span>
              </div>
            </div>
            <div className="card">
              <h3 className="cardTitle">Blog Platformu</h3>
              <p>SEO dostu, performanslı blog sistemi</p>
              <div className="tags">
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2 className="sectionTitle spaceFont">Yeteneklerim</h2>
          <div className="skillGrid">
            <div className="skillCard">
              <h4 className="skillTitle">Frontend</h4>
              <ul>
                <li data-description="Kullanıcı arayüzü geliştirme">
                  <i className="fab fa-react"></i> React
                </li>
                <li data-description="Sunucu tarafı geliştirme">
                  <i className="fas fa-code"></i> Next.js
                </li>
                <li data-description="Statik tip kontrolü">
                  <i className="fas fa-file-code"></i> TypeScript
                </li>
                <li data-description="CSS framework">
                  <i className="fab fa-css3-alt"></i> Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Backend</h4>
              <ul>
                <li data-description="JavaScript tabanlı sunucu">
                  <i className="fab fa-node-js"></i> Node.js
                </li>
                <li data-description="Web uygulamaları için framework">
                  <i className="fas fa-server"></i> Express
                </li>
                <li data-description="Veritabanı yönetim sistemi">
                  <i className="fas fa-database"></i> PostgreSQL
                </li>
                <li data-description="NoSQL veritabanı">
                  <i className="fas fa-database"></i> MongoDB
                </li>
              </ul>
            </div>
            <div className="skillCard">
              <h4 className="skillTitle">Araçlar</h4>
              <ul>
                <li data-description="Versiyon kontrol sistemi">
                  <i className="fab fa-git"></i> Git
                </li>
                <li data-description="Konteynerleştirme aracı">
                  <i className="fab fa-docker"></i> Docker
                </li>
                <li data-description="Bulut hizmetleri">
                  <i className="fab fa-aws"></i> AWS
                </li>
                <li data-description="Test çerçevesi">
                  <i className="fas fa-vial"></i> Jest
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
