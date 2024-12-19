import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Layers, Globe } from "lucide-react";

const projectIcons = {
  "Triangulation of Aerial and Satellite": Globe,
  "3D Cartography": Layers,
  "Digital Terrain Models": MapPin,
  "LiDAR Capabilities": Layers,
  "GIS Capabilities": MapPin,
  "Orthophoto Generation": Globe
};

const projects = [

  {
    name: "3D Cartography",
    description:
      "Our 3D Cartography projects involve the creation of detailed map data for various scales using advanced aerial and satellite sensors.",
    image: "/images/project-images/projects_description/project-img2.jpg",
    slug: "3d-cartography",
  },
  {
    name: "Digital Terrain Models",
    description:
      "We specialize in producing high-resolution Digital Terrain Models with cost-effective methods to assist in planning and decision-making.",
    image: "/images/project-images/projects_description/project-img3.jpg",
    slug: "digital-terrain-models",
  },
  {
    name: "LiDAR Capabilities",
    description:
      "We offer advanced LiDAR point cloud processing to generate precise 3D models, verified for accuracy through predefined macros.",
    image: "/images/project-images/projects_description/project-img4.jpg",
    slug: "lidar-capabilities",
  },
  {
    name: "Triangulation of Aerial and Satellite",
    description:
      "We describe the Triangulation (aerial/satellite) projects which have been executed recently, with various sensors like Aerial Frame & Digital, ADS40, and Satellite.",
    image: "/images/project-images/projects_description/project-img1.jpg",
    slug: "triangulation-of-aerial-and-satellite",
  },
  {
    name: "GIS Capabilities",
    description:
      "Our GIS capabilities include the generation of cartographic maps based on orthophotos for planning and analysis.",
    image: "/images/project-images/projects_description/project-img5.jpg",
    slug: "gis-capabilities",
  },
  {
    name: "Orthophoto Generation",
    description:
      "We generate orthophotos that are distortion-free, providing precise measurements for mapping and analysis.",
    image: "/images/project-images/projects_description/project-img6.jpg",
    slug: "orthophoto-generation",
  },
];

const ProjectDomains = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-12 tracking-tight">
            Explore Our Projects
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const ProjectIcon = projectIcons[project.name];
            return (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2 transform">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <ProjectIcon 
                          className="text-blue-600 bg-blue-50 rounded-full p-2" 
                          size={40} 
                        />
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-blue-600 font-medium text-sm">
                        Explore
                      </span>
                      <ArrowUpRight 
                        size={24} 
                        className="text-blue-600 group-hover:text-blue-800 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDomains;