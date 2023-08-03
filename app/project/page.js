import React from 'react'
import Image from "next/image"
import { mesProjets } from './mesProjets';
import Link from 'next/link'
import './ProjectsSection.css'

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="projects-grid">
        {mesProjets.map((project, idx) => {
          return (
            <div key={idx} className="project-card hover:scale-105 transform transition-transform duration-300">
              
              <Link href={`/project/${project.id}`}>
                <div className="project-content">
                  <div className="project-title text-4xl font-bold mb-6 cursor-pointer hover:underline">
                    {project.name}
                  </div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="project-image rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
                  />
                </div>
              </Link>
              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection;
