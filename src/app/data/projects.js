import gokturkAnimation from "../../../public/gokturk_app.json";
import weatherAnimation from "../../../public/weather_app.json";
import hmsAnimation from "../../../public/hms.json";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiMysql, SiFlutter, SiNextdotjs, SiDotnet, SiUnity, SiSupabase } from 'react-icons/si';


export const projects = {
  gokturk: {
    title: "GökTürk App",
    description: "Göktürkçe Öğrenme, Çeviri, Kurallar ve Sözlük Uygulaması",
    image: "/gokturk_app.png",
    animation: gokturkAnimation,
    features: [
      "Türkçe-Göktürkçe çeviri",
      "Göktürkçe yazı sistemi kuralları",
      "Kapsamlı Göktürkçe sözlük",
      "Göktürkçe klavye",
      "Offline kullanım desteği",
      "Göktürkçe metin paylaşımı",
      "Göktürkçe öğrenme rehberi"
    ],
    technologies: ["Flutter", "Dart"],
    demoUrl: "https://play.google.com/store/apps/details?id=your_app_id",
    githubUrl: "https://github.com/username/gokturk-app"
  },
  taskManager: {
    title: "Weather App",
    description: "Ekip çalışmasını kolaylaştıran proje yönetim aracı",
    image: "/weather_app.png",
    animation: weatherAnimation,
    features: [
      "Görev oluşturma ve atama",
      "Proje takibi",
      "Ekip yönetimi",
      "Bildirim sistemi",
      "Takvim entegrasyonu",
      "Dosya paylaşımı",
      "İlerleme raporları"
    ],
    technologies: ["Flutter", "Dart"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project"
  },
  hms: {
    title: "Hospital Management System",
    description: "SEO dostu, performanslı blog sistemi",
    image: "/hms.png",
    animation:hmsAnimation,
    features: [
      "SEO optimizasyonu",
      "Markdown desteği",
      "Yorum sistemi",
      "Kategori ve etiket yönetimi",
      "Responsive tasarım",
      "Sosyal medya paylaşımı",
      "Analytics entegrasyonu"
    ],
    technologies: ["C#", ".Net", "My SQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project"
  }
}; 