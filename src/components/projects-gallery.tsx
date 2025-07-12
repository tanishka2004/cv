import { projectsData, miniProjectsData } from '@/data/projects';
import ProjectCard from './project-card';

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Projects Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            My <span className="gradient-text">Creations</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A selection of projects that showcase my passion for development and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {/* Mini Projects Section */}
        <div className="text-center mt-16 mb-8">
          <h3 className="text-2xl font-bold tracking-tight">Mini Projects</h3>
          <p className="mt-2 text-base text-muted-foreground max-w-xl mx-auto">
            Some small projects and experiments I've built along the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjectsData.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
