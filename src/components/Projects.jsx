import React from 'react';
import projects from '../data/projects'; // Adjust the path as necessary

const Projects = () => {
    return (
      <>
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded-xl">
              <div
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <figure>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </figure>
                {/* Card Body */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  {/* <p className="text-sm text-gray-600 mb-4">{project.description}</p> */}
                </div>
                {/* Hidden Button - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                  <a
                    href={project.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
                  >
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Projects;