'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projects } from '../../data/projects';


export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

  return (
    <div className="projectDetail">
      <div className="projectHero">
        <Image
          src={project.image}
          alt={project.title}
          width={800} //1130
          height={400} //630
          objectFit="cover"
        />
      </div>
      
      <div className="projectContent">
        <h1>{project.title}</h1>
        <p className="projectDescription">{project.description}</p>

        <div className="projectFeatures">
          <h2>Özellikler</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="projectTechnologies">
          <h2>Kullanılan Teknolojiler</h2>
          <div className="tags">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="projectLinks">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="projectBtn">
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="projectBtn">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
} 