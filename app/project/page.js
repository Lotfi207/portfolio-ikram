import React from 'react'
import Image from "next/image"
import Link from "next/link"


const projects = [
  {
    name: "Best and Cheap ",
    description:
      "Ce projet consiste à créer un site web de vente d'articles électroniques en ligne dans le but de faciliter l'achat et la vente de produits neufs ainsi que d'occasions avantageuses. Notre rôle est d'agir en tant qu'intermédiaire entre les entreprises d'électronique telles qu'Apple, Samsung, Asus, HP, Google, etc., et les acheteurs en exposant des produits intéressants en termes de qualité et de prix. De plus, les clients ont la possibilité de trouver des articles d'occasion en bon état, car nous acceptons et vendons des produits déjà utilisés.",
    image: "/bestAndCheap.png",
    
    skills: "react.js,node.js,sqlserver",
  },
  {
    name: "site Web club sportif ",
    description:"ce projet pour un club de sport c'est pour donner a un administrateur le droit pour ajouter des cours ,les supprimers et les modifiers  et aussi pour donner au client le droit de se connecter et de voir les cours dont ils est inscrits ... ",
    skills: "Node.js,sqlite,handlebars",
    image: "/projet2.png",

  },
   
 
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                   
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <h3 className="text-2xl font-bold mb-6">Skills:</h3>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">

                      {project.skills}

                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      
                    </div>
                  </div>
                </div>
             
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection