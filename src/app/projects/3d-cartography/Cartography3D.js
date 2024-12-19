import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Project data (extracted from the document)
const projects = [
  {
    id: 1,
    title: 'Large Scale - Corridor Map',
    details: {
      'Map Scale': '1:500',
      'Contour Interval': '0.5m',
      'Area': '215.12 ha',
      'Camera':'ZI'
    },
    description: 'The main objective of this corridor project is for estimating work in transportation. We have compiled cartographic features like contours at 0.5m interva and each and every detail available in project area',
    images: 3
  },
  {
    id: 2,
    title: 'Large Scale - Urban Map',
    details: {
      'Map Scale': '1:1000',
      'Contour Interval': '1.0m',
      'Area': '2100 ha',
      'Camera': 'RMK Top 30',
    },
    description: 'The main purpose of this project is to generate the digital cartographic data for six different sectors. Contours have been compiled at interval of 1m and other cartographic features in project area have been restituted and digital data base has been generated',
    images: 1
  },

  {
    id: 3,
    title: 'Large Scale - Coastal Map',
    details: {
      'Map Scale': '1:2000',
      'Contour Interval': '2.0m',
      'Sensor': 'ADS40',
      'Area': '16984.5 ha'
    },
    description: 'The main purpose of this project is to generate the digital cartographic data for whole project area which includes urban and coastal area.',
    images: 1
  },

  {
    id: 4,
    title: 'Small Scale - Urban Map',
    details: {
      'Map Scale': 3,
      'Contour Interval':'5.0m',
      'Area': '302991.55 ha',
      'Camera': 'DMC',
    },
    description: 'The main purpose of this project is to generate the digital cartographic data for whole project area which includes urban, rural and coastal area.',
    images: 1
  },

  {
    id: 5,
    title: 'Medium Scale - Rural Map',
    details: {
      'Map Scale': '1:5000',
      'Contour Interval': '5.0m',
      'Area': '467277 ha',
      'Camera': 'Frame'
    },
    description: 'The main purpose of this project is to generate the digital topographic map from photogrammetrically compiles 3D data for whole project area which includes urban and rural',
    images: 1
  },

  {
    id: 6,
    title: 'From Satellite Imagery',
    details: {
      'Map Scale': '1:5000',
      'Contour Interval': '10.0m',
      'Area': '34203.6 ha',
      'Camera': 'World View 1'
    },
    description: 'The main purpose of Stereo compilation using World View 1 satellite images is obstacle forecast around airport area and Orthophoto generation',
    images: 2
  },

  {
    id: 7,
    title: 'Small Scale - Hydrography',
    details: {
      'Map Scale': '1:10000',
      'Contour Interval': '5.0m',
      'Area': '14155.45 ha',
      'Camera':'UltraCamXp'
    },
    description: 'Digital cartographic data generation from digital aerial images using stereo compilation method.',
    images: 2
  },

  {
    id: 8,
    title: 'Airport Mapping',
    details: {
      'Map Scale': '1:5000',
      'Contour Interval': '5.0m',
      'Area': '175 sq km',
      'Camera':'Six GeoEye Stereo Pairs'
    },
    description: '3D Cartography updating around airport in order to identify the obstacles for the planes approximation and DSM generation by incorporation of building data.',
    images: 3
  }
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
          src={`/images/project-images/cartographyprojects/project-${projectId}-${currentImage + 1}.jpg`} 
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
const CartographyProjects = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          3D - Cartography
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

export default CartographyProjects;