import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Project data (extracted from the document)
const projects = [
  {
    id: 1,
    title: '01AD0',
    details: {
      'Project Volume': '532608 ha',
      'Scale': '5000',
      'Output': 'ASCII DTM/TIN model in DGN format'
    },
    description: 'The client provided Digital Aerial Images. They have been triangulated using ground control points. Once the AT results are approved by client the DTM elements have been compiled with our standard practices and by break line, mass points and streams.',
    images: 3
  },
  {
    id: 2,
    title: '12ADL0',
    details: {
      'Project Volume': '13272.56 ha',
      'Scale': '1000',
      'Output': 'ASCII DTM'
    },
    description: 'The Project consists of DTM generation from LiDAR classified data and Photogrametrically compiled stream and break lines. First of all we have classified the LiDAR point cloud data into bare earth, buildings, vegetation and default classes. Secondly the streams and break lines have been compiled using photogrammetric method.',
    images: 2
  },

  {
    id: 3,
    title: '16D0',
    details: {
     'Project Volume': '23200 ha',
      'Scale': '2000',
      'Output': 'ASCII DTM(2m x 2m) '
    },
    description: 'The purpose of this project is generating Orthophoto of 0.15 GSD from stereo compiled break lines and mass points. The project setup has been done with the provided AT results and the mass points and break lines have been compiled. The quality of the data has been verified by generating TIN and surface models and in house tools.',
    images: 1
  },

  {
    id: 4,
    title: '13_103_001D0',
    details: {
     'Projecgt Volume': '2883 Sq Km',
      'Scale': '5000',
      'Output': 'ESRI ASCII GRID 5mx5m'
    },
    description: 'The purpose of the project is to generate orthophoto of 0.5m GSD with auto-correlated DEM. Auto DEM was generated from 4 band aerial images by using Inphos MATCH-T software and the terrain mainly consists of foresr and mountaneous area.',
    images: 1
  },

  // Add other projects similarly...
];

// Image Carousel Component
const ImageCarousel = ({ projectId, totalImages }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full max-w-md mx-auto group">
      <motion.div 
        className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={`/images/project-images/digitalterrainprojects/project-${projectId}-${currentImage + 1}.jpg`} 
          alt={`Project ${projectId} Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="text-gray-800" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          {currentImage + 1} / {totalImages}
        </div>
      </motion.div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-xl p-6 space-y-4 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-center font-bold text-gray-800">{project.title}</h2>
       
      </div>

      {/* Image Carousel */}
      <ImageCarousel projectId={project.id} totalImages={project.images} />

      {/* Project Details */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
        {Object.entries(project.details).map(([key, value]) => (
          <div key={key} className="flex justify-between border-b pb-1">
            <span className="font-medium">{key}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  );
};

// Main Projects Showcase Component
const DigitalTerrainProjects = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Digital Terrain Models
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTerrainProjects;