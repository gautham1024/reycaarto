import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Project data (extracted from the document)
const projects = [
  {
    id: 1,
    title: 'Large and Small Scale Mapping',
    details: {
      'No of Photo frames': 6527,
      'Scale 5000': 2239,
      'Scale 2000': 4176,
      'Scale 1000': 112,
      'Sensor': 'Airborne',
      'Camera': 'UltracamXP'
    },
    description: 'This project includes three scales for same area and involves triangulation detailed mapping and orthophoto generation. Firstly triangulation of three sets of imagery and then DTM compilation for 1:5000 scale mapping and Detailed mapping from 1:2000 scales.',
    images: 3
  },
  {
    id: 2,
    title: 'Large Scale Urban Mapping',
    details: {
      'No of Photo frames': 1309,
      'Scale': 1000,
      'Sensor': 'Airborne',
      'Camera': 'DMC01-129',
      'Image format': 'RGB+IR'
    },
    description: 'Triangulation of all images have been completed in single block using GPS/IMU and Ground control points. The quality of AT has been verified by the residuals of ground controls and tie points.',
    images: 2
  },

  {
    id: 3,
    title: 'Triangulation for World View Stereo Pairs',
    details: {
      'No of Satellite Image pairs': 6,
      'Scale': 5000,
      'Sensor': 'World View',
      'Image format': 'Gray Scale'
    },
    description: 'The purpose of the project is to restitute the obstacles around the airport area. This has been ahieved by restituting the building block, towers, mosque and other constructions. Restitution of building blocks with elevation (height) points and Delimitation of roads, streets, wooded area, Agriculture, pasture, bare soil and Rivers, lakes in urban and rural areas.',
    images: 3
  },

  {
    id: 4,
    title: 'AT for World View Stereo pair',
    details: {
      'Set 1 Satellite Pairs': 3,
      'Set 2 Satellite Pairs':5,
      'Scale': 5000,
      'Sensor': 'World View',
      'Image format': 'RGB'
    },
    description: 'Satellite Image pairs have been oriented by using client provided ground control points and achieved an accuracy of 0.3m. The projection used was UTM WGS84 (32S)',
    images: 2
  },

  {
    id: 5,
    title: 'Triangulation of IKONOS Imageries',
    details: {
      'No of Satellite pairs': 2,
      'Scale': 5000,
      'Sensor': 'IKONOS',
      'Image format': 'RGB'
    },
    description: 'The Satellite stereo pairs have been trimagulated by using the client provided ground control points.Cartographical elements have been mapped as per the specification at 1:5000 scale.',
    images: 1
  },

  {
    id: 6,
    title: 'Triangulation of Imageries from different Sensors',
    details: {
      'No of Images': '15(different locations)',
      'Sensor': 'IKONOS, QuickBird',
      'Image format': 'RGB'
    },
    description: ' Satellite Imagery from different sensors have been georeferenced by using client provided ground control points. Then it was orthorectified using the Provided DEM.',
    images: 1
  },

  {
    id: 7,
    title: 'Triangulation of RapidEye Imageries',
    details: {
      'No of Satellites': 2,
      'Sensor': 'RapidEye',
      'Image format': 'RGB'
    },
    description: ' Individual NTF images with rpc information(GCS-Lat/Long). Six GCPS  information with their coordinates. 5 band multispectral images have been created by merging the 5 individual NTF images from RapidEye by using layer stack option in Erdas software.',
    images: 3
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
          src={`/images/project-images/triangularprojects/project-${projectId}-${currentImage + 1}.jpg`} 
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
const TriangulationProjects = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Triangulation of Aerial and Satellite
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

export default TriangulationProjects;