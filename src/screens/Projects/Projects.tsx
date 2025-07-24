import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../ProjectDetails/projectsData';

export const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewDetails = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-12 text-center">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full border border-border">
            <div 
              className="aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer"
              onClick={() => handleViewDetails(project.id)}
            >
              <img 
                src={project.images[0]}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-foreground mb-2 line-clamp-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 text-[#FF13F0] text-sm font-medium rounded-full border border-[#FF13F0]/20 bg-[#FF13F0]/10">
                    {project.serviceType}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground/80 text-sm">
                  <span>Completed: {project.year}</span>
                  {project.location && <span>• {project.location}</span>}
                </div>
              </div>
              <button
                onClick={() => handleViewDetails(project.id)}
                className="mt-4 w-[40%] mx-auto px-6 py-2.5 bg-transparent border-1.5 border-[#FF13F0] text-[#FF13F0] rounded-lg hover:bg-[#FF13F0]/10 transition-all duration-300 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">View Details</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
