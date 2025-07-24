import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from './projectsData';
import type { Project } from './projectsData';

interface ProjectDetailsParams extends Record<string, string> {
  id: string;
}

interface ProjectImageProps {
  image: string;
  index: number;
  projectTitle: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, index, projectTitle }) => (
  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <img 
      src={image} 
      alt={`${projectTitle} - ${index + 1}`}
      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
  </div>
);

interface ProjectFeatureProps {
  feature: string;
  index: number;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({ feature }) => (
  <li className="flex items-start">
    <svg 
      className="h-5 w-5 text-[#FF13F0] mr-2 mt-0.5 flex-shrink-0" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
        clipRule="evenodd" 
      />
    </svg>
    <span className="text-gray-700">{feature}</span>
  </li>
);

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<ProjectDetailsParams>();
  const navigate = useNavigate();
  const project = projectsData.find((p: Project) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="mt-4 px-6 py-2 bg-[#FF13F0] text-white rounded-md hover:bg-[#FF13F0]/90 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,19,240,0.3)]"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-[#FF13F0] hover:text-[#FF13F0]/80 mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Projects
      </button>

      {/* Main Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <span className="px-3 py-1 bg-[#FF13F0]/10 text-[#FF13F0] rounded-full text-sm font-medium border border-[#FF13F0]/20">
            {project.serviceType}
          </span>
          <span>•</span>
          <span>Completed in {project.year}</span>
          {project.location && (
            <>
              <span>•</span>
              <span>{project.location}</span>
            </>
          )}
          {project.size && (
            <>
              <span>•</span>
              <span>{project.size}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Project Details */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {project.longDescription}
          </p>
          
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features?.map((feature, index) => (
                  <ProjectFeature key={index} feature={feature} index={index} />
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Project Info Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-gray-600">Service Type</span>
                <span className="font-medium text-gray-900">{project.serviceType}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Year</span>
                <span className="font-medium text-gray-900">{project.year}</span>
              </li>
              {project.budget && (
                <li className="flex justify-between">
                  <span className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#FF13F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Budget
                  </span>
                  <span className="font-medium text-gray-900">{project.budget}</span>
                </li>
              )}
              {project.duration && (
                <li className="flex justify-between">
                  <span className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#FF13F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration
                  </span>
                  <span className="font-medium text-gray-900">{project.duration}</span>
                </li>
              )}
              {project.location && (
                <li className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">{project.location}</span>
                </li>
              )}
              {project.size && (
                <li className="flex justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium text-gray-900">{project.size}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      {project.images.length > 1 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.slice(1).map((image, index) => (
              <ProjectImage 
                key={index} 
                image={image} 
                index={index} 
                projectTitle={project.title} 
              />
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-20 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a similar project in mind?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to bring your vision to life. Get in touch with us today to discuss your project requirements.
        </p>
        <button 
          onClick={() => navigate('/get-a-quote')}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
