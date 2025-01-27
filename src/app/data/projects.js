import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiTailwindcss, SiFlutter, SiNextdotjs, SiDotnet, SiUnity, SiSupabase, SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';

export const projects = {
  gokturk: {
    title: {
      en: "GökTürk App",
      tr: "GökTürk Uygulaması"
    },
    description: {
      en: "An App to Learn and Translate Göktürk. Also has Dictionary, Proverbs and Inscriptions",
      tr: "Göktürk'ü Öğrenmek ve Çeviri Yapmak için Bir Uygulama. Ayrıca Sözlük, Atasözleri ve Yazıtlar içerir."
    },
    image: "/gokturk_app.png",
    animationPath: "/gokturk_app.json",
    platform: "--- Mobile Applications ---",
    features: [
      {
        en: "Translate From Latin Turkish to Gokturk",
        tr: "Latin Türkçesinden Göktürkçeye Çeviri"
      },
      {
        en: "Alphabet of Gokturk",
        tr: "Göktürk Alfabesi"
      },
      {
        en: "Rules of Gokturk Alphabet",
        tr: "Göktürk Alfabesi Kuralları"
      },
      {
        en: "Gokturk Dictionary That can be Searched With Both Latin and Gokturk letters",
        tr: "Hem Latin Hem de Göktürk Harfleri ile Aranabilen Göktürk Sözlüğü"
      },
      {
        en: "Gokturk Proverbs",
        tr: "Göktürk Atasözleri"
      },
      {
        en: "Gokturk Alphabet-Latin Alphabet and Modern Turkish Translation of Orkhon Inscriptions",
        tr: "Göktürk Alfabesi-Latin Alfabesi ve Orkhon Yazıtlarının Modern Türkçeye Çevirisi"
      },
    ],
    icons: [SiFlutter, SiDart],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)'],
    technologies: ["Flutter", "Dart"],
    demoUrl: "none",
    githubUrl: "https://github.com/MertAliUzun/gokturk_alphabet"
  },
  weatherApp: {
    title: {
      en: "Weather App",
      tr: "Hava Durumu Uygulaması"
    },
    description: {
      en: "An App that shows Weather Related Data for Chosen Location",
      tr: "Seçilen Konum için Hava Durumu ile İlgili Verileri Gösteren Bir Uygulama"
    },
    image: "/weather_app.png",
    animationPath: "/weather_app.json",
    platform: "--- Mobile Applications ---",
    features: [
      {
        en: "Uses OpenWeatherMap API for Data",
        tr: "Veri için OpenWeatherMap API'sini Kullanır"
      },
      {
        en: "Asks for Location Permission",
        tr: "Konum İzni İster"
      },
      {
        en: "Shows Data for Your Location",
        tr: "Kendi Konumunuz için Verileri Gösterir"
      },
      {
        en: "Can Choose Another Location for Weather",
        tr: "Hava Durumu için Başka Bir Konum Seçebilir"
      },
      {
        en: "Can Search Location",
        tr: "Konum Arayabilir"
      },
      {
        en: "Weather is Shown for Current, Every 3 Hours, and Everyday for Next 5 Days",
        tr: "Hava Durumu Mevcut, Her 3 Saate Bir ve Önümüzdeki 5 Gün için Gösterilir"
      },
      {
        en: "Can Show; Weather, Wind Speed, Humidity and Temperature",
        tr: "Hava, Rüzgar Hızı, Nem ve Sıcaklık Gösterir"
      }
    ],
    icons: [SiFlutter, SiDart],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)'],
    technologies: ["Flutter", "Dart"],
    demoUrl: "none",
    githubUrl: "https://github.com/MertAliUzun/weather_app"
  },
  movie_web: {
    title: {
      en: "Movie Collection Web App",
      tr: "Film Koleksiyonu Web Uygulaması"
    },
    description: {
      en: "Users Can Add and Manage Their Movies in Their Collections and Wishlists",
      tr: "Kullanıcılar Filmlerini Koleksiyonlarına ve İstek Listelerine Ekleyebilir ve Yönetebilir"
    },
    image: "/movie_web.png",
    animationPath: "/movie_web.json",
    platform: "--- Websites ---",
    features: [
      {
        en: "This Project uses TMDB API",
        tr: "Bu Proje TMDB API'sini Kullanıyor"
      },
      {
        en: "Movies can be Searched",
        tr: "Filmler Aranabilir"
      },
      {
        en: "Login and Register System",
        tr: "Giriş ve Kayıt Sistemi"
      },
      {
        en: "You can Add a Movie to Collection or Wishlist",
        tr: "Bir Filmi Koleksiyona veya İstek Listesine Ekleyebilirsiniz"
      },
      {
        en: "Every Movie is Added to Logged in User",
        tr: "Her Film Giriş Yapmış Kullanıcıya Eklenir"
      },
      {
        en: "Movies can be Edited and Deleted",
        tr: "Filmler Düzenlenebilir ve Silinebilir"
      },
      {
        en: "Movies can be Rated",
        tr: "Filmler Puanlanabilir"
      },
      {
        en: "Sorting System",
        tr: "Sıralama Sistemi"
      },
    ],
    icons: [SiNextdotjs, SiMongodb, SiReact, SiJavascript, SiHtml5, SiCss3],
    iconColors: ['rgb(169, 169, 169)', 'rgb(0, 184, 69)', 'rgb(97, 218, 251)', 'rgb(255, 221, 51)', 'rgb(38, 87, 255)', 'rgb(239, 41, 41)'],
    technologies: ["NextJS", "MongoDB", "React", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://moviecollection-gamma.vercel.app/",
    githubUrl: "https://github.com/MertAliUzun/movie_collection"
  },
  moving_company: {
    title: {
      en: "Moving Company Website",
      tr: "Taşımacılık Şirketi Web Sitesi"
    },
    description: {
      en: "This Website Advertises Company and Helps Customers Track Their Cargo",
      tr: "Bu Web Sitesi Şirketi Tanıtır ve Müşterilerin Kargolarını Takip Etmelerine Yardımcı Olur"
    },
    image: "/moving_company.png",
    animationPath: "/moving_company.json",
    platform: "--- Websites ---",
    features: [
      {
        en: "Cargos are Recorded",
        tr: "Kargolar Kaydedilir"
      },
      {
        en: "Customers can Track Cargos with Track No",
        tr: "Müşteriler Takip Numarası ile Kargoları Takip Edebilir"
      },
      {
        en: "Location, Time and State of Cargos can be Tracked",
        tr: "Kargoların Konumu, Zamanı ve Durumu Takip Edilebilir"
      },
      {
        en: "Customer Comments",
        tr: "Müşteri Yorumları"
      },
      {
        en: "Services are Explained",
        tr: "Hizmetler Açıklanır"
      },
      {
        en: "Where Company Provides Services is Shown",
        tr: "Şirketin Hizmet Verdiği Yerler Gösterilir"
      },
      {
        en: "FAQ Section",
        tr: "SSS Bölümü"
      },
      {
        en: "Contact Section",
        tr: "İletişim Bölümü"
      },
    ],
    icons: [SiNextdotjs, SiMongodb, SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3],
    iconColors: ['rgb(169, 169, 169)', 'rgb(0, 184, 69)', 'rgb(97, 218, 251)', 'rgb(59, 130, 246)', 'rgb(255, 221, 51)', 'rgb(38, 87, 255)', 'rgb(239, 41, 41)'],
    technologies: ["NextJS", "MongoDB", "React", "Tailwind", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://www.nakliyatvatan.com.tr/",
    githubUrl: "https://github.com/MertAliUzun/movingcompweb"
  },
  hms: {
    title: {
      en: "Hospital Management System",
      tr: "Hastane Yönetim Sistemi"
    },
    description: {
      en: "This App can be Used by Doctors and Secretaries to Manage Hospital Business",
      tr: "Bu Uygulama Doktorlar ve Sekreterler Tarafından Hastane İşlerini Yönetmek için Kullanılabilir"
    },
    image: "/hms.png",
    animationPath: "/hms.json",
    platform: "--- Desktop Programs ---",
    features: [
      {
        en: "Multi-Layered Design Architecture",
        tr: "Çok Katmanlı Tasarım Mimarisi"
      },
      {
        en: "Database Models for Appointments, Secretaries, Doctors, Patients",
        tr: "Randevular, Sekreterler, Doktorlar ve Hastalar için Veritabanı Modelleri"
      },
      {
        en: "Login System that Detects if You are an Secretary or a Doctor",
        tr: "Sekreter veya Doktor Olduğunuzu Tespit Eden Giriş Sistemi"
      },
      {
        en: "Doctors can Record their Chat with Patients",
        tr: "Doktorlar Hastalarla Yaptıkları Görüşmeleri Kaydedebilir"
      },
      {
        en: "They can See Health Documents and Handle Prescriptions",
        tr: "Sağlık Belgelerini Görebilir ve Reçeteleri Yönetebilirler"
      },
      {
        en: "Secretaries can CRUD all Models",
        tr: "Sekreterler Tüm Modelleri CRUD İşlemleri Yapabilir"
      },
      {
        en: "Secretaries Create Appointments if the Doctor's Experties and Patients Problem Match",
        tr: "Sekreterler, Doktorun Uzmanlığı ve Hastanın Problemi Eşleşirse Randevu Oluşturabilir"
      },
    ],
    icons: [SiSharp, SiDotnet, FaDatabase],
    iconColors: ['rgb(138, 43, 226)', 'rgb(101, 101, 255)', 'rgb(38, 87, 255)'],
    technologies: ["C#", ".Net", "Ms SQL"],
    demoUrl: "https://github.com/MertAliUzun/HMS/tree/main/Setup",
    githubUrl: "https://github.com/MertAliUzun/HMS"
  },
}; 