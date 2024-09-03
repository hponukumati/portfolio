import React from 'react';
import projects from '../data/projects'; // Adjust the path as necessary

const Projects = () => {
  return (
    <><h1 className='text-4xl font-bold'>Projects</h1><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {projects.map((project, index) => (
              <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
                  <figure>
                      <img
                          src={project.imageUrl}
                          alt={project.title} />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">{project.title}</h2>
                      <p>{project.description}</p>
                      <div className="card-actions justify-end">
                          <a href={project.buttonLink} target="_blank" rel="noopener noreferrer">
                              <button className="btn btn-primary">{project.buttonText}</button>
                          </a>
                      </div>
                  </div>
              </div>
          ))}
      </div></>
  );
};

export default Projects;
