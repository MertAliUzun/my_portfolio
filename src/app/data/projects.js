import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiTailwindcss, SiFlutter, SiApachehive ,SiThemoviedatabase , SiOpenai, SiNextdotjs, SiDotnet, SiUnity, SiSupabase, SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';

export const projects = {
  zenMovieCollection: {
    title: {
      en: "Zen: Movie Collection",
      tr: "Zen: Movie Collection"
    },
    description: {
      en: "An app for managing your movie collections and watch lists.",
      tr: "Film koleksiyon ve izleme listelerinizi yönetmek için kullanılan bir uygulama"
    },
    image: "/zen_movie_app.png",
    animationPath: "/zen_movie_app.json",
    platform: {
      en: "Mobile Applications",
      tr: "Mobil Uygulamalar"
    },
    features: [
      {
        en: "Users can add movies to collection and watch list and manage those movies.",
        tr: "Kullanıcılar filmleri koleksiyonlarına ve izleme listelerine ekleyebilir ve bu filmleri yönetebilirler."
      },
      {
        en: "Local-first storage system with Flutter Hive",
        tr: "Flutter Hive ile yerel öncelikli depolama sistemi"
      },
      {
        en: "User system with Google Sign-In",
        tr: "Google Girişi ile kullanıcı sistemi"
      },
      {
        en: "Movies can be exported to and imported from CSV files",
        tr: "Filmler CSV dosyalarına aktarılabilir ve CSV dosyalarından içeri aktarılabilir"
      }, 
      {
        en: "Users can search for movies with TMDB API",
        tr: "Kullanıcılar TMDB API'si ile filmleri arayabilirler"
      },
      {
        en: "Different views, sorting and group by options for movies",
        tr: "Filmler için farklı görünüm, sıralama ve gruplayarak görüntüleme seçenekleri"
      },
      {
        en: "Get movie recommendations from AI with all kinds of parameters you wish",
        tr: "Yapay zeka'dan istediğin her parametreye göre film tavsiyesi al"
      },
      {
        en: "Discover movies with latest, upcoming and popular sections",
        tr: "son çıkanlar, yakında çıkacaklar ve popülerler kısmından film keşfet"
      },
      {
        en: "Guide for where to watch the movie (Stream, Buy, Rent)",
        tr: "Filmi nerede izleyebileceğinize dair rehber (Yayınla, Satın Al, Kirala)"
      },
      {
        en: "Similar movie recommendation system",
        tr: "Benzer film öneri sistemi"
      },
      {
        en: "Daily, weekly and monthly popular movies for selected genre",
        tr: "Seçilen tür için günlük, haftalık ve aylık popüler filmler"
      },
      {
        en: "Director, actor, writer and company screens that shows related movies",
        tr: "Yönetmen, oyuncu, senarist ve şirket ekranları, ilgili filmleri gösterir"
      },
      {
        en: "Production Company screen",
        tr: "Yapım Şirketi ekranı"
      },
      {
        en: "Multi-language system that detects and adapts to your device language",
        tr: "Cihazınızın dilini algılayan ve buna uyum sağlayan çok dilli sistem"
      },
      {
        en: "https://www.zenmoviecollection.com/",
        tr: "https://www.zenmoviecollection.com/"
      }
    ],
    icons: [SiFlutter, SiDart, SiSupabase, SiThemoviedatabase],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)', 'rgb(60, 208, 139)', 'rgb(67, 186, 191)'],
    technologies: ["Flutter", "Dart", "Supabase", "TMDB API"],
    demoUrl: "https://drive.google.com/file/d/1OfJYGid8Rnz8rBxXwLeJI4zVjM4M5pD5/view?usp=sharing",
    githubUrl: "https://github.com/MertAliUzun/movie_collections_mobile"
  },
  gokturk: {
    title: {
      en: "GökTürk: Translate and Learn",
      tr: "GökTürk: Çeviri ve Öğrenme"
    },
    description: {
      en: "An App to Learn and Translate Göktürk. Also has Dictionary, Proverbs and Inscriptions",
      tr: "Göktürk'ü Öğrenmek ve Çeviri Yapmak için Bir Uygulama. Ayrıca Sözlük, Atasözleri ve Yazıtlar içerir."
    },
    image: "/gokturk_app.png",
    animationPath: "/gokturk_app.json",
    platform: {
      en: "Mobile Applications",
      tr: "Mobil Uygulamalar"
    },
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
    demoUrl: "https://drive.google.com/file/d/1AKtj5O6m7vDrev0TdUoy2pgIQ7hXBd4R/view?usp=sharing",
    githubUrl: "https://github.com/MertAliUzun/todo_app"
  },
  todoAI: {
    title: {
      en: "Todo AI",
      tr: "Todo AI"
    },
    description: {
      en: "Todo ai",
      tr: "Todo ai"
    },
    image: "/todo_app.png",
    animationPath: "/todo_app.json",
    platform: {
      en: "Mobile Applications",
      tr: "Mobil Uygulamalar"
    },
    features: [
      {
        en: "test",
        tr: "test"
      },
    ],
    icons: [SiFlutter, SiDart, SiOpenai],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)'],
    technologies: ["Flutter", "Dart", "OpenAI"],
    demoUrl: "https://drive.google.com/file/d/1udYOr1zk8q7LDWJiDbvwYqUc88Ip2O9y/view?usp=sharing",
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
    platform: {
      en: "Mobile Applications",
      tr: "Mobil Uygulamalar"
    },
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
    demoUrl: "https://drive.google.com/file/d/1udYOr1zk8q7LDWJiDbvwYqUc88Ip2O9y/view?usp=sharing",
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
    platform: {
      en: "Web Applications",
      tr: "Web Uygulamaları"
    },
    features: [
      {
        en: "This Project uses OMDB API",
        tr: "Bu Proje OMDB API'sini Kullanıyor"
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
    platform: {
      en: "Web Applications",
      tr: "Web Uygulamaları"
    },
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
    platform: {
      en: "Desktop Applications",
      tr: "Masaüstü Uygulamaları"
    },
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