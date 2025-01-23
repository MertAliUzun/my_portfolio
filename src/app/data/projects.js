import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSupabase } from 'react-icons/fa';
import { SiSharp, SiDart, SiMongodb, SiMysql, SiFlutter, SiNextdotjs, SiDotnet, SiUnity, SiSupabase, SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';

export const projects = {
  gokturk: {
    title: "GökTürk App",
    description: "An App to Learn and Translate Göktürk. Also has Dictionary, Proverbs and Inscriptions",
    image: "/gokturk_app.png",
    animationPath: "/gokturk_app.json",
    features: [
      "Translate From Latin Turkish to Gokturk",
      "Alphabet of Gokturk",
      "Rules of Gokturk Alphabet",
      "Gokturk Dictionary That can be Searched With Both Latin and Gokturk letters",
      "Gokturk Proverbs",
      "Gokturk Alphabet-Latin Alphabet and Modern Turkish Translation of Orkhon Inscriptions",
    ],
    icons: [SiFlutter, SiDart],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)'],
    technologies: ["Flutter", "Dart"],
    demoUrl: "none",
    githubUrl: "https://github.com/MertAliUzun/gokturk_alphabet"
  },
  taskManager: {
    title: "Weather App",
    description: "An App that shows Weather Related Data for Chosen Location",
    image: "/weather_app.png",
    animationPath: "/weather_app.json",
    features: [
      "Uses OpenWeatherMap API for Data",
      "Asks for Location Permission",
      "Shows Data for Your Location",
      "Can Choose Another Location for Weather",
      "Can Search Location",
      "Weather is Shown for Current, Every 3 Hours, and Everyday for Next 5 Days",
      "Can Show; Weather, Wind Speed, Humidity and Temperature"
    ],
    icons: [SiFlutter, SiDart],
    iconColors: ['rgb(66, 133, 244)', 'rgb(0, 188, 212)'],
    technologies: ["Flutter", "Dart"],
    demoUrl: "none",
    githubUrl: "https://github.com/MertAliUzun/weather_app"
  },
  hms: {
    title: "Hospital Management System",
    description: "This App can be Used by Doctors and Secretaries to Manage Hospital Business",
    image: "/hms.png",
    animationPath: "/hms.json",
    features: [
      "Multi-Layered Design Architecture",
      "Database Models for Appointments, Secretaries, Doctors, Patients",
      "Login System that Detects if You are an Secretary or a Doctor",
      "Doctors can Record their Chat with Patients",
      "They can See Health Documents and Handle Prescriptions",
      "Secretaries can CRUD all Models",
      "Secretaries Create Appointments if the Doctor's Experties and Patients Problem Match",
    ],
    icons: [SiSharp, SiDotnet, FaDatabase],
    iconColors: ['rgb(138, 43, 226)', 'rgb(101, 101, 255)', 'rgb(38, 87, 255)'],
    technologies: ["C#", ".Net", "Ms SQL"],
    demoUrl: "https://github.com/MertAliUzun/HMS/tree/main/Setup",
    githubUrl: "https://github.com/MertAliUzun/HMS"
  },
  movie_web: {
    title: "Movie Collection Web App",
    description: "Users Can Add and Manage Their Movies in Their Collections and Wishlists",
    image: "/movie_web.png",
    animationPath: "/movie_web.json",
    features: [
      "This Project uses TMDB API",
      "Movies can be Searched",
      "Login and Register System",
      "You can Add a Movie to Collection or Wishlist",
      "Every Movie is Added to Logged in User",
      "Movies can be Edited and Deleted",
      "Movies can be Rated",
      "Sorting System",
    ],
    icons: [SiNextdotjs, SiMongodb, SiReact, SiJavascript, SiHtml5, SiCss3],
    iconColors: ['rgb(169, 169, 169)', 'rgb(0, 184, 69)', 'rgb(97, 218, 251)', 'rgb(255, 221, 51)', 'rgb(38, 87, 255)', 'rgb(239, 41, 41)'],
    technologies: ["NextJS", "MongoDB", "React", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://moviecollection-gamma.vercel.app/",
    githubUrl: "https://github.com/MertAliUzun/movie_collection"
  },
  moving_company: {
    title: "Moving Company Website",
    description: "This Website Advertises Company and Helps Customers Track Their Cargo",
    image: "/moving_company.png",
    animationPath: "/moving_company.json",
    features: [
      "Cargos are Recorded",
      "Customers can Track Cargos with Track No",
      "Location, Time and State of Cargos can be Tracked",
      "Customer Comments",
      "Services are Explained",
      "Where Company Provides Services is Shown",
      "FAQ Section",
      "Contact Section"
    ],
    icons: [SiNextdotjs, SiMongodb, SiReact, SiJavascript, SiHtml5, SiCss3],
    iconColors: ['rgb(169, 169, 169)', 'rgb(0, 184, 69)', 'rgb(97, 218, 251)', 'rgb(255, 221, 51)', 'rgb(38, 87, 255)', 'rgb(239, 41, 41)'],
    technologies: ["NextJS", "MongoDB", "React", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://www.nakliyatvatan.com.tr/",
    githubUrl: "https://github.com/MertAliUzun/movingcompweb"
  }
}; 