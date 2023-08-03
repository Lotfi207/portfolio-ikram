import React from 'react'
import Image from 'next/image'; // Import Image component from next
import { mesProjets } from '../mesProjets';

const Projet = ({ params }) => {
  const projetId = parseInt(params.id); // Ensure id is a number
  const project = mesProjets.find(p => p.id === projetId); // Find the project with matching id

  if (!project) {
    return <div>Project not found</div>; // Handle the case where the project doesn't exist
  }

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        {project.name}
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-1/2">
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={1000}
            className="rounded-xl shadow-xl hover:opacity-70"
          />
        </div>
        <div className="mt-8 md:w-1/2">
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <h3 className="text-2xl font-bold mb-6">Technologies Utilisées</h3>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {project.skills}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projet;
